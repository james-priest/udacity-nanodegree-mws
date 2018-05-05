---
title: Responsive Web Design Fundamentals
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD032 -->
<!-- # Mobile Web Specialist Nanodegree -->
# Responsive Web Design Fundamentals

[<-- back to Mobile Web Specialist Nanodegree homepage](../index.html)
<!--
| Lesson 1 | Lesson 2 | Lesson 3 | Lesson 4 | Lesson 5 |
| --- | --- | --- | --- | --- | --- |
| Why Responsive? | Starting Small | Building Up | Common Responsive Patterns | Optimizations | -->

### Supporting Links

- [Udacity Course - Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
- [Web Fundamentals - What Makes a Good Mobile Site?](https://developers.google.com/web/fundamentals/design-and-ux/principles/)
- [Web Fundamentals - Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
- [Web Fundamentals - Responsive Design Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- [MDN - meta Viewport tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)
- [MDN - Using media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)
- [Basic concepts of CSS Grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

## Lesson 1. Why Responsive
Pete LePage, a developer advocate at Google, and Cameron Pittman, a front end course developer at Udacity, discuss the advantage of Responsive Web Design.

[![rwdf1](../assets/images/sm_rwdf1.jpg)](../assets/images/full-size/rwdf1.png)

They are teaching this course to help us create websites that look and feel great across every device. We'll learn basic guidelines that make sites look great across a wide range of devices in use today.

### 1.1 Sites on Mobile
What does a site like Google News ([https://news.google.com/](https://news.google.com/)) do meet this challenge? They employ two different strategies; a fully responsive version for phones and tablets, and a second version for desktops that starts at a medium size.

This works well for them but adds an extra layer of complexity and work to keep things up to date.

A second example is a site like Skinny Ties ([https://skinnyties.com](https://skinnyties.com)) which is designed to be fully responsive across all devices, laptops, & desktops. This is Pete's preferred way of building sites because it'll remain adaptive for any device now or in the future.

### 1.2 What is a responsive site
A responsive site adapts its layout to fit the space available. This means that we only have to deal with a single codebase when building and maintaining our site. When we resize a window, the content reflows to fit the smaller viewport.

### 1.3 Intro to Project
The Brighton Times news site is currently **not** responsive. We'll be challenged to improve the site's responsiveness at the end of:

- Lesson 2
- Lesson 4
- Lesson 5

There is no one right solution.

> "Responsive Web Design is an art, not a science!"

To improve responsive design skill will require practice. During this course they'll talk through the code design decisions they made but they don't expect our answers to be the same.

This course is about *thinking* responsively; about approaching responsive design from the right mindset.

Cameron talks about redesigning his own site after having put this course together. He says it may not be the prettiest but is completely responsive and it took him only a couple hours over the weekend.

[![rwdf2](../assets/images/sm_rwdf2.jpg)](../assets/images/full-size/rwdf2.png)

What was key in that he approached responsiveness systematically from the start instead of just as an afterthought!

### 1.4 Pan, Zoom, Touch... Ick
Requiring your users to pinch, zoom, & pan provides a horrible user experience (UX).

The mobile market is growing faster than any other market and if you're a web developer and not building for mobile devices, you're just going to lose all of your users.

That's the core concept behind responsive design: make your content work across any device.

### 1.5 Emulators, Simulators, & Real Devices
Since we can't physically test our code on each and every device, we can use emulators and simulators to get the job done.

Chrome has a built-in emulator that should work just fine. There is also an iOS simulator and cloud-based services such as [BrowserStack](http://www.browserstack.com/).

### 1.6 Setting up Chrome's DevTools
Open up Chrome Developer Tools, using Cmd+Option+J, or Control+Alt+J. Next, hit the emulator button which is that phone looking icon in the toolbar.

The emulator is ready to go.

[![rwdf3](../assets/images/sm_rwdf3.jpg)](../assets/images/full-size/rwdf3.png)

I can start loading pages and see how they look, but before I do, I like to dock the tools to the right side of the browser window. Since most phones are viewed in portrait, docking to the right side gives me the most amount of vertical space.

### 1.7 Remote Debugging Intro
Remote debugging on an actual device is important to be able to do. The following will display some resources for this.

### 1.8 Setup for mobile
Here are two useful links

- [Download Chrome Canary](https://www.google.com/chrome/browser/canary.html)
- [Remote debugging Android devices with Chrome](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en)

#### What is Chrome Canary and why should I use it
Chrome Canary is the developer version of Chrome. It looks and acts like the regular Chrome browser, but it includes new and experimental features that haven't been released yet. We recommend analyzing websites with Canary to take advantage of the latest tech. However, be warned that Canary isn't guaranteed to be stable, so expect crashes and occasional bugs.

#### Do I have to test on mobile
For the purposes of this course, no. But testing your websites on mobile is a best practice, and if you have the means to do so we highly recommend it.

### 1.9 Using DevTools on mobile
Open Chrome on your development machine and go to `chrome://inspect`.

Make sure the site you want to debug is open on your mobile device and then connect your laptop to your mobile device via USB. Then confirm that you want to allow USB debugging.

Back in our development machine, we can see a list of the attached devices and the Chrome tabs that are open on the devices. You can open other tabs, focus on specific tabs, reload a tab and even close a tab.

[![rwdf4](../assets/images/sm_rwdf4.jpg)](../assets/images/full-size/rwdf4.png)

You can inspect the pages that are running on your mobile device, from your development machine, and using screen-cast mode, you can drive the experience on your mobile device from your development machine.

Clicking on links will update simultaneously on the device and the desktop.

### 1.10 Mobile Tools for iOS
iOS WebKit Debug Proxy: [https://github.com/google/ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy)

Please note that on the forums, there is a discussion continuing about ios-webkit-debug-proxy. Depending on your version of canary, if you're using it, it might take a lot of time and some students suggest trying Safari Dev Tools and point to links like this:

[https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/](https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/)

Remember you can run in simulator mode in Chrome Dev Tools.

### 1.11 Lesson Summary
In this lesson, you have learned about responsive design, why it's so important, and you've got the tools to get started developing.

In the next lesson, you will break down the basic components of responsive design, like

- the viewport
- element sizes
- tap targets

At the end of the lesson, we'll have a chance to apply what you've learned as you work on the hometown site.

## Lesson 2. Starting Small
### 2.1 Defining the Viewport

In this lesson we learn how to optimize pages for different screen sizes, including the difference between **CSS** and **device-independent pixels (DIPS)** , and how to choose the right sizes for you elements.

At the end of the lesson we'll build a version of the Hometown site.

Now, when working on sites, you might notice that the content seems to flow off the page or that you have to pinch and zoom to see anything. Besides CSS, the biggest cause of this is that the **viewport** isn't set properly.

*The viewport defines the area of the screen that the browser can render content to.*

If I have an 800 pixel wide browser window and expand it to 1000 pixels wide, the viewport changes to a width of 1000 pixels.

One thing to keep in mind though is that not all displays have the same **pixel density**.

For instance, the Chromebook Pixel display reports a width of 2,560px by 1,700px, but when I make the browser window the full width and ask for the viewport width, it says its only 1280 pixels wide.

Not all pixels are created equally and sometimes a pixel isn't always a pixel.

### 2.2 Pixels, pixels, & moar pixels
Instead of reporting the width in the number of physical hardware pixels, the browser reports the width in the number of **DIPS**, or **device independent pixels**.

[![rwdf5](../assets/images/sm_rwdf5.jpg)](../assets/images/full-size/rwdf5.png)

As its name implies, a *device independent pixel* is a unit of measurement that actually relates pixels to a real distance.

The idea being that a device independent pixel will take up the same amount of space on a display regardless of the pixel density of the display.

So if there are twice as many hardware pixels across as there are pixels reported by the browser, the Chromebook pixel must have a **device pixel ratio** of **2**.

The browser has a viewport width of 1280 DIPs. The 1280 DIPs get scaled up to 2560 hardware pixels when the page is rendered on the display.

#### Unset viewport
What happens when the viewport isn't set?

Let's say you have a phone with a 1080px hardware pixel width and **device pixel ration: 3**. This means the *device independent pixel* width should be 360px. This is the width the page should display at.

Unless you tell the browser that your site was designed to work on a small screen it assumes that the pages weren't and renders the page as if it were on a screen that were 1080 DIPs wide rather than 360.

[![rwdf6](../assets/images/sm_rwdf6.jpg)](../assets/images/full-size/rwdf6.png)
(**Note:** '980px' in the image above should read '1080px')

Now, imagine that content being scaled to fit on a phone that's only 360 dips wide. It gets scaled to less than half. Yuck. It then tries to make the content look better by doing something called font boosting. The browser tries to pick the primary content on the page and scale it up.

It then tries to make the content look better by doing something called **font boosting**. The browser tries to pick the primary content on the page and scale it up. So now some of the fonts are large and easier to read while others remain small and hard to read.

### 2.3 Quiz: Pixelation
When a device is advertised as have a resolution of 1920x1080 pixels What kind of pixel does this refer to?

- [ ] Device Independent Pixels
- [x] Hardware pixels
- [ ] CSS pixels

### 2.4 Quiz: Calculating DPR

[![rwdf7](../assets/images/sm_rwdf7.jpg)](../assets/images/full-size/rwdf7.png)

There are two hardware pixels for every 1 DIP when the device pixel ratio is 2.

### 2.5 Quiz: What's the difference

[![rwdf8](../assets/images/sm_rwdf8.jpg)](../assets/images/full-size/rwdf8.png)

### 2.6 Quiz: Calculating CSS Pixels

[![rwdf9](../assets/images/sm_rwdf9.jpg)](../assets/images/full-size/rwdf9.png)

We divide the number of hardware pixels by the DPR to find the number of CSS pixels.

### 2.7 Quiz: How wide is the viewport

[![rwdf10](../assets/images/sm_rwdf10.jpg)](../assets/images/full-size/rwdf10.png)

Device manufacturers tend to fudge a bit on the numbers so for the "phablet" of 768px with a DPR of 2.5, anything around 300px is acceptable.

### 2.8 Setting the Viewport
By adding the `<meta name='viewport' ... >` tag to the `<head>` element of the page, we tell the browser that we know what we're doing.

[![rwdf11](../assets/images/sm_rwdf11.jpg)](../assets/images/full-size/rwdf11.png)

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

We need to use the meta viewport value `width=device-width` which instructs the page to match the screen's width in device-independent pixels.

This allows the page to reflow content to match the screen sizes, whether rendered on a small mobile device or on the laptop.

Adding the attribute `initial-scale=1` instructs the browsers to establish a one to one relationship between device independent pixels and CSS pixels.

CSS pixels are what we're used to working with most of the time, and really the only one I need to worry about.

Without `initial-scale=1` some browsers will keep the page width constant when rotating to landscape mode. They also scale the content rather than allowing it to reflow.

### 2.9 Large Fixed Width Elements
**Relative widths** are better suited for responsive design.

This is because fixed width images demand the viewport be at least that same size or greater for your content to render well.

If not, it will leave the user having to scroll back and forth in order to view the entire image on any device that has a smaller viewport window.

Since CSS pixels vary so widely across different devices, you shouldn't count on a specific viewport width for your content to render well.

Large CSS widths or even absolute positions can result in elements that are either too big or don't fit on the screen at all. This is why you should use relative positions instead of absolute positions such as `width=100%`.

### 2.10 Max-width on elements
It's important to make sure that the content fits within the viewport to prevent horizontal scrolling. You should use relative units when specifying widths for elements to prevent them from accidentally overflowing the viewport.

[![rwdf12](../assets/images/sm_rwdf12.jpg)](../assets/images/full-size/rwdf12.png)

Keep in mind, CSS does allow content to overflow it's container. So if you don't specify a size and, say, for example the image is bigger than the container, it will overflow.

You can save yourself some headache, and prevent this from happening by setting a max width of 100%. In fact, I recommend adding a catch all in your main CSS for image, embed, object and video elements, that sets this, just to be safe

```css
img, embed, object, video {
    max-width: 100%;
}
```

### 2.11 Quiz: Relative Sizes

[![rwdf13](../assets/images/sm_rwdf13.jpg)](../assets/images/full-size/rwdf13.png)

1. [x] This is responsive because in CSS, `max-width` overrides `width`. So, the owl image will be contained within its container even if the viewport is less than `640px`.
2. [x] The logo is responsive because `125px` is actually smaller than any device width.
3. [ ] This can overflow on smaller devices which have a width of `320px`.
4. [x] Since width is set to 100%, it is relative and will always be responsive.

### 2.12 Tap Target Sizes
Tap targets or anything that a user might touch, tap, click, or try and do input on, need to be big enough and easy to hit and spaced so that you're not going to accidentally hit two at the same time.

With a mouse, users can be perfectly accurate. Our fingers, on the other hand, are about ten millimeters wide, or half an inch, which works out to be about 40 CSS pixels.

In order to allow enough space you should make buttons 48 pixels wide x 48 pixels tall. That makes sure that there's enough room between the elements, for those of us who have fat fingers and fat thumbs.

It's okay to make some tap targets a little bit smaller but make sure there's at least 40 pixels of room between any of your top targets, to make sure that users don't hit two buttons or two elements at the same time.

### 2.13 Quiz: Tap Targets

What CSS styles would you include to make sure your buttons are easy to hit?

```css
nav, a, button {

}
```

Using `width` & `height` is rather dangerous because it won't let the element resize if the content is larger than the container. Therefore, `min-width` and `min-height` is the way to go.

```css
nav, a, button {
    min-width: 48px;
    min-height: 48px;
}
```

This will ensure tap targets are bigger than the average fingers.

### 2.14 Start Small
Designing a responsive site uses the same concepts and processes as designing a non-responsive site. Except, instead of drawing a single wide design, we accommodate a few different screen sizes.

[![rwdf14](../assets/images/sm_rwdf14.jpg)](../assets/images/full-size/rwdf14.png)

I like to start my design with the smallest form factor, usually a phone. Once that one's complete, I move up to the next. As each design is completed, I ask myself, is there a need fora design for a wider screen? At some point, there's really no need for a bigger design.

By starting small I really have to prioritize what's important for my users. What's the most important thing that they want to do, or that they're going to see on screen?

When starting big and then designing down. It can be too easy to just cut or hide content that may be important. Instead, by prioritizing content and working up, the key content is always on the page and users get the full experience, no matter what device they're using.

The design for this hardware store prioritizes information about the nearest store, it's address, hours, and phone number and puts those right at the top so I can find them easily.

[![rwdf15](../assets/images/sm_rwdf15.jpg)](../assets/images/full-size/rwdf15.png)

Beyond designing from small to large, I also code from small to large. This way, I know that my core styles and layout will work for any device, even on legacy browsers that don't support media queries.

But my favorite reason to start from small and work up is performance.

By designing for the smallest viewport first, I'm forced to think about performance from the beginning. I have to make a conscious decision about prioritizing content, and how much data I'm sending to the user.

### 2.15 Quiz Project Part 1

#### Building the Home Town App (part 1 of 3)

1. Add a `<meta>` viewport to the page with initial scale set.
2. Adjust CSS and markup so that everything displays in a single column. Use relative widths so that things stretch to fit across any viewport width.
3. Make sure your touch targets are easy to hit.
4. Test you site across different viewports. Try on different phones, tables, and desktops.

### 2.16 Project Solution Part 1
The solutions consisted of:

1. Adding the meta viewport tag
2. Setting all fixed pixel widths to `width: 100%;`
3. Adding `padding: 1.5em` to all `a` buttons & `padding: 1.5em 0;` to all `a` links.

### 2.17 Lesson Summary
Congratulations on building the mobile version of the site. You've started to apply the basic concepts of responsive design.

In the next lesson,you'll learn the key techniques that you'll need including media queries and break points, in order to build a site that responds to different screen sizes.

## Lesson 3. Building Up
### 3.1 Lesson Intro
So, so far, you've learned that thinking responsively, means thinking about the user experience for every device, from the small screen, all the way up to the largest, and inputs too; buttons need to be big.

[![rwdf16](../assets/images/sm_rwdf16.jpg)](../assets/images/full-size/rwdf16.png)

But responsive design, goes beyond optimizing single elements.

Now in lesson three and four, you'll be taking a step back to design page layout. Which means you'll need to think about, what information you're presenting to your user, and how you want elements to be arranged on the page.

Picking the right design pattern can be more of an art than a science, so you'll have a chance to try a few different design patterns, as this lesson progresses.

By the end of lesson four, you'll take what you've learned about responsive design patterns to layout the project in a way that looks great no matter how users find your site.

### 3.2 Basic Media Query Intro
A responsive website, changes based on the characteristics of the device. This means, that your responsive site, needs to apply different styles, for different devices.

There are few ways to selectively apply CSS. The easiest, is with media queries.

Media queries, provide easy logic for applying different styles depending on device characteristic like width, height, or device pixel ratio. You can change everything, from background images to restructuring the site's layout and even more.

Adding responsive styles is easy. Simply include an additional style sheet in your page, with a media query.

```html
<link rel="stylesheet" media="screen and (min-width: 300px)" href="patterns.css">
```

### 3.3 Adding a Basic Media Query

```html
<link rel="stylesheet" href="styles.css">
```

Let's add a new style sheet and a media query that applies only when the viewport is wider than 500 pixels.

```html
<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">
```

I'll add a new linked CSS file with a media attribute, and I'll set the value to `screen` and `min-width: 500` pixels so that it's only applied when the screen is over 500 pixels.

You may see references to other media types, but ignore them. Media types like handheld, projected, or embossed never really gained any traction and don't do anything. Just stick with `screen` and `print` if you think your users are going to want to print your page.

I'll take a look at the stylesheet that gets applied and see that it changes the background color to blue.

```css
body {
    background-color: blue;
}
```

All right. I'll reload the page in the browser. Notice that the background remains white, but as I start to resize it, once it hits that 500 pixel break point, the screen turns blue because the media query's been matched.

### 3.4 Embed a Basic Media Query

```html
<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">
```

In addition to using the media attribute on a linked style sheet, there are two other ways you can apply media queries.

You can embed them with an `@media` tag, or you can embed them with an `@import` tag.

```css
@media screen and (min-width: 500px) {
    body {background-color: green; }
}
```

For performance reasons, you definitely want to avoid `@import`.

```css
/* NOPE */
@import url("no.css") only screen and (min-width: 500px);
```

It's pretty expensive and perf matters. You'll need to weigh the costs between linked CSS and `@media`.

With linked CSS, you've got many small files, but many HTTP requests, where as with `@media`,you've got fewer requests, but the files tend to be a little bit bigger.

Any filter that meets the criteria of the resulting CSS block, will be applied using the standard CSS rules of precedence.

```css
@media screen and (min-width: 500px) {
    body { color: #f79420; }
}

@media screen and (min-width: 800px) {
    body { background-color: blue; }
}
```

That means when the viewport is less than 500 pixels, no styles are applied but above 500 pixels my body color becomes orange. Above 800 pixels, not only do I have the orange text, butI also have the blue background.

### 3.5 Next Step Media Queries
The media queries used most often for responsive web design are, `min-width`, and `max-width`.

Max-width rules are applied any time the viewport width is *less* than the value specified.

For example, `max-width: 500px` is matched when the viewport is 500 pixels or less.

It's also possible to create queries based on `min-device-width` or `max-device-width`, but this is **strongly discouraged**. The difference is subtle, but very important.

[![rwdf17](../assets/images/sm_rwdf17.jpg)](../assets/images/full-size/rwdf17.png)

`min-width`, is based on the size of the browser window, where as `min-device-width`, is based on the size of the screen.

In addition, using device width, can prevent content from adapting on desktops or other desktops that allow the windows to be resized because the query is based on the actual device size, not the browser window.

The other reason some browsers, such as Android browser, may report the wrong value.

### 3.6 Breakpoints
So far, you've used media queries to change simple things, like background color, but you can also you use media queries to change the entire layout of the page. In fact, this is how developers accomplish responsive design.

By using media queries like `min-width` and `max-width`, developers can change the entire layout of the page.

The point at which the page changes layout, is called a break point. Depending on how your site is laid out, you might have one or several break points.

Let's take a look at a few examples of pages using breakpoints.

### 3.7 Breakpoints Pt2
Here's a simple site, Skinny Ties. When you open up Dev Tools in another window and resize, you'll see the resolution show up in the upper right-hand corner. Like any responsible, responsive designer, I'm starting with a small mobile design.

[![rwdf18](../assets/images/sm_rwdf18.jpg)](../assets/images/full-size/rwdf18.png)

This one looks pretty clean. I'll start expanding and at 480 pixels, I hit the first break point. There are now two columns, there are bow ties and pocket squares next to each other.

[![rwdf19](../assets/images/sm_rwdf19.jpg)](../assets/images/full-size/rwdf19.png)

At larger than 690 pixels, there are three columns.

[![rwdf20](../assets/images/sm_rwdf20.jpg)](../assets/images/full-size/rwdf20.png)

Once the view port is larger than 915 pixels, all of the fonts get bigger, which is a pretty nice touch. I also noticed a few other small changes as the page was getting larger.

[![rwdf21](../assets/images/sm_rwdf21.jpg)](../assets/images/full-size/rwdf21.png)

After you watch this video, maybe you can check out Skinny Ties, and try to find them.

I also took a look at CNN.com's new layout. This one is a bit more complicated. Once again, I am starting small.

Notice the hamburger icon in the top right-hand corner.  on it makes the nav bar show up. That's pretty nice. Also notice that there are social media icons underneath this main story.

[![rwdf22](../assets/images/sm_rwdf22.jpg)](../assets/images/full-size/rwdf22.png)

I've expanded the page larger than 725 pixels across, and now these social media icons are gone, unless you hover over. This is something that would be called a minor breakpoint. Which isn't a huge page layout change, but there's still something slightly different.

[![rwdf23](../assets/images/sm_rwdf23.jpg)](../assets/images/full-size/rwdf23.png)

I've expanded the page past 800 pixels wide, and I see that the hamburger icon is gone. There's more room at the top of the page, so as a result, the navigation menu options are just showing up here.

[![rwdf24](../assets/images/sm_rwdf24.jpg)](../assets/images/full-size/rwdf24.png)

Larger than 935 pixels, the layout really changes. With the extra screen real estate, a few sentences about the main story show up over here, and all of this description is now on the right. Notice the social media icons, are once again showing by default.

[![rwdf25](../assets/images/sm_rwdf25.jpg)](../assets/images/full-size/rwdf25.png)

Larger than the classic 960 pixel width. The new screen real estate is being taken up by other top stories for today.

[![rwdf26](../assets/images/sm_rwdf26.jpg)](../assets/images/full-size/rwdf26.png)

I found one more small break point. Larger than 1024 pixels, an ad shows up.

[![rwdf27](../assets/images/sm_rwdf27.jpg)](../assets/images/full-size/rwdf27.png)

All in all, not a bad design. So now, it's time for you to think about break points.

### 3.8 Quiz: Number of Breakpoints
Remember, a breakpoint represents a size at which the content changes layout. If a page has two layouts, then it has one breakpoint.

### 3.9 Picking Breakpoints
The million dollar question is where do I put my breakpoints.

Defining breakpoints based on specific devices, products, or brand names will almost always result in a maintenance nightmare.

Instead, look at the content to find the right breakpoints.

We shouldn't choose break points at all. Instead, we should find them, using our content as a guide.

### 3.10 Picking Breakpoints 2
Here's how I built this responsive weather forecast page.

Typically, when I'm trying to pick my breakpoints, I'll start in my desktop browser with my viewport set as small as I can get it. I also like to have the Chrome DevTools open because it shows me the screen width in the upper right-hand corner as I resize the window.

[![rwdf28](../assets/images/sm_rwdf28.jpg)](../assets/images/full-size/rwdf28.png)

Next, I'll slowly start resizing the window, looking to see when the content tells me that it wants a breakpoint.

Probably somewhere here, at about the 550 pixel mark, looks like a good place. Anything wider and the spaces between these columns are going to become too big.

[![rwdf29](../assets/images/sm_rwdf29.jpg)](../assets/images/full-size/rwdf29.png)

In my code, I've already got my viewport set and a default set of styles that are applied for any viewport width.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="weather.css">
```

I'll add weather-medium.css to the head with a media query that checks fora screen and if the viewport width is greater than 550 pixels.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="weather.css">
<link rel="stylesheet" media="screen and (min-width: 550px)"
    href="weather-medium.css">
```

Great. I'll switch back to the browser, hit Refresh, and start to resize. Perfect. At 550 pixels, things look exactly like I expect.

[![rwdf30](../assets/images/sm_rwdf30.jpg)](../assets/images/full-size/rwdf30.png)

Because that breakpoint was only at 550 pixels, I think I probably want to add another one. Otherwise, we'll run into the same problem with too much space between columns.

I easily have a room for another one since most desktops and laptops are significantly wider than 550 pixels.

[![rwdf31](../assets/images/sm_rwdf31.jpg)](../assets/images/full-size/rwdf31.png)

I'll go through the same process, and I'll continue to expand the viewport until it looks like I need another breakpoint.

Again, I'm looking for a place where the content tells me that it wants a breakpoint. 700 pixels looks to be right about the right place. So, I'm going to go ahead and add one here.

[![rwdf32](../assets/images/sm_rwdf32.jpg)](../assets/images/full-size/rwdf32.png)

Again, I'll add a new style sheet, but this time, point it at weather-large.css. It'll check for screen and check to see if the viewport width is at least 700 pixels.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="weather.css">
<link rel="stylesheet" media="screen and (min-width: 550px)"
<link rel="stylesheet" media="screen and (min-width: 700px)"
    href="weather-large.css">
```

A quick refresh in the browser and resize. And we've got it. Things are looking good.

[![rwdf33](../assets/images/sm_rwdf33.jpg)](../assets/images/full-size/rwdf33.png)

I could keep adding breakpoints, but in this case, I think having two breakpoints is enough Essentially,

- one at a small viewport
- one at a medium viewport
- one at a large viewport

Okay, that's enough of me talking. Now it's your turn to give it a try.

### 3.11 Quiz: Pick a Breakpoint
For this quiz, take look at the hometown hero image and the navigation links; NEWS, EVENTS, CULTURE, and BLOG.

Start with a small viewport and resize the page to make it larger. Pay attention to the size of the hero image, and the spacing between the nav links.

As you play with it ask yourself, where would you add a breakpoint?

Just to be clear, there's not just one right answer, this is as much of an art as it is a science.

Oh, and here's a hint, if you open up DEV Tools and resize the page, you'll notice that the resolution is displayed in the top right-hand corner. That'll help you find out where you want to put your breakpoint.

Here's a link to the [Home Town site](http://udacity.github.io/RWDF-samples/Lesson4/Project/Start/index.html).

I chose 850px.

### 3.12 Complex Media Queries
So far, I've used only simple media queries, testing only one characteristic, but in some cases, I need more complex tests.

```css
@media screen and (min-width: 500px) {
    .yes {
        opacity: 1;
    }
    .no {
        opacity: 0;
    }
}
```

This media query, only applies styles when the screen width, is greater than 500 pixels and the screen width, has to also be less than 600 pixels.

```css
@media screen and (min-width: 500px) and (max-width: 600px) {
    .yes {
        opacity: 1;
    }
    .no {
        opacity: 0;
    }
}
```

If we look at this altogether, our media query is only applied between 500 and 600 pixels.

### 3.13 Quiz: What Styles Are Applied
Are you ready to give it a try? What are the set of media queries, you need to apply in order to apply styles from these classes? Use this diagram as a guide.

[![rwdf34](../assets/images/sm_rwdf34.jpg)](../assets/images/full-size/rwdf34.png)

- Class AA applies from 0 to 400 pixels
- Class BB applies from 301 pixels to 600
- CC applies for any browser with a width greater than 601 pixels
- DD applies for any browser with a width greater than 961 pixels.

This requires four media queries. One for class AA, one for class BB, CC, and DD.

- AA: `@media screen and (max-width: 400px) { ... }`
- BB: `@media screen and (min-width: 301px) and (max-width: 600px) { ... }`
- CC: `@media screen and (min-width: 601px) { ... }`
- DD: `@media screen and (min-width: 961px) { ... }`

### 3.14 CSS Grid
What used to be standard are various **fluid grid systems**. These are things the Bootstrap framework or the 960 pixel grid layout system.

Now CSS Grid is the new standard. It is supported in all major browsers and should be used going forward.

[MDN - Basic concepts of CSS Grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

### 3.15 Flexbox Intro
Flexbox, is one of the most powerful tools that you can use for layout and it's supported by all major browsers.

Flexbox makes it super easy to position elements left or right, without floats. You can also change the order of elements, without changing HTML, and flexbox makes it really easy to accomplish a lot of other common layout techniques.

[![rwdf35](../assets/images/sm_rwdf35.jpg)](../assets/images/full-size/rwdf35.png)

### 3.16 Flexbox Container
I'll just start with a simple page, that has three divs, contained within a container div.

[![rwdf36](../assets/images/sm_rwdf36.jpg)](../assets/images/full-size/rwdf36.png)

In normal block layout, each div is positioned, one underneath the other one. But once I add `display: flex` to the container div, the divs are now shown in a row. That's because the default flex direction is row.

[![rwdf37](../assets/images/sm_rwdf37.jpg)](../assets/images/full-size/rwdf37.png)

By default, flex items fit on a single line. So no matter what I set the width of the elements to be, they won't wrap. Instead, the browser will size them to fit within the viewport.

I can change that, by adding `flex-wrap: wrap` to the container element. That tells the browser, that it's okay for the elements inside to wrap to the next line.

[![rwdf38](../assets/images/sm_rwdf38.jpg)](../assets/images/full-size/rwdf38.png)

Now, as I resize the viewport, instead of resizing elements,it wraps the first element.And then, only resizes when it really needs to.

So far, we've only looked at two properties of the flex container. There are several others worth looking at.

### 3.17 Flexbox Item
Another feature of Flexbox that's really useful is the ability to change the order of elements  using the CSS `order` attribute.

```html
<div class="container">
    <div class="box dark_blue"></div>
    <div class="box light_blue"></div>
    <div class="box green"></div>
    <div class="box orange"></div>
    <div class="box red"></div>
</div>
```

For example, when the screen width is 400 pixels or below, the elements are shown in the order of their markup. As the viewport changes size, the order of the elements changes.

To set the order, I just need to add an `order` attribute to each element. This means your content can be totally responsive.

```css
@media screen and (min-width: 700px) {
    .dark_blue { order: 4; }
    .light_blue { order: 5; }
    .green { order: 2; }
    .orange { order: 3; }
    .red { order: 1; }
}
```

In some layouts, content appears in one order, but in other layouts it appears in a whole different order.

### 3.18 Deconstructing a Flexbox Layout
I'm going to use Flexbox to create this layout, and then I'm going to give you a design mock that I want you to provide the styles for.

I've got my markup for the HTML here. The first thing I need to do is set up Flexbox on my container element. I need to add `display: flex` and `flex-wrap: wrap`.

[![rwdf39](../assets/images/sm_rwdf39.jpg)](../assets/images/full-size/rwdf39.png)

Looking at my layout I can see that some things are out of order. For example the dark blue box, is not in the same place and I want to make sure they are.

So in addition to setting the width of each element, I need to remember to set the order.

[![rwdf40](../assets/images/sm_rwdf40.jpg)](../assets/images/full-size/rwdf40.png)

To make things a bit easier for myself, I've added the styles in the order that the elements appear.

[![rwdf41](../assets/images/sm_rwdf41.jpg)](../assets/images/full-size/rwdf41.png)

1. The header element is the first element, and it spans the whole width. So I'll set the `width` to `100%` and `order` to `1`.
2. Red and orange are next. Each looks to be about 50% of the view point width. So I'll set `width` equals `50%` and `order` to `2` and `3` respectively.
3. In this design, the footer is next at `100%` `width`, and `order` equals `4`.
4. The next line is light blue, dark blue, and green.
5. Light blue and green, each looks like they are about `20%` wide. Dark blue looks like it's about `60%` wide. So, I'll set order to `5`, `6`, and `7` on each of those elements respectively.

Let's compare this to our sample. Looks about right to me.

[![rwdf42](../assets/images/sm_rwdf42.jpg)](../assets/images/full-size/rwdf42.png)

Let's see how you do.

### 3.19 Deconstructing a Flexbox Layout
Fill in numbers corresponding to the width  and order of each element.

[![rwdf43](../assets/images/sm_rwdf43.jpg)](../assets/images/full-size/rwdf43.png)

### 3.20 Lesson Summary
So Flexbox and CSS Grid seem like great general purpose strategies, for responsive design but there are more complex patterns for designing responsive layouts.

In the next lesson, you'll experiment with four different techniques for creating responsive layouts.

## Lesson 4. Common Responsive Patterns

## Lesson 5. Optimizations
