---
title: Responsive Images
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD032 -->
<!-- # Mobile Web Specialist Nanodegree -->
# Responsive Images

[<-- back to Mobile Web Specialist Nanodegree homepage](../index.html)

---

### Supporting Links
- [Google's overview of Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)

## Lesson 6. Getting Up and Running
### 6.1 Course Introduction
Sam Dutton, a developer advocate at Google, and Cameron Pittman, a course developer at Udacity, teach this course on how to use images responsively so they work across a variety of devices, display sizes, and connectivity scenarios.

[![ri6-1](../assets/images/sm_ri6-1.jpg)](../assets/images/full-size/ri6-1.png)

The web started as a text only medium. It was limited, but the ability to embed images was the innovation that really made it take off. Now we have an incredible wealth of images on the web.

Given the huge and increasing variety of devices and contexts for consuming web content now, we need to think about how we use images.

Throughout this class you'll be building a webpage design for a blog site that uses several kinds of images. By the end you'll be able to incorporate these techniques in your work.

### 6.2 Why Responsive Images
On mobile, we need to be extra careful because images consume more than 60% of the bandwidth used to open a web page. That's bandwidth we can't always rely on or might not want to use.

Also, images don't always work so well on different screen sizes if we don't take steps to make the image responsive.

The web was actually invented with responsiveness in mind to enable us to publish content to a variety of devices.

> "Create a product, don't re-imagine one for small screens. Great mobile products are created, never ported."
>
> -- Brian Fling

Great designers don't optimize for mobile as an afterthought, they think responsively from the get go in order to build sites that work across a range of devices.

### 6.3 Intro to Project
As the course continues, you'll have a chance to practice by working on this blog.

[![ri6-2](../assets/images/sm_ri6-2.jpg)](../assets/images/full-size/ri6-2.png)

You'll start with the ugly version and turn it into something that looks much more reasonable.

There's some aspects of art that go into this. So, your finished version may look slightly different than ours.

Regardless, it's our goal that working on this blog will help you easily deliver the highest quality images with the fewest bytes possible.

### 6.4 Setting Up Your Environment
In this course, you'll be using Google Chrome and Chrome's developer tools, which we call DevTools for short.

[![ri6-3](../assets/images/sm_ri6-3.jpg)](../assets/images/full-size/ri6-3.png)

You can use DevTools to quickly get an idea of how your site performs on a range of different devices. However, emulators and simulators can never really replace the experience of using a real phone or tablet.

[![ri6-4](../assets/images/sm_ri6-4.jpg)](../assets/images/full-size/ri6-4.png)

To test your work on a phone or tablet, you'll need to make sure you're set up to use remote debugging.

For the remainder of this lesson, you will be getting some instructions from Peter Lovers on how to get started with mobile DevTools and debugging on your mobile devices.

### 6.5 Setup for mobile
Here are two useful links

- [Download Chrome Canary](https://www.google.com/chrome/browser/canary.html)
- [Remote debugging Android devices with Chrome](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en)

#### What is Chrome Canary and why should I use it
Chrome Canary is the developer version of Chrome. It looks and acts like the regular Chrome browser, but it includes new and experimental features that haven't been released yet. We recommend analyzing websites with Canary to take advantage of the latest tech. However, be warned that Canary isn't guaranteed to be stable, so expect crashes and occasional bugs.

#### Do I have to test on mobile
For the purposes of this course, no. But testing your websites on mobile is a best practice, and if you have the means to do so we highly recommend it.

### 6.6 Using DevTools on mobile
Open Chrome on your development machine and go to `chrome://inspect`.

Make sure the site you want to debug is open on your mobile device and then connect your laptop to your mobile device via USB. Then confirm that you want to allow USB debugging.

Back in our development machine, we can see a list of the attached devices and the Chrome tabs that are open on the devices. You can open other tabs, focus on specific tabs, reload a tab and even close a tab.

[![rwdf4](../assets/images/sm_rwdf4.jpg)](../assets/images/full-size/rwdf4.png)

You can inspect the pages that are running on your mobile device, from your development machine, and using screen-cast mode, you can drive the experience on your mobile device from your development machine.

Clicking on links will update simultaneously on the device and the desktop.

### 6.7 Mobile Tools for iOS
iOS WebKit Debug Proxy: [https://github.com/google/ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy)

Please note that on the forums, there is a discussion continuing about ios-webkit-debug-proxy. Depending on your version of canary, if you're using it, it might take a lot of time and some students suggest trying Safari Dev Tools and point to links like this:

[https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/](https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/)

Remember you can run in simulator mode in Chrome Dev Tools.

### 6.8 Lesson Wrap Up
Now that you've got your environment set up, you're ready to start developing with responsive images in mind.

In the next lesson, you'll start experimenting with image sizing, compression, and formats. By the end, you'll be ready to intelligently reduce the number of bytes required for your images.

## Lesson 7. Units, Formats, Environments
### 7.1 Quiz: Sizing Intro
By the end of this lesson, you will be prepared with a workflow that will make it easy for you to optimize your images so that they take up as little bandwidth as possible while still looking great.

You'll be thinking about image quality and size. With images on the web, it all comes down to size, but what does that actually mean?

Here's a question for you.Can you spot the differences between these three images?

[![ri7-1](../assets/images/sm_ri7-1.jpg)](../assets/images/full-size/ri7-1.png)

To be honest, I can't tell the difference with my eye. These three look the same to me.

For this quiz, check out [this site](http://udacity.github.io/responsive-images/examples/1-05/identicalImagesDifferentCompressionAndSize/index.html), then use DevTools to work out the difference between the three images.

Are the differences caused by compression level, display resolution, the natural resolution, or the file type? Check all that apply.

If the image data looks the same for all images, make sure to check the `Disable cache` checkbox in DevTools.

[![ri7-2](../assets/images/sm_ri7-2.jpg)](../assets/images/full-size/ri7-2.png)

#### Answer
I've opened up DevTools, and I've navigated to the Network tab. I'm ready to record so I will refresh the page. You can see the three requests for the three different images, horse1, horse2, and horse3. It looks like their sizes are really different.

[![ri7-4](../assets/images/sm_ri7-4.jpg)](../assets/images/full-size/ri7-4.png)

Notice how horse2 is almost ten times bigger than horse1, and horse3 is also bigger than horse1. Given that the images look identical, it seems like there could be some wasted bytes here.

Inside the Elements pane, I can find out the actual dimensions of these three images. There are a couple of ways doing it. I'm going to show you a hard way and then an easy way.

DevTools has this awesome feature where you can manipulate an element in the DOM by clicking on it. So I've clicked on the first horse. Then inside the console, I can access it by typing `$0`.

[![ri7-3](../assets/images/sm_ri7-3.jpg)](../assets/images/full-size/ri7-3.png)

When I press Enter, the horse `<img>` element is returned. To find out the horse's actual width, I'll simply access the property `naturalWidth`. When I do that, the width returned is `426`.

I then select horse2 and run the same command to see that one is also 426 pixels wide. So I'll try the third one.And ah-ha that one is twice as large at 852 pixels. So it looks like these three images have different sizes.

Okay, now here's the easy way of figuring that out. Simply hover over the image, and you can see it right here. There is the natural width and height.Horse2 is the same just like we saw a second ago.And then horse3 is twice as large.

[![ri7-5](../assets/images/sm_ri7-5.jpg)](../assets/images/full-size/ri7-5.png)

So then what could be different about horse1 and horse2?

As it turns out, their compression levels are different. So at this point it's clear that horse3 is definitely a larger image but then what's different about horse1 and horse2?

If they have the same resolution but different sizes, then they have different compression levels. So, the answer to this quiz is that they have different compression levels and different resolutions.

- [x] Compression level
- [ ] Display resolution
- [x] Actual (natural) resolution
- [ ] File type

### 7.2 All about Bits and Pixels
With images like photos, the total file size depends on the number of pixels multiplied by the number of bits it takes to store each pixel.

[![ri7-6](../assets/images/sm_ri7-6.jpg)](../assets/images/full-size/ri7-6.png)

So, to improve performance, you need to keep images as small as possible and compression as high as possible. It's a common mistake to save images with dimensions too large, and quality too high.

It might sound counter-intuitive, but the first rule for saving images to a range of devices is to save images with the lowest possible quality, and the smallest size as possible. But, how do you reduce file size while maintaining quality?

Throughout this course, you'll learn how to use responsive techniques to do just that.

### 7.3 Requests and Revenue
The average webpage makes a whopping 56 requests for images. Every one of those image requests has a cost in terms of page load and studies by Google, Amazon, and others have shown that even very small delays in loading pages can result in a significant loss of traffic and revenue.

[![ri7-7](../assets/images/sm_ri7-7.jpg)](../assets/images/full-size/ri7-7.png)

Here we see from Google that a 0.4 to 0.9 second increase resulted in traffic and ad revenues down by 20% and for Amazon, every 100 millisecond increase in page load time means a loss of sales of 1%.

### 7.4 Relative Sizing
Let's have a deeper look at CSS sizing.  I've given this image a fixed size of 640 by 360 pixels, which is the natural size of the image.It looks great. But of course, when I resize the window,the image gets cropped.

[![ri7-8](../assets/images/sm_ri7-8.jpg)](../assets/images/full-size/ri7-8.png)

On a phone, the image is larger than the view port.Which means that to see the whole image, you have to scroll horizontally.

Let's try relative sizing. I set the image width to 100%.

It looks good in the smaller browser window and looks good on the phone, but when I resize the image larger by resizing the browser window, it starts to get pixelated and blurry.

[![ri7-9](../assets/images/sm_ri7-9.jpg)](../assets/images/full-size/ri7-9.png)

Let's do something about that. If we set the max-width of the image to 100%, the image will expand nicely, but only ever as wide as its natural width.

[![ri7-10](../assets/images/sm_ri7-10.jpg)](../assets/images/full-size/ri7-10.png)

Two simple things you can learn from this. For devices such as laptops and desktop monitors.

1. Don't assume the window size is the same as the screen size
2. Don't assume the window size will always stay the same.

- **Using `max-width` is a good way to respond gracefully to a change to a larger view port.**
- When you're thinking responsively, consider large displays as well as small.

So what if you want two images to fit side by side, no matter the size of the view port? Well, that's easy. Just use relative sizing, 50% width.

[![ri7-11](../assets/images/sm_ri7-11.jpg)](../assets/images/full-size/ri7-11.png)

But what if you want to add a ten pixel margin between the images? You can just add margin-right, 10 pixels, right?

You can get around this with our old friend `calc()`.

Calc allows you to do simple calculations in CSS values and that's a great way to combine absolute and relative values. For example, combining a percentage width with a fixed margin.

[![ri7-12](../assets/images/sm_ri7-12.jpg)](../assets/images/full-size/ri7-12.png)

Now the calculation here looks a little complex but all we're saying is to give each image half of the width available.

I've also used the `last-of-type` selector to ensure there's only a margin between the images and none to the right of the second image.

```css
img {
    margin-right: 10px;
    max-width: 426px;
    width: calc((100% - 10px)/2);
}
img:last-of-type {
    margin-right: 0;
}
```

#### Image Examples

- [Fixed size image](http://udacity.github.io/responsive-images/examples/1-07/singleImage640x360/)
- [width: 100%](http://udacity.github.io/responsive-images/examples/1-07/singleImageNotBigEnough100pc/)
- [max width: 100%](http://udacity.github.io/responsive-images/examples/1-07/singleImageMaxWidth100pc/)
- [Two images, 50% width](http://udacity.github.io/responsive-images/examples/1-07/twoImages50pc)
- [Two images, 50% width with margin](http://udacity.github.io/responsive-images/examples/1-07/twoImages50pcWithMargin)

You can find out more about `calc()` from [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

The horse and giraffe are from [lorempixel.com](http://lorempixel.com/), which provides URLs for random placeholder images. For example, [check this out](http://lorempixel.com/400/200/animals/).

### 7.5 IMPORTANT! Udacity Front End Extension
We think it's incredibly important that you get feedback on your code as you write it. So, we created the Udacity Front End Feedback Chrome extension to give you feedback on quizzes as you work on your own computer.

[![ri7-13](../assets/images/sm_ri7-13.jpg)](../assets/images/full-size/ri7-13.png)

This is done simply by opening up a quiz that uses the extension and clicking the extension icon in the toolbar.

#### How to Load the Extension
1. Install the Udacity Front End Feedback Extension from the Chrome Web Store or from Mozilla's Add-ons for Firefox (it's free).
2. If you're using Google Chrome, go to the Chrome extensions menu (chrome://extensions) and give the extension permission to run against file URLs.
    [![click this checkbox in the chrome extensions menu that says "allow access to file urls"](../assets/images/sm_settings.jpg)](../assets/images/full-size/settings.png)
3. To use the extension, open the webpage you want to edit, click on the extension icon, and check "Allow feedback on this domain":
    [![open the extension and click "allow feedback on this domain"](../assets/images/sm_allow-feedback.jpg)](../assets/images/full-size/allow-feedback.png)
4. As edits are made, changes are reflected in the Udacity Front End Feedback dialogue box.😃

### 7.6 Quiz: calc()
For this quiz I want you to fix this website.

[![ri7-14](../assets/images/sm_ri7-14.jpg)](../assets/images/full-size/ri7-14.png)

You'll be trying out Calc with these images but this time, I want you to fit these three images all the way across the screen.

Each of the three images will need to be a third of the available width, and there should be a ten pixel margin between them.

Pop open DevTools and inside the head you'll find this style tag. Inside the style tag, you'll see some comments. These are the places where I want you to make some changes.

You can find a link to the website [here](http://udacity.github.io/responsive-images/examples/1-08/imageRelativeWidth/index-quiz.html).

When all three images are aligned correctly, with ten pixels between these images, a code will appear on the website. Type that code into this box to continue.

[![ri7-15](../assets/images/sm_ri7-15.jpg)](../assets/images/full-size/ri7-15.png)

#### Solution
The solution consisted of the following css:

```css
img {
    width: calc((100% - 20px)/3);
    max-width: 100%;
    margin-right: 10px;
}
img:last-of-type {
    margin-right: 0;
}
```

**Note:** There MUST be a space on each side of the `+` and `-` operators. (A space is not required around `*` and `/` as the problem is an ambiguity around negation.)

For example: `calc(100px - 10%)` **will work**. `calc(100px-10%)` **will not**.

[![ri7-16](../assets/images/sm_ri7-16.jpg)](../assets/images/full-size/ri7-16.png)

### 7.7 Landscape and Portrait
Let's think some more about the size and the shape of the viewport. Think about the way you use devices. Phones and tablets are often used in portrait orientation whereas a full screen browser window on a laptop is landscape.

[![ri7-17](../assets/images/sm_ri7-17.jpg)](../assets/images/full-size/ri7-17.png)

Now, even though you can't change the window size on a phone or tablet, these devices have another rather tricky feature when it comes to responsive resizing. Orientation can change, and when it comes to landscape and portrait, you need to think about content as well as size.

[![ri7-18](../assets/images/sm_ri7-18.jpg)](../assets/images/full-size/ri7-18.png)

Tall or square images can work well in portrait mode on a phone but wide images can be a real problem. Again, for responsive design the golden rule is don't assume the viewport size will always stay the same.

You'll learn the impact of image choice and art direction later in the course when you find out how to use the `<picture>` element. Later in this lesson, we'll look at ways to work with orientation using media queries.

### 7.8 vh vw vmin vmax
On the subject of sizing, there are some CSS units that you may not have heard of, but which are now really widely supported.

How about if you want an image to responsively cover the whole height of the viewport?

Now, you can always do that by setting the height of the image to 100%, but that only works if the height of the HTML and the body elements are also set to 100%.

A simple way is to use the `vh` unit, which stands for viewport height. One `vh` unit corresponds to 1% of the viewport height, and so `100vh` means 100% height.

[![ri7-19](../assets/images/sm_ri7-19.jpg)](../assets/images/full-size/ri7-19.png)

You can do the same with `vw` for viewport width.

Here you can see we've set the width of the image to be `100vw`, 100% of the viewport width, and you can see that it resizes responsibly.

[![ri7-20](../assets/images/sm_ri7-20.jpg)](../assets/images/full-size/ri7-20.png)

Another common responsive use case is when you want an image to resize to fit the smaller of the height or the width of the viewport.

The `vmin` unit, viewport minimum, corresponds to 1% of the viewport width or height, whichever is smaller.

If you set both the width and the height to `100vmin`, you'll get the effect you're after.

[![ri7-21](../assets/images/sm_ri7-21.jpg)](../assets/images/full-size/ri7-21.png)

How about if you want an image to cover the whole viewport but without stretching or squashing?

For this you can use the `vmax` unit, which corresponds to 1% of the viewport width or height, whichever is greater.

So, if you set both the height and the width to `100vmax`, the image responsively resizes to cover the viewport.

[![ri7-22](../assets/images/sm_ri7-22.jpg)](../assets/images/full-size/ri7-22.png)

**Note:** setting both the height and the width to `100vmax` or `100vmin` changes the image's aspect ratio. It'll compress your images to squares, so be careful if you want to maintain a different aspect ratio!

### 7.9 Raster and Vector
There are two fundamentally different ways to create and store images and this affects how you deploy images responsibly. Raster and vector.

**Raster images:** photographs and other images represented as a grid of individual dots of color.

Raster images might come from a camera or a scanner, or be created with the HTML `<canvas>` element.

**Vector images:** images such as logos and line art, which can be defined as a set of curves, lines, shapes, fill colors and gradients.

Vector images can be created with programs like Adobe Illustrator or Inkscape, or from using a vector format such as SVG.

SVG makes it possible to include responsive vector graphics in a webpage, and we'll talk more about this format later.

The advantage of vector file formats over raster file formats is that the browser can render a vector image at any size. After all, vector formats describe the geometry of the image; how it's constructed from lines, curves, and colors and so on, not individual dots of color.

Open the [SVG vs PNG example](http://udacity.github.io/responsive-images/examples/1-11/svgVersusPng/) in a large display - you'll see a massive difference in quality!

[![ri7-23](../assets/images/sm_ri7-23.jpg)](../assets/images/full-size/ri7-23.png)

Let's see what happens when we resize this page. Now, that's an SVG image on the right and a PNG on the left, and you can see as the size increases, the PNG is looking to start a little blurry, whereas the SVG is perfect at any size.

### 7.10 Quiz: Raster or Vector Banner
Imagine you're a graphic designer and you need ot design a 50m (~165ft) banner. Should you give you friend a vector or raster image? Why?

- [ ] **Vector**. File size is smaller.
- [x] **Vector**. It scales without quality loss.
- [ ] **Raster**. File size is smaller.
- [ ] **Raster**. It scales without quality loss.

Vector images can be scaled infinitely, which means that it'll be sharp and clear even on a 50m banner!

### 7.11 Quiz Raster & Vector identification
Take a look at the images in [this link](http://udacity.github.io/responsive-images/examples/1-14/differentImages/index.html). Are they **raster** or **vector** graphics?

| Image | Raster | Vector |
| --- | --- | --- |
Chrome Logo | | x |
Kitten Photo | x | |
Flag of Mexico | | x |
Repeat BG |  | x |
Gradient BG |  | x |

### 7.12 File Formats
This image combining line art and a photo was saved as a JPEG and it looks fine on a phone at small display sizes.

[![ri7-24](../assets/images/sm_ri7-24.jpg)](../assets/images/full-size/ri7-24.png)

But on a desktop monitor by resizing the browser window, the JPEG format begins to show its weaknesses.

It may be a bit hard to see but the edges of the text "HTML" are blurry and less sharp. Click the image to view a larger version.

[![ri7-25](../assets/images/sm_ri7-25.jpg)](../assets/images/full-size/ri7-25.png)
**Live Sample:** [Photo with logo as JPEG](https://rawgit.com/james-priest/udacity-nanodegree-mws/master/exercises/ri-7-12/kittensPlusHtml5Logo.html)

![ri7-27](../assets/images/full-size/ri7-27.png)

With JPEG, edges can lead to artifacts. For this example, SVG for the logo would have scaled better.

Here's the same with SVG for the logo over a JPEG of the photograph.

[![ri7-26](../assets/images/sm_ri7-26.jpg)](../assets/images/full-size/ri7-26.png)
**Live Sample:** [Photo as JPEG, logo overlaid as SVG](https://rawgit.com/james-priest/udacity-nanodegree-mws/master/exercises/ri-7-12/kittensPlusHtml5LogoSvg.htmlhttp://udacity.github.io/responsive-images/examples/1-15/kittensPlusHtml5LogoSvg)

![ri7-28](../assets/images/full-size/ri7-28.png)

The photo and the logo both look good small or large. You can see the crisp edges as well. Both look great.

File sizes are down too. Here's the version with the logo over the image as a, one single JPEG.

![ri7-29](../assets/images/full-size/ri7-29.png)

And here we have the version with the SVG over the JPEG.

![ri7-30](../assets/images/full-size/ri7-30.png)

You can see that even though we need an extra file request, we're actually only using about half as many bytes.

Take a look at these three logos. They look identical, right? But if you check with the dev tools, you'll see that we've used three different file formats and there's a massive difference in file sizes.

[![ri7-31](../assets/images/sm_ri7-31.jpg)](../assets/images/full-size/ri7-31.png)
**Live Sample:** [Chrome log SVG v PNG v JPG](https://rawgit.com/james-priest/udacity-nanodegree-mws/master/exercises/ri-7-12/svgPngJpg.html)

The chrome SVG is about 50 times smaller than the PNG.

There are some good general rules for improving cross-platform image performance.

#### Use JPEG for photographic images
Browsers such as Chrome also support other formats, such as WebP, which can deliver better compression and features.

WebP supports alpha transparency, animation, along with lossy and lossless compression.

#### If you can, use SVG for vector images
We'll show you how to do that later. For vector art and solid color graphics, such as logo and line art, if you're unable to use SVG, use PNG.

And do use PNG rather than GIF; more colors, better compression, and no licensing issues.

[![ri7-32](../assets/images/sm_ri7-32.jpg)](../assets/images/full-size/ri7-32.png)

For more information about image formats, take a look at theses links.

#### Links
- [Image Formats Overview](https://litmus.com/blog/png-gif-or-jpeg-which-ones-should-you-use-in-email)
- [Google Web Fundamentals - Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)
- [WebP Image Format Overview](https://developers.google.com/speed/webp/?csw=1)
- [CanIUse WebP](https://caniuse.com/#feat=webp)

#### Examples
- [Photo with logo as JPEG](https://rawgit.com/james-priest/udacity-nanodegree-mws/master/exercises/ri-7-12/kittensPlusHtml5Logo.html)
- [Photo as JPEG, logo overlaid as SVG](https://rawgit.com/james-priest/udacity-nanodegree-mws/master/exercises/ri-7-12/kittensPlusHtml5LogoSvg.htmlhttp://udacity.github.io/responsive-images/examples/1-15/kittensPlusHtml5LogoSvg)
- [Chrome log SVG v PNG v JPG](https://rawgit.com/james-priest/udacity-nanodegree-mws/master/exercises/ri-7-12/svgPngJpg.html)

### 7.13 Quiz: Spot the Differences
Use DevTools to inspect two images you see. What's different between them?

[Here's the site](http://udacity.github.io/responsive-images/examples/1-17/sameImage/index.html)

#### Solution
Looks like both are JPEGs but the file sizes are different.

[![ri7-33](../assets/images/sm_ri7-33.jpg)](../assets/images/full-size/ri7-33.png)

Also, while the display size is the same, it looks like the natural size is different when I inspect the `<img>` element.

[![ri7-34](../assets/images/sm_ri7-34.jpg)](../assets/images/full-size/ri7-34.png)

- [ ] Compression Level
- [ ] Display Size
- [x] Actual (Natural) Size
- [ ] Type

### 7.14 Quiz: Spot More Differences
Use DevTools to inspect two images you see. What's different between them?

[Here's the site](http://udacity.github.io/responsive-images/examples/1-19/sameImage/index.html)

#### Solution
Looks like both are JPEGs but the file sizes are different.

[![ri7-35](../assets/images/sm_ri7-35.jpg)](../assets/images/full-size/ri7-35.png)

When I check the dimensions, it looks like the natural size is the same for both images.

[![ri7-36](../assets/images/sm_ri7-36.jpg)](../assets/images/full-size/ri7-36.png)

This means that the compression must be different.

- [x] Compression Level
- [ ] Display Size
- [ ] Actual (Natural) Size
- [ ] Type

### 7.15 Image Compression
How can we check if all the images on a site have been optimized?

Remember that in order to serve the smallest possible image file on your site, you need to make sure you've run images through optimization tools.

Now, one great tool for checking this is [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=simpl.info%2Fcssfilters). Let's use that to check a page from our website.

[![ri7-37](../assets/images/sm_ri7-37.jpg)](../assets/images/full-size/ri7-37.png)

PageSpeed Insights give us information on how best to optimize our page for speed. It will also provide links to optimization resources.

#### Links

- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=simpl.info%2Fcssfilters)
- [PageSpeed Insights - Optimize Images instructions](https://developers.google.com/speed/docs/insights/OptimizeImages)
- [PageSpeed Insights Node module](https://github.com/addyosmani/psi/)
- [15 Practical cURL examples](http://www.thegeekstuff.com/2012/04/curl-examples/)

### 7.16 Project Part 1
It's time to get started on The **Responsive Blog Project**.  This is what the blog looks like right now and you should be asking yourself, ugh, what the heck is this ugly thing?

[![ri7-38](../assets/images/sm_ri7-38.jpg)](../assets/images/full-size/ri7-38.png)

The good news is that, by the end of the course, you'll be turning it into something that looks a lot nicer.

Now, responsive images can be as much of an art as it is a science. To start working on this project, which is really zoomed out here by the way, I'm going to give you a few changes.

Your goal is to make these images look reasonable. Right now, they're massive, both in their visual size on the page, and in terms of file size or number of bytes. The browser is zoomed out to 25% so you can get a sense of how really, really big they are.

#### Requirement 1
Back at 100%, it's pretty clear these images aren't fitting inside their containers. The images in the website need some kind of width applied to them so that they stay inside their container, which in this case is an `<article>`.

#### Requirement 2
Once you've done that, set a maximum width on the `<article>` element to give the blog a little bit better structure. I recommend starting with a width of something around 50em's. Remember an `em` refers to the font size. So a 50em element with font sizes of 16 pixels means that we are talking about a width of 800 pixels.

#### Requirement 3
By the way, notice how these images are coming from `images_src`, we'll come back to that in a second. Next up, check out the Volt image. Its natural width is almost 3300 pixels. That's just massive. What's the point of so many pixels when it's going to be displayed at about 800 pixels wide? Even on a 2x display, you only need 1600 pixels across.

These images need to be a lot smaller. I want you to use the tools and techniques that you've been learning to reduce the resolutions and compress the images. See how low you can get the resolution and how much compression you can use while still keeping the images really crisp.

To do so, you have **Grunt**, **Image Magick**, and **Image Optim** on your side. You don't have use these, but it will make you life a lot easier if you do, especially Grunt.

If you've got Grunt up and running, you should be able to use the *Gruntfile* in the project directory after you run the command in the instructor notes. The command will make sure the `grunt-responsive-images` package is installed. Notice that Grunt is going to run against images in the `images_src/` directory and put them in the `images/` directory.

Right now in the html all the images are referenced in the `images_src/` directory but once you've optimized them, make sure you change their directory to `images/`. There are links to lots of documentation in the instructor notes if you need help.

Also, the page is coming in around 3.25 megabytes, which will take forever to load on mobile. Seriously, try loading this site using the network throttling options set to low. You may want to grab a cup of coffee while you wait.

You can probably reasonably drop the total bytes from the images below to 1.5 megabytes or even further.

#### Requirement 4
In terms of optional changes, the images are looking pretty stark. They need some captions.

In this solution, you'll see me add some captions using the semantic `<figure>` tag, but you can use whatever technique you'd like. See [MDN documentation on figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure).

### --- Summary of Requirements
1. Make the `<img>`s fit within their containers
2. Make the containers a reasonable width (recommend 50em)
3. Resize & compress images such that they remain sharp but the size of the page drops below 1.5MB. Use automation tools
4. Optional: add captions
5. Don't forget to test on different devices and network settings

### --- Instructor Notes

- Download the project files [here](http://udacity.github.io/responsive-images/downloads/RI-Project-Part-1-Start.zip).
- Make sure to run the project through localhost
- Make sure to run [Udacity Feedback Chrome Extension](https://chrome.google.com/webstore/detail/udacity-front-end-feedbac/melpgahbngpgnbhhccnopmlmpbmdaeoi) to get feedback
- Open the console to see the total size of all the images
- [Learn more about the `<figure>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)

### --- Build Process
Before automating your build process with tools like **ImageMagick** or **ImageOptim**, you'll first need to [install Node.js](https://nodejs.org/en/download/).

[Node.js](https://nodejs.org/en) is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://developers.google.com/v8/).

It also comes with a package manager, [npm](https://www.npmjs.com/), that gives you access to thousands of code packages, like Grunt, that you can use in your projects.

**Make sure  to** [install Node.js and update npm](https://docs.npmjs.com/getting-started/installing-node). Then, use the links below to finish setting up your build process.

### --- ImageMagick

#### Resource Links
- [ImageMagick](http://www.imagemagick.org/)
- [Simple ImageMagick installer for Mac](http://cactuslab.com/imagemagick/)
- [GraphicsMagick](http://www.graphicsmagick.org/) (a fork of ImageMagick)

### --- Grunt

#### General Info
- [Getting started with Grunt](http://gruntjs.com/getting-started)
- [Grunt for People Who Think Things Like Grunt are Weird and Hard](http://24ways.org/2013/grunt-is-not-weird-and-hard/)
- [Generate multi-resolution images with Grunt](http://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/)
- [Grunt plugin for generating multiple images](https://github.com/andismith/grunt-responsive-images)

#### Scripting Examples
- [convert.sh](http://udacity.github.io/responsive-images/convert.sh) (includes instructions)
- [Gruntfile.js](http://udacity.github.io/responsive-images/Gruntfile.js) (remove line 7, `engine: 'im'`, on Windows)
- [Imager.js](https://github.com/BBC-News/Imager.js/) - responsive image loading developed for BBC News

### --- GUI Image Tools

#### Resource Links for Image Processing tools
- [ImageOptim](http://imageoptim.com/) (Mac only)
- [Trimage](http://trimage.org/) - Similar to ImageOptim (Windows, Mac, Linux)
- [ImageAlpha](https://github.com/pornel/ImageAlpha)

### 7.16 Project Solution
First I want my images to fit so I set the `max-width` on the `<img>` tag to 100%. Now the images are actually fitting inside the view port. You can see the whole thing instead of some massive, stretched out monster.

Then I set the width on the `<article>` tag to `50em`. This immediately changed the content to fit the viewport width.

The blog's starting to look a lot more reasonable but the browser is still downloading images that are way too large. I need some smaller images. I could use a tool like to individually resize and compress each image, but that really isn't scalable.

So, I used this grunt task to create new images that were scaled and compressed.

[![ri7-39](../assets/images/sm_ri7-39.jpg)](../assets/images/full-size/ri7-39.png)

I set a width of 1600 pixels for 2x displays. At a width of 50em on a 1x display an image is going to be 800 pixels across.  on a 2x display, it's going to be 1600 pixels so, I went with the large one.

I thought 30% still looked good while keeping the bites to a minimum. Additionally I'm appending 'large_2x' to the end of each file for reasons that will make sense later in the course.

With all that done all I have to do is change the image sources to 'images/whatever-600_large_2x' and bam. My page just got a lot smaller. After the changes, my page is down to 1.3 megabytes, which I'm feeling really good about.

[![ri7-41](../assets/images/sm_ri7-41.jpg)](../assets/images/full-size/ri7-41.png)

Lastly, I used the `<figure>` tag, because it includes the awesome `<figcaption>` tag. Simply fill in the caption in figcaption, and it shows up on the page.

[![ri7-44](../assets/images/sm_ri7-44.jpg)](../assets/images/full-size/ri7-44.png)

So the blog is looking a lot better overall, but it's still not perfect. At the end of the next lesson, you'll have another chance to improve the blog.

### --- My Build Environment
#### Steps to create a build system on Windows 10
I'm running Windows 10 April 2018 Update (version 1803) with Windows Subsystem for Linux (WSL) enabled.

#### Enable WSL on Windows 10 & install Ubuntu 16.04
WSL is running an instance of Ubuntu 16.04 which I installed from the Microsoft Store. See [How to Install and Use the Linux Bash Shell on Windows 10](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

#### Update & upgrade Ubuntu packages
I then updated my Ubuntu software resources and upgraded all outdated packages. This makes sure you're using the latest software resource lists and that all existing packages are up to date.

```bash
sudo apt update
apt list --upgradable
sudo apt upgrade
```

#### Configure Visual Studio Code to use Ubuntu Bash shell
I've also updated Visual Studio Code to use my Ubuntu Bash shell by adding this line in VS Code Settings:

```json
"terminal.integrated.shell.windows": "C:\\Windows\\System32\\bash.exe"
```

#### Install latest Node.js
Then I installed the latest version Node.js. If you simply run `apt install nodejs` you'll get an older version (4.2.1) of node & npm which won't work properly.

I went to the Node.js site and followed the  [Download & install Debian & Ubuntu based Linux distributions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) instructions which had me do the following.

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Update to latest npm
I then updated npm following instructions on the npm site: [Update npm](https://docs.npmjs.com/getting-started/installing-node#3-update-npm). Those had me do the following to update npm globally to the latest version.

```bash
npm -v
sudo npm install npm@latest -g
```

#### Install Grunt task runner
Next I installed Grunt; which is to say, I installed the `grunt-cli` npm package globally so it can be accessed from any directory. Instructions here [Grunt - Getting started](https://gruntjs.com/getting-started).

```bash
sudo npm install -g grunt-cli
```

#### Install GraphicsMagick & ImageMagick
Next I installed [GraphicsMagick](http://www.graphicsmagick.org/) (which is a fork of [ImageMagick](http://www.imagemagick.org/script/index.php)) since it purports to be faster and more efficient than ImageMagick. I also installed ImageMagick for comparison.

GraphicsMagick (or ImageMagick) is responsible for processing images. Grunt (a task runner) automates the conversion so you can batch process entire directories of images.

Here are the installation commands.

```bash
apt list graphicsmagick
sudo apt install graphicsmagick

apt list imagemagick
sudo apt install imagemagick
```

#### Install project's npm packages
Next I installed the npm packages that were defined in the `package.json` file.

```json
{
  "name": "responsive-images",
  "version": "0.1.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/udacity/responsive-images.git"
  },
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-clean": "~0.6.0",
    "grunt-contrib-copy": "~0.8.0",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0",
    "grunt-mkdir": "~0.1.2",
  },
  "dependencies": {
    "grunt-responsive-images": "^0.1.6"
  }
}
```

This was done by running the following command at the project root.

```bash
npm install
```

This created a `node_modules` folder with all dependencies and dev_dependency packages.

#### Install additional npm package
The next step was to install an npm package that serves to complement the existing `grunt-responsive-images` package.

`grunt-responsive-images` is responsible for compressing and creating multi-sized versions of a set of images for use with the new html5 responsive image attributes. These are the `srcset` and `sizes` attributes of the `<img>` element.

The `grunt-responsive-images-extender` package will analyze a set of images referenced in HTML and turn the existing HTML code from this

```html
<img alt="A simple image" src="simple.jpg" title="A simple image">
```

into this.

```html
<img alt="A simple image" src="simple.jpg"
     srcset="simple-small.jpg 320w,
             simple-medium.jpg 640w,
             simple-large.jpg 1024w,
             simple.jpg 2000w"
     sizes="(max-width: 320px) 320px,
            (max-width: 640px) 640px
            (max-width: 1024px) 1024px
            (min-width: 1025px) 2000px"
     title="A simple image">
```

The image sizes and breakpoints are set in the Gruntfile and are written out to the html.

To install this package I issued the following command

```bash
npm install grunt-responsive-images-extender --save-dev
```

#### Gruntfile configuration
Next `Gruntfile.js` had to be configured. This is the file that Grunt uses to define tasks and set options related to those tasks.

Here is a sample Gruntfile that specifies two image sizes, along with width, defined as a percentage of the original, and compression quality.

```js
responsive_images: {
  dev: {
    options: {
      engine: 'gm',
      sizes: [{
        name: 'small',
        width: '30%',
        quality: 20
      }, {
        name: 'large',
        width: '50%',
        quality: 40
      }]
    },
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['images/*.{gif,jpg,png}'],
      dest: 'build/'
    }]
  }
},
```

I updated the Gruntfile to specify four image sizes for the `grunt-responsive-images` package to create.

```js
responsive_images: {
  dev: {
    options: {
      engine: 'gm',
      sizes: [{
        width: 400,
        quality: 50
      }, {
        width: 600,
        quality: 60
      }, {
        width: 900,
        quality: 40,
        rename: false
      }, {
        width: 1600,
        quality: 30,
        suffix: '_2x'
      }]
    },
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['images/*.{gif,jpg,png}'],
      dest: 'build/'
    }]
  }
},
```

This takes a source file like this

```bash
file1.jpg           (3264x2448)   486KB
```

and creates the following.

```bash
file1-400.jpg       (400x300)     23 KB
file1-600.jpg       (600x450)     53 KB
file1.jpg           (900x675)     79 KB
file1-1600_2x.jpg   (1600x1200)   165 KB
```

I then added the `responsive_images_extender` configuration which defines the selector to target for each `<img>` element. It also defines a suggested media size that the browser should use based on a set of media queries.

```js
responsive_images_extender: {
  dev: {
    options: {
      ignore: ['.fixed'],
      sizes: [{
        selector: 'figure>img',
        sizeList: [{
          cond: 'max-width: 560px',
          size: '400px'
        }, {
          cond: 'max-width: 760px',
          size: '600px'
        }, {
          cond: 'min-width: 761px',
          size: '900px'
        }]
      }]
    },
    files: [{
      src: ['build/index.html'],
      dest: 'build/index.html'
    }]
  }
},
```

The original html started as this

```html
<img src="file1.jpg" alt="Image of file1" title="Image of file1">
```

and produced the following HTML markup.

```html
<img src="file1.jpg"
     srcset="file1-400.jpg 400w,
             file1-600.jpg 600w,
             file1.jpg 900w,
             file1-1600_2x.jpg 1600w"
     sizes="(max-width: 560px) 400px,
            (max-width: 760px) 600px,
            (min-width: 761px) 900px"
     alt="Image of file1"
     title="Image of file1">
```

#### Run Grunt
The next step was to execute Grunt with the following amazingly simple terminal command.

```js
grunt
```

This kicked off the build process which uses the Gruntfile to determine what tasks to run and how to run them. This shows the output below.

[![ri7-40](../assets/images/sm_ri7-40.jpg)](../assets/images/full-size/ri7-40.png)

Now when I look at my updated site, I can see that all four images sizes are referenced in the markup.

[![ri7-42](../assets/images/sm_ri7-42.jpg)](../assets/images/full-size/ri7-42.png)

I can also see which image was served by hovering over the image element. In this case it was 'cockatoos-600.jpg' which was chosen based on `<img>` attribute settings and viewport size.

[![ri7-43](../assets/images/sm_ri7-43.jpg)](../assets/images/full-size/ri7-43.png)

Lastly, the total size of the images served has dropped from a bloated **3.25MB** in the non-optimized version to a snappy and responsive **0.42MB** in the optimized version.

### --- Resources & Links
In addition to course material, I used the following resources to fully grasp the new set of **responsive image technologies** built into HTML5.

These include **resolution switching** through use of the HTML5 `srcset` and `sizes` attributes and **art direction** through use of the `<picture>` element.

- **Resolution switching** - involves serving the same image but at a different size or resolution based on viewport and pixel density of the screen
- **Art direction** - involves serving different images according to space allocations

**Resolution switching** can vary the image size, image density, or both. In other words, a change to resolution and/or dimensions (width and height).

I also needed to understand proper **use of breakpoints** across groups of devices in order to properly set size and density ranges for each image.

I then learned to use **Grunt (a task runner)** to automate the task of making multiple copies of an image at different resolutions and sizes.

Lastly, I configured Grunt to **automate changes to HTML** to properly provide *resolution switching* and serve the appropriate image based on the viewport & pixel density of the target device.

These are the resources I used to accomplish this.

- Using Responsive Image Techniques (what they are and how they work)
  - [MDN Responsive Images - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - [Native Responsive Images - Dev.Opera](https://dev.opera.com/articles/native-responsive-images/)
  - [The anatomy of responsive images - Jake Archibald](https://jakearchibald.com/2015/anatomy-of-responsive-images/)
- Responsive breakpoints (how to make an informed decision)
  - [The 100% correct way to do CSS breakpoints - freeCodeCamp Medium](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862)<br>
    I used the breakpoints defined in this article to determine target sizes for groups of responsive images rather than using those breakpoints for responsive layout. I base my responsive layout breakpoints on the content and how that content flows.<br>
    The target sizes I settled on were (400px, 600px, 900px, and 1600px)
- Grunt (what it is and how to set it up)
  - [Grunt Homepage](https://gruntjs.com/)
  - [Getting Started](https://gruntjs.com/getting-started)
  - [Configuring Tasks](https://gruntjs.com/configuring-tasks)
  - [Plugins](https://gruntjs.com/plugins)
- Image processing with Grunt (How-to articles)
  - [Tools for image optimization - Addy Osmani](https://addyosmani.com/blog/image-optimization-tools/)
  - [Generate Multi-resolution images for srcset with Grunt - Addy Osmani](https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/)
- Essential Grunt packages (what's required to set up this automation)
  - [grunt-responsive-images](https://www.npmjs.com/package/grunt-responsive-images) - npm
  - [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images) - GitHub
  - [grunt-responsive-images-extender](https://www.npmjs.com/package/grunt-responsive-images-extender) - npm
  - [grunt-responsive-images-extender (test html)](https://github.com/stephanmax/grunt-responsive-images-extender/blob/master/test/fixtures/testing.html) - GitHub
  - [grunt-responsive-images-extender (Gruntfile.js)](https://github.com/stephanmax/grunt-responsive-images-extender/blob/master/Gruntfile.js) - GitHub

<!--  
## Lesson 8. Images with Markup

## Lesson 9. Full Responsiveness -->
