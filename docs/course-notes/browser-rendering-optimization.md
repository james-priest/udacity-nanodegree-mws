---
title: Browser Rendering Optimization
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD032 -->
<!-- # Mobile Web Specialist Nanodegree -->
# Browser Rendering Optimization

[<-- back to Mobile Web Specialist Nanodegree homepage](../index.html)

---

## 9. The Critical Rendering Path
### 9.1 Course Introduction
Hi I'm Paul Lewis and I'm a Developer Advocate at Google. And I'm Cameron Pittman. I make front end web development courses here at Udacity.

[![bro1-1](../assets/images/bro1-1-small.jpg)](../assets/images/bro1-1.jpg)

We're here to help you develop apps that run at a silky smooth 60 frames per second. And you may think it's just JavaScript that you need to worry about but there's actually a lot more to it than that. This course is about changing the way that you approach performance issues. We're going to help you look at the bigger picture.

Okay let's play a game.This was made by my colleague Jake Archibald and it's designed to show off problems with frame rates and performance on the web.

[![bro1-2](../assets/images/bro1-2-small.jpg)](../assets/images/bro1-2.jpg)

See these ships at the top? They move smoothly. The ones at the bottom judder. The game is super simple; shoot the juddering ships as quickly as you can by clicking on them. You're going to have to spot them amongst the smooth ones.

### 9.2 Jank Invaders
[![bro1-3](../assets/images/bro1-3-small.jpg)](../assets/images/bro1-3.jpg)

