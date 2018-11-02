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

### 9.3 Lesson IntroThroughout this course you'll be working on a bunch of samples with performance issues. But by the end of the course, you'll be applying what you've learned to make silky, smooth experiences.

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

### 9.10 DOM, CSSOM, Render Tree
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