Link to [Jank Invaders Game](http://jakearchibald.github.io/jank-invaders/)

### 9.3 Lesson Intro
Throughout this course you'll be working on a bunch of samples with performance issues. But by the end of the course, you'll be applying what you've learned to make silky, smooth experiences.

But first, in order to develop an app that runs at 60 frames per second, you need to understand what goes into creating each frame.

In this lesson, you'll be getting the background knowledge that you need about the browser's rendering pipeline.If you've taken web performance optimization with Ilya Gregorich and me, this will seem pretty familiar.

The point of this lesson is to help you experience what potential bottlenecks may slow down rendering.

In the next lessons, you'll be diagnosing and solving common performance issues, as well as getting a sense for how to approach performance at different stages in your app's life cycle.

### 9.4 Juddering
Avoiding jutter is extremely important to users. You just saw what a difference it made in Jank Invaders just now. But, it's not just games. It can affect all sites and web apps.

Let's put that in the context of native apps a second. Think about what you do when you're choosing between two native apps that do the same kinds of things. How do you decide between two?

Well, I'll look at reviews and see what people say about the app's features and, you know, I'm also interested in performance. A quick look around poorly rated apps tells you that users notice and they care when an app judders or stops for,like, one to two seconds whenever I click on this thing.

When that happens they, and you, would choose an app that performs better and it's no different with the web.

Bad performance kills good sites. Equally, users love experiences that are smooth, that stick to their finger and react quickly. Another colleague of mine Paul Kinlan ran a survey about the features that people want from a news app. And the most requested feature was smooth navigation. Smooth, as in, no jank. In fact, 77% of people wanted it.

This course will explain how you can think about your project's performance and what tools you have at your disposal, and what you're looking for and how to fix common issues. You're going to hunt down causes of sticky scrolling, flickering updates, and juttering animations.

But first, you'll start your 60 frames per second journey by exploring what goes into a single frame.

### 9.5 Frames
If there's any kind of visual change on screen, from scrolling to animations, the device is going to put up a new picture, or frame, onto the screen for the user to see.

Most devices today refresh their screen 60 times a second, which we measure in hertz. And so to match that we need to have 60 frames to put up.

[![bro1-4](../assets/images/bro1-4-small.jpg)](../assets/images/bro1-4.jpg)

Most of the time we'll refer to this as 60 frames a second or fps.

People are especially good at noticing when we miss one of these frames. And they don't like it. Think of how easy it was to spot in Jank Invaders. If the browser is taking too long to make a frame, it will get missed out. The frame rate will drop and users will see stuttering. If it's really bad, then the whole screen can lock up, which is the worst.

### 9.6 Quiz: ms Per Frame
[![bro1-5](../assets/images/bro1-5-small.jpg)](../assets/images/bro1-5.jpg)

#### 9.6 Solution
I'll take 1000 milliseconds and divide it by 60 frames per 1000 milliseconds and I'll get about 16 milliseconds per frame.

[![bro1-6](../assets/images/bro1-6-small.jpg)](../assets/images/bro1-6.jpg)

This means that in order to achieve a silky smooth 60 frames per second, you need to keep all of the work in making the frame under 16 milliseconds.

But actually, the browser also has some housekeeping work to do in every frame. So realistically, you have **somewhere in the region of 10 to 12 milliseconds** to get everything done and make sure the frame arrives on time.

### 9.7 What's in One Frame
You can't optimize your app's frame rate if you don't understand how the browser actually renders a frame. So you need to learn how a page is actually put together when it's first loaded.

Okay, so let's take a look at what goes into making a frame.

Initially the browser makes a GET request to a server. The server responds by sending some HTML.

[![bro1-7](../assets/images/bro1-7-small.jpg)](../assets/images/bro1-7.jpg)

At this point, the browser does some pretty clever stuff with lookahead parsing. But what we care about is that it parses the document and gives us these notes.

[![bro1-8](../assets/images/bro1-8-small.jpg)](../assets/images/bro1-8.jpg)

In Chrome DevTools, you'll see it as Parse HTML.

Okay, so this is what the DOM looks like as a tree. But let's just make it a bit easier for ourselves, and call it the DOM.

[![bro1-9](../assets/images/bro1-9-small.jpg)](../assets/images/bro1-9.jpg)

As well as the DOM, we also have CSS. And this comes from the user agent, it comes from your style sheets or any inline styles you have, and perhaps third party styles.

The next part of the process is to combine the DOM and CSS.

[![bro1-10](../assets/images/bro1-10-small.jpg)](../assets/images/bro1-10.jpg)

In the tools you're going to see this as Recalculate Styles.

When combined, we get a new tree called the Render Tree.

[![bro1-11](../assets/images/bro1-11-small.jpg)](../assets/images/bro1-11.jpg)

The Render Tree looks pretty similar to the DOM, except that some things are missing.

[![bro1-12](../assets/images/bro1-12-small.jpg)](../assets/images/bro1-12.jpg)

For example, we don't have the head anymore, we don't have any scripts. In fact, if we had some CSS that set the section paragraph to `display: none`, then it would be removed from the render tree.

[![bro1-13](../assets/images/bro1-13-small.jpg)](../assets/images/bro1-13.jpg)

Equally if we had some CSS that added a pseudo element like after or before, this would get added to the render tree even though it doesn't live in the DOM.

[![bro1-14](../assets/images/bro1-14-small.jpg)](../assets/images/bro1-14.jpg)

It's important to note that only elements that will actually be displayed on the page will make it into the render tree.

So this is essentially a simplified view of where the critical rendering path optimization gets you.

### 9.8 Quiz: Render Tree
[![bro1-15](../assets/images/bro1-15-small.jpg)](../assets/images/bro1-15.jpg)

#### 9.8 Solution
[![bro1-16](../assets/images/bro1-16-small.jpg)](../assets/images/bro1-16.jpg)

And the correct answer is any element with a class of style none.

If an element is set to display none that means that the element is not going to be rendered whatsoever. For the other three options, though they may not take up any space on the page that you're seeing they're still a part of the page. Which means that the browser will still put style three, style four, and style two before on the render tree.

In order for `.style2` to end up in the render tree, it needs to have some content, like '' assigned to it.

### 9.9 DOM & Render Tree
Okay, back to the rendering process of a single frame.

Once the browser knows which rules apply to an element, it can begin calculate layout. Or it, in other words, how much space elements take up and where they are on the screen.

So, here's all the CSS that we want to apply. And layout turns this tree

[![bro1-17](../assets/images/bro1-17-small.jpg)](../assets/images/bro1-17.jpg)

into a collection of boxes like this.

[![bro1-18](../assets/images/bro1-18-small.jpg)](../assets/images/bro1-18.jpg)

In the tooling, you'll see this as layout.

The web's layout model means that one element can affect others. So, for example, the width of body typically affects the children's widths and so on, all the way down the tree. So the process can be quite involved for the browser. Sometimes, you may hear layout called reflow. It's the same thing.

The next step in the process is to talk about vector to raster. For example, the boxes we had before were vectors like this, just shapes.

[![bro1-19](../assets/images/bro1-19-small.jpg)](../assets/images/bro1-19.jpg)

But now what we need to do is fill in individual pixels, like this. And that's what a rasterizer is for.

[![bro1-20](../assets/images/bro1-20-small.jpg)](../assets/images/bro1-20.jpg)

So, this is the layout we had before, and these are the draw calls that the rasterizer will make to fill it in.

[![bro1-21](../assets/images/bro1-21-small.jpg)](../assets/images/bro1-21.jpg)

When done, it will look like this.

[![bro1-22](../assets/images/bro1-22-small.jpg)](../assets/images/bro1-22.jpg)

But that's a little too quick, so let's step through and see it build up the picture bit by bit.

So you can see, these rectangles start to appear, then some text.

[![bro1-23](../assets/images/bro1-23-small.jpg)](../assets/images/bro1-23.jpg)

And we get a shadow, a white line, a picture, and finally it tightens up.

[![bro1-24](../assets/images/bro1-24-small.jpg)](../assets/images/bro1-24.jpg)

The tooling is going to show you this as paint.

You may have noticed in that previous list that one of the calls was called `drawBitmap`. What we normally do is we send things like JPEGs, orPNGs or GIFs down the wire to our page. But what the browser has to do is decode these into memory, like this.

[![bro1-25](../assets/images/bro1-25-small.jpg)](../assets/images/bro1-25.jpg)

In the tooling, you'll see it as Image Decode. Potentially, we're doing something like responsive web design. And so the image may also need resizing.

Painting, as you may have noticed just now, was done into a single surface. However, sometimes browsers make multiple surfaces called layers or compositor layers and it can paint into those individually.

[![bro1-26](../assets/images/bro1-26-small.jpg)](../assets/images/bro1-26.jpg)

So here I have a site and this masthead has its own layer. That means we can paint the content behind. And we can paint the masthead itself.

[![bro1-27](../assets/images/bro1-27-small.jpg)](../assets/images/bro1-27.jpg)

The process of handling these layers is shown in the tooling as composite layers.

This masthead is a layer, but because we have buttons for next and previous on top of it they are also turned into layers as well.

[![bro1-28](../assets/images/bro1-28-small.jpg)](../assets/images/bro1-28.jpg)

In this course, we're going to talk about layer management to make sure that you don't create extra layers by accident.

Now, we can put all these layers back together. And so now we've finished painting all the layers for our page. To be honest, painting actually happens into a grid of tiles like this.

[![bro1-29](../assets/images/bro1-29-small.jpg)](../assets/images/bro1-29.jpg)

I mentioned it for completeness, but it's not something we get to control as developers. All of this happened on the CPU. The layers themselves and their tiles will be uploaded to the GPU.

[![bro1-30](../assets/images/bro1-30-small.jpg)](../assets/images/bro1-30.jpg)

Again, this will be included in composite layers. And lastly, the GPU will be instructed to put the pictures up on the screen.

[![bro1-31](../assets/images/bro1-31-small.jpg)](../assets/images/bro1-31.jpg)

And that, in brief, is how we get from a single request all the way through to pixels on screen.

### 9.10 Quiz Layout
For this quiz, I'm giving you a sample DOM, there's a body with a div container underneath it. And then a child div underneath the container.

[![bro1-33](../assets/images/bro1-33-small.jpg)](../assets/images/bro1-33.jpg)

If you make changes to the geometry of any of these elements, the browser will have to run layout. So, my question for you is, which of these elements, will when changed, include more of their parent elements in the scope of the resulting layout.

In other words, will changing the geometry of any of these elements trigger layout against most or all of the page? If so, which one triggers more? You can use [the sample site to find out](http://udacity.github.io/60fps/lesson1/layoutPaint/index.html).

Clicking once makes a change to the body, clicking again makes a change the top level div, and the last click changes the child div.

If you're already familiar with DevTools, you can record a timeline trace to see what layout happened after each click on this page. If not that's no big deal,you'll be learning how to use the timeline next lesson, and i'll be demonstrating how to find information about layout in the solution video.

You can also check out the link in the instructor notes fora little bit more information. So, do some analysis if you can, but otherwise make a prediction. Will changing the width of the body trigger layout with a larger scope than changing the width of this div, or will they have the same scope? Pick one of these answers.

[![bro1-32](../assets/images/bro1-32-small.jpg)](../assets/images/bro1-32.jpg)

#### Links

- [Sample Site](http://udacity.github.io/60fps/lesson1/layoutPaint/index.html)
- [How to Use the Timeline Tool](https://developer.chrome.com/devtools/docs/timeline#rendering-event-properties)  - The Timeline tool is now deprecated'. See Performance Tool below.
- [Get Started With Analyzing Runtime Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/) - Replaces Timeline Tool

#### 9.10 Solution
Which change creates more work for the browser during layout?

- [ ] Changing the width of the body
- [ ] Changing the width of the div
- [x] They create the same work

Right! No matter what, layout needs to be run against the whole page.

Believe it or not the correct answer is that they have the same scope. In both cases the browser has to assume the worst. Meaning that the change invalidated the entire DOM.

The browser then has to keep the entire DOM in scope while it's running layout. This is the Performance panel in dev tools which you'll be spending quite a bit of time with later in this course.

[![bro1-34](../assets/images/bro1-34-small.jpg)](../assets/images/bro1-34.jpg)

To see what happens when I click around on the page, I will go ahead and click this button which starts recording and then I will click once, twice, three times and then stop recording.

[![bro1-35](../assets/images/bro1-35-small.jpg)](../assets/images/bro1-35.jpg)

Like I said, you'll be spending quite a bit of time with this tool later in the course, so I’m going to quickly zoom in and show you what you need to see.

This is the first click event which affected the geometry of the body.

[![bro1-36](../assets/images/bro1-36-small.jpg)](../assets/images/bro1-36.jpg)

You can see that the click lead to other pieces of work.

Next I click on the Layout segment which gives me further detail.

I can see that "Nodes That Need Layout" is **3 of 5**. Which means that three of the five DOM nodes are affected by this.

[![bro1-37](../assets/images/bro1-37-small.jpg)](../assets/images/bro1-37.jpg)

Okay now I wonder what it looks like for the other two elements.

Here's the second click event, which affected the top level div. And this is the resulting layout.

[![bro1-38](../assets/images/bro1-38-small.jpg)](../assets/images/bro1-38.jpg)

Notice that, in this case, that four of the five nodes were affected by this.

Now I'll look at the last one. Here's the last click event on the child div. So this div is the farthest down on the DOM. And here's the resulting layout.

[![bro1-39](../assets/images/bro1-39-small.jpg)](../assets/images/bro1-39.jpg)

Here it looks like all five nodes are affected by this.

You may have noticed as I was going through the clicks that the different layout events affected different numbers of nodes. But the whole time the entire DOM was in scope.

In case you're wondering, it's possible but very difficult to limit layout scope. You can use something called a layout boundary but Paul and I won't be getting into that in this class.

So if there is one take away from this question, it's that the layout process is complicated and it's probably best to assume that the entire DOM is always in scope.

### 9.11 Layout and Paint
So this is what a typical frame looks like for as developers when things are more than just a static page.

[![bro1-40](../assets/images/bro1-40-small.jpg)](../assets/images/bro1-40.jpg)

It looks like the pipeline I talked about just before except I've now chucked JavaScript at the front.

Normally, you're going to use JavaScript to handle work that will result in visual changes. Whether it's jQuery's animate function, sorting a data set, or adding DOM elements to the page. But you don't have to use JavaScript for your visual changes. In fact, for many applications developers use CSS animations, transitions, or even the new Web Animations API to make visual changes to their page.

[![bro1-41](../assets/images/bro1-41-small.jpg)](../assets/images/bro1-41.jpg)

Now with that out of the way, we can talk about the pipeline a bit more.

The changes we make here won't necessarily trigger every part of the pipeline either. In fact, there are three ways the pipeline normally plays out fora given frame. So let's talk about those for a second.

#### One
So number one, you make a visual change either with CSS Or JavaScript.

[![bro1-42](../assets/images/bro1-42-small.jpg)](../assets/images/bro1-42.jpg)

The browser must recalculate the styles of the elements that were affected. Now if you changed a layout property, so that's one that changed an element's geometry like its `width`, `height`, or position with relation to another element like `left` or `top`, then the browser will have to check all the other elements and re-flow the page. Any affected areas will need to be repainted. And the final painted elements will need to be composited back together.

#### Two
The second way the pipeline gets used is when you change a paint only property, like `background-image`, text `color`, or shadows.

[![bro1-43](../assets/images/bro1-43-small.jpg)](../assets/images/bro1-43.jpg)

This time, we make the change, the styles are calculated, we don't do layout because we didn't change the geometry of any elements. We do paint and we do composite.

#### Three
And the last way involves changing something that requires neither layout, nor paint, just compositing.

[![bro1-44](../assets/images/bro1-44-small.jpg)](../assets/images/bro1-44.jpg)

Compositing is where the browser puts the individual layers of the page together. And that requires layer management to ensure we have the right layers, and in the correct order. So we make our change. We do style calculations, but we only do composite.

You probably noticed that style was always included for each of those variations. Different styles affect which parts of the pipeline we touch; And therefore the performance characteristics of our apps.

### 9.12 Quiz: Render
Here's a scenario for you to consider. Flexbox is a very useful tool for responsive design. It's a CSS display property that resizes elements, and reflows them on the page. For instance, imagine you've got these three elements on a page and then the user resizes the screen to become larger. As a result, the elements themselves become larger.

[![bro1-45](../assets/images/bro1-45-small.jpg)](../assets/images/bro1-45.jpg)

In this scenario, which of the following processes does the browser perform to render the new page? Does the browser perform style, layout, paint, or composite? Check all that apply.

#### 9.12 Solution
I'll start with style. There are no style calculations here, because the element styles are already known. So, on the screen resize event, the styles are actually applied through layout. And as you just learned, if the browser runs layout, it also has to paint the elements in their new positions on the page, and then composite them together.

[![bro1-46](../assets/images/bro1-46-small.jpg)](../assets/images/bro1-46.jpg)

There are actually exceptions to the lack of style here, however. If there was a resize handler that changed the style, or if a media query break point was hit, then the browser would actually have to recalculate styles. But that's not happening here, so don't check that box.

### 9.13 Quiz: CSS Research
For this quiz, I want you to head over to [csstriggers.com](https://csstriggers.com/) and do some research.

I want you to find a CSS property that triggers layout, paint, and composite, and type it into the first box. Then find a CSS property that only triggers paint and composite and type it into the second box. Lastly, find a CSS property that only triggers composite and type it into the third box.

[![bro1-47](../assets/images/bro1-47-small.jpg)](../assets/images/bro1-47.jpg)

The reason you're checking out csstriggers.com is because it's a super useful resource for determining the amount of work your CSS will trigger.

It's really important to become familiar with it if you want to write performant websites.

#### 9.13 Solution
This quiz, I picked `margin-left` for layout, paint, and composite, `color` for paint and composite, and then `transform` for just composite.

[![bro1-48](../assets/images/bro1-48-small.jpg)](../assets/images/bro1-48.jpg)

Not all CSS is created equal. Some CSS properties have much wider-reaching consequences than others.

Your CSS should trigger the least amount of work possible, and that's going to mean avoiding paint and layout whenever possible.\

Transforms and opacity are far and away the best properties to change, because they can be handled just by the compositor if the element has its own layer. You'll learn more about how to create and manage layers later in the course.

### 9.14 Final Project
Right now you are looking at the app that you'll be debugging at the end of this course.

[![bro1-49](../assets/images/bro1-49-small.jpg)](../assets/images/bro1-49.jpg)

It uses the Hacker News API to show the most recent stories and their scores.

Right now its performance is pretty awful, especially on mobile, but there's really no reason it shouldn't be hitting 60 frames per second.

By the end of this course, you'll have the skills, techniques, and above all, you'll have the mindset needed to turn this janky experience into an amazing 60 frames per second experience.

### 9.15 Lesson Outro
Okay, you're well on your way to getting some good performance. You know

- why we care about hitting 60 frames a second
- what goes into making a frame
- that the properties we change affect the performance in different ways

In the next lesson, you'll begin your first real performance battle. Jank is more problematic at some points in an app's life cycle than at others .And you'll need to spend your time and effort on the areas that matter most to your users.

## 10. App Lifecycles
### 10.1 Lesson Intro
In the first lesson, you learned how the browser renders pixels from HTML, CSS,and JavaScript. Understanding this process is key to optimizing an app's performance.

[![bro1-1](../assets/images/bro1-1-small.jpg)](../assets/images/bro1-1.jpg)

In this lesson, you'll take a step back to think at a high level about your app's life cycle as a whole. The goal is to help you make intelligent choices about when your app can and should do the heavy work to create a buttery smooth experience for your users. 

Now, before we start, I have a question for you. Should your goal be to make your app run at 60 frames per second all of the time? The answer is no, actually, not quite.

It's important that you pick your battles a bit, and focus on the things that matter to your end users. When you think about it, there are actually four major areas of any web app's life cycle, and performance fits into them in very different ways.

### 10.2 RAIL
I call the four major areas of a web up's life cycle RAIL. RAIL stands for

- Response
- Animations
- Idle
- Load

Wait. That's not chronological order. Shouldn't it be LIAR?

- Load
- Idle
- Animation
- Response

It turns out LIAR is a less popular acronym than RAIL? It's just a good way to remember it, and yeah, even though, you do loads at the start, most apps do multiple loads with XHRs and web sockets and HTML imports.

Anyway, orders of letters, not withstanding, it's really a useful way to conceptualize and group your apps workload. 

Let's do them in chronological order though.

### 10.3 Load and Idle
So the first we're going to look at is Load. Whatever it is, users want it to load quickly, and it's super important that we optimize for the critical rendering path.

[![bro2-1](../assets/images/bro2-1-small.jpg)](../assets/images/bro2-1.jpg)

Earlier I took you through a quick tour of the rendering process in the first lesson,but essentially you want your initial load to be done in one second.

Okay, I'm going to switch across to Chrome, and I'm going to load Google Play Music, and I suspect it'll load in about one second.

[![bro2-2](../assets/images/bro2-2-small.jpg)](../assets/images/bro2-2.jpg)

Now after an app's loaded, it's normally idle, it's waiting for a user to interact. And this is our opportunity to deal with things that we deferred to meet that one second load time.

[![bro2-3](../assets/images/bro2-3-small.jpg)](../assets/images/bro2-3.jpg)

**Normally, these idle blocks are around 50 milliseconds long, although you may several of them in one go.**

These idle blocks are fantastic times to get some heavy lifting done so that when the user interacts things are nice and snappy. I'll stop for a second and let you think through the best way to approach an app's idle time.

### 10.4 Quiz: Idle Time
In this quiz, you'll be thinking about this hypothetical news app.

[![bro2-4](../assets/images/bro2-4-small.jpg)](../assets/images/bro2-4.jpg)

Inside the app, users will be reading articles about how California's in a drought. They'll be looking at images like this in London, where they actually do get rain. And they'll be watching videos like this, where a Golden Retriever is writing some JavaScript because that's definitely something that could happen.

You've booched up the app to render content above the fold pretty quickly. You also know from your analytics that most people look at a page for a couple of seconds, before they start interacting.

[![bro2-5](../assets/images/bro2-5-small.jpg)](../assets/images/bro2-5.jpg)

So, with that in mind, what kind of tasks should you handle during this post-load idle state?

[![bro2-6](../assets/images/bro2-6-small.jpg)](../assets/images/bro2-6.jpg)

Should you load the text for news stories? Should you load image assets? Should you load videos like the web deb Golden Retriever? Should you load the app's basic critical functionality? Or should you load the comments section?

#### 10.4 Solution
The correct answer is everything except for the news text and the basic critical functionality.

[![bro2-7](../assets/images/bro2-7-small.jpg)](../assets/images/bro2-7.jpg)

In order for the app to even work, you've got to deliver the basic critical functionality. So this shouldn't be coming after the load.

Also, people would be visiting a site like this specifically to read the news text, so they should be there as soon as the first pixels are being painted.

Everything else though, like images, videos and the comments section can come later. In fact, this is probably a pattern you've seen before on other apps.

Keep in mind, however, that user actions could actually still happen during the post load idle state. And in a moment you'll learn that **you only have one hundred milliseconds to respond to those actions**.

This makes it all the more important to **keep the post load task that you're performing to fifty millisecond chunks**.

### 10.5 RAIL Response
You've handled Load and considered what you might do during periods of idle time.But what next?

[![bro2-8](../assets/images/bro2-8-small.jpg)](../assets/images/bro2-8.jpg)

Well, the user's going to interact with the app, and you need to be responsive to that. This isn't responsive in the sense that it responds to screens of different sizes. This is responsive in the sense that it reacts to the user input without delay.

Well how responsive does it need to be then? Well, studies show that there is a limit of 100 milliseconds. So a tenth of a second after someone presses something on screen before they notice any lag.

[![bro2-9](../assets/images/bro2-9-small.jpg)](../assets/images/bro2-9.jpg)

So if you can respond to all user input in that time, you're good to go.

That's great if the thing they did was to say, toggle a check box or tap a button. And you show a single change, like a selected state. But there's another version of this which is more challenging, which is that the user does something that requires animation.

The most challenging performance issues always come out of the need to hit 60 frames a second. Which is either interactions that stick to the user's finger or transitions and animations.

For those we have a limit of 16 milliseconds. Which is one second or a thousand milliseconds divided by 60.

[![bro2-10](../assets/images/bro2-10-small.jpg)](../assets/images/bro2-10.jpg)

In reality, we actually have less than 16 milliseconds, because the browser has overhead. So really we get around 10 to 12 milliseconds. That's not a lot of time.

### 10.6 RAIL Animations 1
So some user interactions need 60 frames a second, but so do transitions and animations, like card expansions or menu sliding in. Those need to be at 60 frames a second, too, which isn't always simple.

[![bro2-10](../assets/images/bro2-10-small.jpg)](../assets/images/bro2-10.jpg)

It's so easy to accidentally trigger performance issues, unless you're very careful about which properties you animate and when.

There are many ways to tackle animations, and it completely depends on your project. I'll give you an example of one approach I've used. It feels like I'm kind of getting into "weird trick" territory here, but seriously this one actually works.

For the 2014 Chrome Dev Summit web sites, I wanted to animate these cards.

[![bro2-11](../assets/images/bro2-11-small.jpg)](../assets/images/bro2-11.jpg)

I couldn't expand the cards fast enough to maintain 60 frames a second, so I had to try something a bit different. I tried working backwards.

I call my strategy FLIP. First, Last, Invert, Play.

[![bro2-12](../assets/images/bro2-12-small.jpg)](../assets/images/bro2-12.jpg)

I took advantage of the fact that once the browser had done the initial hard work to run the animation once, I could run it backwards at very little cost. It's like pre-calculating the expensive work.

My code took the start point of a card,and then it took the end point when the card was expanded.

So let's say the card was about here when it started, and the icon was like this.

[![bro2-13](../assets/images/bro2-13-small.jpg)](../assets/images/bro2-13.jpg)

Using getBound and ClientRect, I measured all the elements' positions before and after.

[![bro2-14](../assets/images/bro2-14-small.jpg)](../assets/images/bro2-14.jpg)

That then meant I knew how far everything needed to move on the page, and if it's opacity changed, I also knew that as well.

So back here again. First - is where the card starts. Last - is where the card finished. Now we need to talk about inverting.

[![bro2-12](../assets/images/bro2-12-small.jpg)](../assets/images/bro2-12.jpg)

I use the information from first and last to apply transform and opacity changes to reverse the animation.

With a little bit of extra work with clipping, it was like the card had never moved.

[![bro2-15](../assets/images/bro2-15-small.jpg)](../assets/images/bro2-15.jpg)

So, now we've inverted the animation. We can just simply play it and it runs smoothly.

### 10.7 RAIL Animations 2
And this is what it looks like in code.

[![bro2-16](../assets/images/bro2-16-small.jpg)](../assets/images/bro2-16.jpg)

- Firstly, we collect the properties of the card in a collapsed position.
- We expand the card and collect the properties again.
- Next, we figure out the differences and then we transform the card back.
- Because we made this style change we have to wait a frame for those style changes to take effect. Otherwise, if we change them again the browser would ignore these and we'd see no animation.
- Now we've waited a frame.We can switch on animations and remove the invert, transforms, and our past two changes.

All that property collection, probably sounds quite expensive and you may be wondering how you can afford to do it. It sounds like a lot, and it is. I mean, you're doing all these calculations on demand whenever a user clicks or taps on a card.

Well it turns out, I was making use of the 100 millisecond response window to do all those experts of calculations up front.

[![bro2-17](../assets/images/bro2-17-small.jpg)](../assets/images/bro2-17.jpg)

On a Nexus 5 it took around 70 milliseconds to get everything done, which is well inside that 100 millisecond boundary.

### 10.8 Quiz: Rendering Animations
Paul just explained how he used FLIP to create a pretty snazzy animation. He performed all the hard calculations up front, so that he would touch as little of the pipeline as possible during the actual animation.

This is how he kept it going at a silky smooth 60 frames per second. When he applied opacity and transform changes to reverse the animation, what steps in the rendering pipeline did Paul trigger?

[![bro2-18](../assets/images/bro2-18-small.jpg)](../assets/images/bro2-18.jpg)

Did the HTML need to get converted to the DOM? Did the CSS need to get converted to the CSSOM? Did the DOM and CSSOM need to be combined into the Render Tree? Did the browser have to run Layout again, Composite again, or Paint again? Check all that apply.

#### 10.8 Solution
Great job! Notice how `opacity` and `transform` only trigger composite? Keep that in mind as you build your performant apps.

[![bro2-19](../assets/images/bro2-19-small.jpg)](../assets/images/bro2-19.jpg)

As you just discovered, changes to `opacity` and `transform` only trigger composite when the elements are on their own layers. But remember, Paul also had to use clip to reverse the animation. And that, unfortunately, requires paint.

It's important to always understand the implications of any property you choose to animate, because some are definitely cheaper than others.

### 10.9 Quiz: Interactions & Animations
During the response section of rails. You saw that you have about 100 milliseconds to respond to user input. But, some user interactions also require animations which then need to run at 60 frames per second.

What kind of interactions do you think require 60 frames per second animations?

[![bro2-20](../assets/images/bro2-20-small.jpg)](../assets/images/bro2-20.jpg)

Should spinners always be running at 60 frames per second ?What about scrolling? Dragging and dropping, Pinching, Pulling to refresh, Menus sliding out from the side, Comment section opening from below, Changing the state of items and forms, Or last but not least, changing the themes of an app? Check all that apply.

#### 10.9 Solution
As it turns out, anything that involves movement or finger on screen interactions will need to run at 60 frames per second.

[![bro2-21](../assets/images/bro2-21-small.jpg)](../assets/images/bro2-21.jpg)

The only two items that don't fall into those categories are toggling form controls and app theme changes. For these two, you still have 100 milliseconds to respond, but afterwards, the app must continue running at 60 frames per second if it's going to keep feeling responsive.

### 10.10 RAIL Review
LIAR stands for 

- Load
- Idle
- Animations
- Responsiveness.

#### Load
During the Load stage you have about one second or a thousand milliseconds to render the page before the app no longer feels responsive, and the user's attention level falls.

**Download and render your critical resources here.**

#### Idle
After loading, the app is Idle, and this is a great time to do non-essential work to ensure that whatever interactions occur after this period will feel instantaneous.

**Your app's idle time should be broken down into 50 millisecond chunks so that you can stop when the user starts interacting.**

#### Animation
During the Animation stage, such as when users are scrolling or animations are occurring, **you only have 16 milliseconds to render a frame**.

**This is when 60 frames per second is absolutely critical.**

#### Response
Lastly, there's the Response period. The human mind has about 100 milliseconds' grace period before an interaction with the site feels laggy and janky.

**That means your app needs to respond to user input in some way within a 100 milliseconds.**

Using this time wisely is absolutely critical for setting up difficult animations that run at 60 frames a second.

In the next few quizzes, you'll be asked to apply what you've learned about RAIL in some real-world scenarios.

### 10.11 Quiz: RAIL 1
For this quiz I want you to pretend that you're developing an app that displays a loading gif like this one while video resources are being buffered.

Do you think it's a good idea to request this gif just during the animation phase? It's also worth noting that if you're requesting the gif during the animation phase you also have to insert it into the page during the animation phase.

[![bro2-22](../assets/images/bro2-22-small.jpg)](../assets/images/bro2-22.jpg)

#### 10.11 Solution
The correct answer is either one of these.

[![bro2-23](../assets/images/bro2-23-small.jpg)](../assets/images/bro2-23.jpg)

Realistically, there is no way that GIF is going to show up in less than 16 milliseconds and the request adds extra overhead, too, in the animation phase, which is not the time to handle it.

Have the GIF prepared well in advance before the users actually click on video. It's small, so why not make it a part of the initial app load? Either way, don't request it now.

### 10.12 Quiz: RAIL 2
I want you to think through the Idle stage. This user has just loaded an app with baseball scores on it. Right now they're in the 50 millisecond idle period before they start to interact with the app.

[![bro2-24](../assets/images/bro2-24-small.jpg)](../assets/images/bro2-24.jpg)

Which of the following tasks can you accomplish in this 50 millisecond period? Check all that apply.

#### 10.13 Solution
[![bro2-25](../assets/images/bro2-25-small.jpg)](../assets/images/bro2-25.jpg)

The correct answer here is that you can pretty much do whatever you want so long as it's not for above-the-fold content, which in all reality, the user should already have downloaded.

### 10.13 Lesson Outro
So at this point, you know what you can afford to do and when you can do it, which is pretty handy.

Now one thing to bear in mind is just because you can, say, paint or do layouts or even run JavaScript doesn't mean you have an unlimited budget. Layouts and style calculation times for example, both depend on the number of elements that are affected.

As you'll see soon, one of the ways you can keep that time down is to reduce the number of elements on which they have to work.

This table shows time allowances for different tasks. It'll help you set a budget for each of those tasks.

So that you and any other developers you're working with are all on the same page. It's time to drill into the specifics of resolving performance issues

[![bro2-26](../assets/images/bro2-26-small.jpg)](../assets/images/bro2-26.jpg)

In the next lesson you'll be taking a look at the tools that you have at your disposal for identifying jank in your apps.

The first step in reducing jank is identifying its cause which is exactly what you'll do.

## 11. Debug Tools
### 11.1 Intro
At this point, you know that performance is important, and you know what the parts of the pipeline are. So, now it's time to learn how to use the tools at your disposal to identify and destroy jank

The main tool you're going to use is Chrome's DevTools, and in particular, the Performance panel. In this lesson you'll dive into DevTools' Performance view to start to identify exactly where jank is happening.

### 11.2 DevTools
You can open up the developer tools by hitting Cmd+Alt+J on a Mac or Ctrl+Alt+J on PC. 

[![bro3-1](../assets/images/bro3-1-small.jpg)](../assets/images/bro3-1.jpg)

Now that we're in DevTools, we need to go to the Performance panel. Performance is here to allow you to track frames per second (fps) for your project. You can record a timeline and it will tell you what fps you were getting and for each frame, what work was involved. That work will tie back into the pipeline you learned in the last lesson.

Now I'm going to hit record and then I'm going to scroll around the site. Now I can stop the recording and I get a load of records back. At first glance I think the user interface can be a little bit overwhelming, so let's just look at it bit by bit.

[![bro3-2](../assets/images/bro3-2-small.jpg)](../assets/images/bro3-2.jpg)

The green bars at the top indicate the frames per second. If we're trying to hit 60 frames a second, all these bars should be tall. The lower the bar the less frames per second. If we hover over any of the bars in the **Frames** row we will actually get the fps for that moment in time

Underneath, in the row labeled **Main** there's a load of information about how we spent our time in each of the frames. Right now it's quite zoomed out so we need to actually dive in a little bit deeper.

To do that we simply click drag in the frames area at the top, and now you see it's zoomed in a little bit more. You can also use the W, A, S, and D keys on your keyboard if you prefer.

[![bro3-3](../assets/images/bro3-3-small.jpg)](../assets/images/bro3-3.jpg)

Here in the details you can see the parts of the pipeline we discussed earlier. There's **JavaScript**, there's **Style Calculations**, **Layout**, **Layer Management**, **Paint**, and **Composite**.

If you've never taken a timeline recording before take a moment to go and take your first recording. Go to any website, it doesn't matter which, and hit record in the timeline. Then explore the timeline and see what you can find out.

Okay, cool. You're able to take timeline recordings, and you can quickly see where your hitting jank. But now you need to start digging into the details of those frames, and figure out why frames are running long.

#### 11.2 Links Resources
- [Parallax Demo Site](http://www.html5rocks.com/static/demos/parallax/demo-1a/demo.html)
- [Performance Panel REference](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)

### 11.3 Performance in Depth
So I have the DevTools Performance panel open here and I had it record what happened during the load of this page. Let's take a look at the records in a little more detail.

[![bro3-4](../assets/images/bro3-4-small.jpg)](../assets/images/bro3-4.jpg)

The first thing to notice is that they're color coded. Blue records are HTML being parsed. Now, normally this is really fast and I haven't personally seen a performance issue where this was the bottleneck, certainly not past the initial page load anyway.

Moving along a little bit, and zooming in with the W key, just drag that along a little bit, you can see that we actually have two purple records. One is Recalculate Style, and then there's Layout as well. You can also see I've got a green one here which is Paint, and a green one which is Composite.

[![bro3-5](../assets/images/bro3-5-small.jpg)](../assets/images/bro3-5.jpg)

This is called the flame chart and it represents the main thread activities. The x-axis represents the recording over time. The y-axis represents the call stack. The events on top cause the events below it.

Below that is a series of tabs.  The Summary tab and three additional tabular views for analyzing activities. Each view gives you a different perspective on the activities:

- Summary
- Bottom Up
- Call Tree
- Event Log

#### Summary
The **Summary** tab can show two things.

First, it shows a pie chart of the relative time spent on each activity for the selected time period.

[![bro3-6](../assets/images/bro3-6-small.jpg)](../assets/images/bro3-6.jpg)

Secondly, when you click an item on the flame chart it will display details about that item.

[![bro3-7](../assets/images/bro3-7-small.jpg)](../assets/images/bro3-7.jpg)

#### Bottom Up
- **Bottom Up** - When you want to view the activities where the most time was directly spent, use the Bottom-Up tab.

[![bro3-8](../assets/images/bro3-8-small.jpg)](../assets/images/bro3-8.jpg)

#### Call Tree
- **Call Tree** - When you want to view the root activities that cause the most work, use the Call Tree tab.
  
[![bro3-9](../assets/images/bro3-9-small.jpg)](../assets/images/bro3-9.jpg)

#### Event Log
- **Event Log** - When you want to view the activities in the order in which they occurred during the recording, use the Event Log tab.

[![bro3-10](../assets/images/bro3-10-small.jpg)](../assets/images/bro3-10.jpg)

### 11.4 Quiz: Reading Timeline
For this quiz, I want you to load a timeline. You can do it pretty easily. Simply right-click in the timeline and go to Save As to save one, or Load to load a timeline.

Loading a timeline is a super easy way to share and compare timelines. You can [download a timeline here for the exercise](https://www.udacity.com/api/nodes/4158208827/supplemental_media/timeline-l3-reading-timeline/download).

Once you've loaded the timeline, see if you can figure out which function caused `initWebGLObjects()` to run. Type it into this box. And finally, if this JavaScript was called during an animation,would it still be possible for the animation to reach 60 frames per second? Yes or no.

[![bro3-11](../assets/images/bro3-11-small.jpg)](../assets/images/bro3-11.jpg)

#### 11.4 Solution
I've got the Flame view open, and it's pretty apparent that some kind of work is being repeated over and over. I'll just go ahead and zoom into one of these chunks.

[![bro3-12](../assets/images/bro3-12-small.jpg)](../assets/images/bro3-12.jpg)

With this closer inspection, it becomes pretty obvious that render is causing InitWebGLObjects to be called.

At the top, you can see that the code ran for about 66 milliseconds, which is well over the 16 millisecond budget per frame. This unfortunately means that there is no way this app is going to run at 60 frames per second.

Looking at the frame viewer at the top, you can see that these frames are made up almost entirely of JavaScript, hence all the yellow bars. This means that this code is definitely going to need some refactoring if it's going to run at 60 frames per second.

So the correct answers are, render as the function and, no ,it is not going to run at 60 frames per second.

### 11.5 Identify Jank
Okay, I want to walk you through another example. This is a weight truck app I built a while ago. And I notice that when I open the menu on the left hand side, that it sticks and Janks.

[![bro3-13](../assets/images/bro3-13-small.jpg)](../assets/images/bro3-13.jpg)

So now with the timeline open, I'm going to see if I can find out what the cause is. The first thing I do is refresh the page, just so that I know I've got a fresh start. Next I hit record, bring out the menu, and stop recording.

Immediately, I see that there are three big spikes of yellow here. So, I'm going to select one of those and I realize that I am spending a lot of time in JavaScript. Once you zoomed in, you can also get details of what's going on in those frames.

[![bro3-14](../assets/images/bro3-14-small.jpg)](../assets/images/bro3-14.jpg)

Let me start by dragging this up a little bit more, so we can see it. You can see what it is, how long it's been working, when it started and a little bit more about how it's broken down. The time itself and any child records. Lastly, you find out where the task was triggered In your code.

[![bro3-15](../assets/images/bro3-15-small.jpg)](../assets/images/bro3-15.jpg)

The details will differ depending on the kind of record you're looking at. For example, Recalculate Style, tells you the number of elements that were affected, as does Layout.

With Layout, we see the tree size, the scope, where it started and in this case, we also see an additional warning. Which we'll talk about in a little bit. Lastly, we see where in the code we triggered layout.

[![bro3-16](../assets/images/bro3-16-small.jpg)](../assets/images/bro3-16.jpg)

In this case though, I would be most concerned about these large yellow blocks. They seem to be what's causing me to stop hitting 60 frames a second.

[![bro3-14](../assets/images/bro3-14-small.jpg)](../assets/images/bro3-14.jpg)

### 11.6 Test all Devices
One of the mistakes that people often make is to only test their site's performance on the desktop.

[![bro3-17](../assets/images/bro3-17-small.jpg)](../assets/images/bro3-17.jpg)

Because desktops are significantly more powerful than mobiles, it means you can miss performance issues that only show up when on device's CPU, memory or connectivity constrained.

What you want to do is where you can, test on real devices. If you have an Android device, you can use the same Chrome DevTools you know and love from your desktop. So I can start it, interact, stop,and you can see I got a timeline that I can work with.

[![bro3-18](../assets/images/bro3-18-small.jpg)](../assets/images/bro3-18.jpg)

If you don't have an Android device available, you can check out the instructor notes below for how to use the emulation settings in Chrome DevTools. Remember though, that the performance characteristics of simulators and emulators are wildly different to a device itself.

So while it's good for getting used to the workflow, you'll need to test on the device itself to make sure that you don't have any performance issues there.

In the next video, Peter Lovis is going to show you how you can useChrome DevTools with your Android device. If you already know, just skip ahead.

### 11.7 Setup for Mobile
The set up is simple. All you need is an Android device, a USB cable, and your development machine. Let's take a look.

Before you get started you need to turn on the Developer Mode in your Android device. This may be different on any given device and you can check your device's manual on how to do this. In many cases though, you need to go to your device's settings, click on About Device and then click on Build Number seven times. Seriously.

Next you'll want to turn on USB debugging. Again, this varies slightly on your given device, but this is usually located in the developer options. We also need to make sure we have the right tools installed. On my laptop, I have Chrome Canary and on my mobile device, I have Chrome Beta installed.

#### What is Chrome Canary and why should I use it
Chrome Canary is the developer version of Chrome. It looks and acts like the regular Chrome browser, but it includes new and experimental features that haven't been released yet. We recommend analyzing websites with Canary to take advantage of the latest tech. However, be warned that Canary isn't guaranteed to be stable, so expect crashes and occasional bugs.

#### Do I have to test on mobile
For the purposes of this course, no. But testing your websites on mobile is a best practice, and if you have the means to do so we highly recommend it.

### 11.8 DevTools on Mobile
Now that we have everything set up the way we need, open Chrome on your development machine and go to Chrome inspect. Make sure the site you want to debug is open on your mobile device and then connect your laptop to your mobile device via USB.Then confirm that you want to allow USB debugging.

Back in our development machine, we can see a list of the attached devices and the Chrome tabs that are open on the devices. You can even open other tabs.

[![bro3-19](../assets/images/bro3-19-small.jpg)](../assets/images/bro3-19.jpg)

We can also focus on specific tabs, you can reload them and you can even close a tab. The best part of course is that you can inspect the pages that are running on your mobile device, from your development machine.

[![bro3-20](../assets/images/bro3-20-small.jpg)](../assets/images/bro3-20.jpg)

One of my favorite new features is the new screen cast mode. This allows you to drive the experience on your mobile device from your development machine. You can click on links, and see them update simultaneously on the device. As well as on your desktop.

### 11.9 Mobile for iOS
Now, that was really easy and it's also possible to do this on mobile Safari with the web inspector using the iOS web kit debug proxy. Now, that's a little bit harder to set up, so check out the link below for more information.

[iOS WebKit Debug Proxy](https://github.com/google/ios-webkit-debug-proxy)

Please note that in the community, there is a discussion continuing about `ios-webkit-debug-proxy`. Depending on your version of canary, if you're using it, it might take a lot of time and some students suggest trying Safari Dev Tools and point to links like this:

https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/

Remember you can run in simulator mode in Chrome Dev Tools.

### 11.10 Quiz: More Timeline
Before this quiz starts, I want to talk testing strategy.

[![bro3-21](../assets/images/bro3-21-small.jpg)](../assets/images/bro3-21.jpg)

First off, you want to make sure that you're collecting clean data. So, you should first quit any other apps that you have running besides the browser. Along the same lines, extensions can skew your results. So, make sure you're running your tests in an incognito window.

You should also recognize that sometimes you may have several bottlenecks in your code, and they may be triggered in different ways from different parts of the pipeline. So, it's important that you focus on the causes of bottlenecks more than you focus on their symptoms.

And lastly, with any performance issue, make sure you always measure first, before you start to apply fixes. There's no point in fixing an issue you don't actually have. And you won't be able to know how well your fixes actually work unless you've measured first, so that you can compare the difference.

All right. Well, now it's time for you to practice your DevTools skills and take a timeline recording of [this website](http://jsbin.com/saxalu/2/quiet).

Start recording. Click on the Switch Layout button and then, see if you can figure out where the jank was caused inside the code.Type your answer into this box.

[![bro3-22](../assets/images/bro3-22-small.jpg)](../assets/images/bro3-22.jpg)

#### 3.10 Solution
Okay, here's my timeline. But you know, sometimes you can have a pretty good idea of where the cause of jank might be found in the pipeline, but other times it could be kind of tricky to find.

[![bro3-23](../assets/images/bro3-23-small.jpg)](../assets/images/bro3-23.jpg)

Now, I see a bunch of frames here, and it looks like the last scripting thing to happen before all the layouts happened right here. So, I'll go ahead and zoom in. I clicked on this last scripting event. I zoomed in a little bit further to see that this event caused a function to run, I'll click on it in see that it's location is in this quiet file at line 172.Click on that to see what it's referring to in fact this functionOn switch layout click is definitely the culprit that i'm looking for here.

[![bro3-24](../assets/images/bro3-24-small.jpg)](../assets/images/bro3-24.jpg)

Toggling wide on the body is causing all of those janky long layouts. So, the correct answer is the function `onSwitchLayoutClick`.

### 11.11 Quiz: Finding Jank
[Here's another link to a website](http://jsbin.com/nanana/2/quiet). Just like before, hit Record and hit Switch Layout.

Record a timeline trace, and see if you can figure out where the jank is coming from.
Once you think you've found the source of the Jank, type the name of the function into this box.

[![bro3-25](../assets/images/bro3-25-small.jpg)](../assets/images/bro3-25.jpg)

#### 11.11 Solution
The trace for the site is looking actually pretty close to 60 frames per second, but it's not quite there. All the big purple bars are a pretty good indication that there's probably too much layout happening.

[![bro3-26](../assets/images/bro3-26-small.jpg)](../assets/images/bro3-26.jpg)

Just like before, I want to find the cause of the jank, so I'll zoom into the beginning of the trace to see what started this mess. When I zoomed in it becomes pretty apparent that there's something wrong with these layouts. These red triangles definitely look like warning signs to me.

[![bro3-27](../assets/images/bro3-27-small.jpg)](../assets/images/bro3-27.jpg)

I've clicked on one, and then inside the Details pane I see a warning. The warning says that, "Forced reflow is a likely performance bottleneck." Well, this seems like a pretty useful message, and where's it happening?

On a function called `totesLayingOutYo`. Well, it's coming in at the `quiet` script on line 190. I think this might be the culprit. Just to make sure, I've clicked on the function that led to this forced reflow layout, and it's pointing me to the quiet script, too.

[![bro3-28](../assets/images/bro3-28-small.jpg)](../assets/images/bro3-28.jpg)

And there it is `totesLayingOutYo` on line 190, he's setting offset width which is forcing layout. And there you have it, there's the source of the jank.

This time the jank wasn't caused by the function that started it. But, in fact, it's a function that's being called every time a new frame has to be run. So the jank isn't caused by a function running at the beginning of the script, it's a function that's being called every frame by `requestAnimationFrame`.

This means the correct answer is `totesLayingOutYo`.

By the way, Paul and I will come back to this example later on in the course. You'll learn just a little bit more about what you're seeing here and what this performance issue is.

### 11.12 Quiz: More Jank
In the instructor notes, you'll find a link to this kind of terrifying website.

[![bro3-29](../assets/images/bro3-29-small.jpg)](../assets/images/bro3-29.jpg)

It may not look like much now but click this animate button and see what happens.

[![bro3-30](../assets/images/bro3-30-small.jpg)](../assets/images/bro3-30.jpg)

So this is a really super janky animation. Even on a new MacBook Pro, this thing barely chugs along. What I want you to do is record a timeline trace of what happens when you click the Animate button.

When you've got the timeline play with it along with the tabs and see which works better for you as you're analyzing the website.

Just like before, I want you to find where the ridiculous Jank in the timeline is coming from. So what is causing it? Pick one of these answers.

[![bro3-31](../assets/images/bro3-31-small.jpg)](../assets/images/bro3-31.jpg)

#### 11.12 Solution
I'm seeing a lot of green in the timeline, which is a pretty good indication that there's a Paint problem.

[![bro3-32](../assets/images/bro3-32-small.jpg)](../assets/images/bro3-32.jpg)

I'll go ahead and zoom into one of these frames. It looks like each frame is starting with the script. There's an Animation Frame Fired followed immediately by style calculations and then a Paint.

[![bro3-33](../assets/images/bro3-33-small.jpg)](../assets/images/bro3-33.jpg)

This looks like a JavaScript problem because if the problem was coming from CSS, then chances are I wouldn't be seeing an animation frame being fired.

So in the end it's pretty clear that there is a paint problem and it's being caused by JavaScript.

### 11.13 Lesson Outro
So now you know how to spot jank using DevTools and you're getting into the details of where jank is coming fromin the pipeline.

In the next lesson, you'll dive into the details just a little bit more as you look at the common causes of jank and how you can fix them.