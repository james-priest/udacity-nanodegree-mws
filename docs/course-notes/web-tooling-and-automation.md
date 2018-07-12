---
title: Web Tooling and Automation
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD032 -->
<!-- # Mobile Web Specialist Nanodegree -->
# Web Tooling and Automation

[<-- back to Mobile Web Specialist Nanodegree homepage](../index.html)

---

### Supporting Links
#### Grunt & Gulp
- [Gulp vs Grunt - Beyond the Numbers](https://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/) (1-2014)
- [Gulp vs Grunt - Comparing Both Automation Tools](https://www.keycdn.com/blog/gulp-vs-grunt/) (3-2017)
- [Grunt Vs Gulp: Battle Of The Build Tools](https://deliciousbrains.com/grunt-vs-gulp-battle-build-tools/) (10-2017)
- [The Basics of Node.js Streams](https://www.sitepoint.com/basics-node-js-streams/) (11-2014)
- [Define a task in Gulp 4.x (stackoverflow)](https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async) (7-2016)

#### Sass & Autoprefixer
- [Sass](https://sass-lang.com/)
- [Autoprefixer](https://autoprefixer.github.io/)

#### Packages & Primers
- [Node Glob Primer](https://github.com/isaacs/node-glob)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) npm package
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) npm package


## Lesson 9. Tools & Automation
### 9.1 Course Intro
This is Paul Bakaus, a Developer Advocate at Google, whose previous role as Studio CTO at Zinga was to keep his team tooled up to be as productive as possible.

With him is James Williams, a Course Developer at Udacity, where he makes Android and web courses.

[![tools1-1](../assets/images/tools1-1-small.jpg)](../assets/images/tools1-1.jpg)

In the next few lessons, they're going to teach how to use tools to help you become a better and more efficient web developer whether you're just starting out, or have been around for a while.

Paul will translate all the tooling mumbo jumbo into English, and explain the ideas and concepts while James makes sure all the material stays in long term memory through course quizzes.

> **Quick disclaimer:** While I promise you'll come out of here supercharged and more productive than ever, it's going to involve
> - a lot of fiddling with the terminal
> - a lot of keyboard shortcuts
> - a general amount of "grunt work"

All right, let's talk about what you'll learn in this course.

1. We'll kick it off with setting up your developing environment, to achieve that perfect flow.
2. We'll get you a build process that you can delegate tasks to.
3. We'll dive into all the things your build process is good at.
- Expressive live coding
- preventing disasters
- saving a lot of time and effort with automatic optimizations.

Let's get going.

### 9.2 Quiz: Cost Effectiveness
While optimizing your work is generally good, you can definitely go overboard and over-optimize.

Before we teach you some good ways to optimize for the web, let's see if you can identify which optimizations are beneficial.

Which of the following optimizations are worth doing considering both the time and risk?

- [ ] A 10% speed up in launching your editor, that takes one hour.
- [ ] A post-process that tests your app on a mobile screen that takes a day to implement.
- [ ] An editor plugin that autocloses your HTML tags that takes 30 minutes to implement.
- [ ] A script that generates images for hi-res devices and takes four hours.

#### 9.2 Solution

- [ ] A 10% speed up in launching your editor, that takes one hour.

    No. Most editors launch in less than four or five seconds. So you'll be making the launch, at most, a half second faster. But chances are, you're only starting your editor once per day. So to get back that hour that you put in, you probably have to start and stop your editor for 20 years or so.
- [x] A post-process that tests your app on a mobile screen that takes a day to implement.

    Yes. Even though it takes a day to implement, testing your app manually on mobile devices is a much more time-intensive and cumbersome process that really doesn't scale well. So that day is well-invested.
- [x] An editor plugin that auto closes your HTML tags that takes 30 minutes to implement.

    Yes. As a front end developer, you'll be writing lots and lots of HTML and most HTML tags need to be closed. Even though it seems like a micro-optimization, this time that you save will accumulate really, really quickly.
- [x] A script that generates images for hi-res devices and takes four hours.

    Yes. Generating multi-resolution imagery is a perfect job for build tool.Even if it takes you have a day to set up a costumer script, it'll be worth it.

### 9.3 Common Sense
I know you're anxious to get to the juicy bits, but I need to give you some general advice, so you don't shoot yourself in the foot.

Not all tools are created equal, and like you learned in the quiz, not all optimizations are worth doing.

Let's go through a few common scenarios that set you up for failure. 

> #1 - "I can build a better tool from scratch!"

Chances are you probably can't. And even if you can, it won't be worth the time.

To give you a web dev example, hundreds of engineering years went into tiny js libraries like jQuery, including some of my time actually. And yet, countless developers have tried to replicate it with a 90% similar feature set, only to fail hard, again and again.

Even popular clones like Zepto, couldn't keep up when they realized that jQuery fixed a lot more cross-browser madness than people thought, even in modern browsers.

> #2 - "This new, 2 week old build tool built by this random dude is 20% faster than Gulp! Let's implement!"

Now we're talking idealistic versus pragmatic. Yes, that 20% speed increase will be ideal. But sticking to a tool that is well supported by the community is pragmatic.

Gulp might be a little slower than someone else's new tool but you'll find answers for your questions on stack overflow, plugins for virtually anything, and can rest assured, that the tool is going to be maintained by its creators. Don't just trust your instincts, but consider the long-term value for your project.

> #3 - "This tool is self-contained and does everything we want right now."

So, it's neatly contained. All in package, huh? Well, be careful with those. If a tool promises to do it all, and stays away from offering any sort of connection points such as an API or modules, the run.

Seriously, life is too short to buy into an ecosystem that you can't escape from, especially if the success of your site depends on it.

> #4 - "This optimization can shave a second off of dev time."

And finally, you should be careful with any micro optimizations that are just not worth it.

If you are doing an optimization of your work flow that takes, say four hours, and cuts a second away from a task you perform once during the day, you need to do it for 40 years to justify the investment.

## Lesson 10. Editor Config
### 10.1 Intro
In this lesson, you'll learn how to set up your development environment. Namely, your editor.

I thought you told me I could build a web pages with just Notepad and a browser.

Well, yeah, I mean in theory you can. In theory I could use chopsticks to eat a 16 ounce steak, but in practice there are tools that make the experience much less frustrating.

If done just the right way, you can achieve what most developers dream of: A state of mind called flow.

### 10.2 Code Editor vs IDE
Consider the possibilities of a multi-tool. If I have this baby with me, I could eat a steak on the go wherever I want to.

It might be a better experience if I use a simple knife though. Sure, it doesn't have all the bells and whistles, but it's really good at its main job, being a knife.

What we're comparing is here is an IDE versus a Code Editor.

[![tools1-2](../assets/images/tools1-2-small.jpg)](../assets/images/tools1-2.jpg)

An IDE, short for Integrated Development Environment, is an attempt to create a development productivity Swiss army knife that can do it all: editing, debugging, building, compiling and even, optimizing.

The problem is that IDEs come at the expense of tools that do one thing really well.

That's not to say that IDEs never work. For app ecosystems, such as iOS or Android, the vendor offers official support, and controls both the programming language, and platform which is why so many native developers use Xcode, Android Studio, or Visual Studio.

But on the web, we already have to live with fragmentation. Different browsers, devices and standards. We could try to pretend that CSS, HTML and JavaScript come in a beautiful tightly controlled bundle and build an IDE around it, or we could do what most web developers decide to do: embrace the chaos and use individual tools best for each job while ensuring that they function well together.

### 10.3 Editor Choice
> **Note:** This course recommends using Sublime Text Editor 3.
>
> This used to be the industry standard but Stack Overflow's 2018 Developer Survey has Visual Studio Code ranked as the most popular developer environment tool with 34.9% respondents claiming to use it.
>
> VSCode is free and I recommed it as the better alternative. That said, here's the lesson text...

Choosing the right editor can be tricky due to the overwhelming options and religious developer battles. It's almost as bad as the ongoing battle of tabs versus spaces, or semicolon haters and lovers.

I'm making it super easy for you. In this course, we'll stick to Sublime text three. It's simple, extendable, fast, and very well supported by the community.

For free alternatives check out GitHub's Atom editor. It builds on a similar plugin architecture.

In the end, I won't be offended if you decide to use another editor. As long as you stay away from Notepad. Just make sure it's fast, can be extended with functionality, and is well supported and stable.

### 10.4 Learn Your Editor
Chances are the relationship between you and your editor will be a long one, and like with any good relationship, you need to work on it and invest early on. If you don't, you'll frustrate each other and things get complicated.

In the first couple of days of using it, try on lots of built-in shortcuts and features, even if they seem overkill.

Try them all out and observe yourself. Which shortcuts stick? Which do you have to force yourself to use?

You'll get a pretty good feel for what matters.

### 10.5 Shortcuts
> **Note:** The shortcut keys discussed below are for Sublime Text Editor although some key comibinations are the same for VS Code.
>
> While shortcut combinations differ from editor to editor (and those of my editor or choice, VS Code), the keyboard actions discussed here are still useful to know and can be applied to any editor regardless of specific key combinations.
>
> They will save you time regardless of which editor you use.

From now on, I will use a few shortcuts here and there to jump around the editor and get different things done. I'm doing this on a Mac, thus I'm going to use the CMD key a lot, but most shortcuts work just as well on Windows by substituting CMD with CTRL.

Searching and finding matters a lot to me. Hitting CMD+T will bring up the fuzzy file finder. The search box forgives many spelling mistakes or omissions so jumping from file to file gets lightning fast.

[![tools1-3](../assets/images/tools1-3-small.jpg)](../assets/images/tools1-3.jpg)

Most developers prefer this method over manually searching for a previously opened tab as this involves zero mouse input and no thinking about the tab position.

It's a perfect example of an action that looks more complex than clicking on a tab, but is actually faster and simpler.

Typing an @ symbol into that box, or directly typing CMD+R, will bring up the symbol search menu. This allows you to quickly locate stuff in the current file, and it works extremely well for CSS or JavaScript functions.

[![tools1-4](../assets/images/tools1-4-small.jpg)](../assets/images/tools1-4.jpg)

Now I know I use this color somewhere else in this CSS file and I want to quickly locate it. So I have it already selected and on my keyboard I'm going to hit CMD+ALT+G and it finds the next instance of it. (VS Code: F3)

[![tools1-5](../assets/images/tools1-5-small.jpg)](../assets/images/tools1-5.jpg)

Sublime Text has a very powerful tab completion feature. In a nutshell, tab completion allows you to type a whole lot less .And typing less usually results in your finishing faster.

So if I go into my HTML file and type in 'img' and hit Tab, it expands it out to the full image tag. It not only it created an image tag with the most important attributes for us, it also place the cursor in the right position for us to enter information in.

[![tools1-6](../assets/images/tools1-6-small.jpg)](../assets/images/tools1-6.jpg)

Many editors support multiple selection these days. That's the ability to have multiple selections in the same document that aren't next to each other.

But most of the time, folks show that off with column selection, which can be done by holding the ALT key and dragging your cursor around. It sure looks cool but the use cases for it are so rare that I almost never use it.

So let's see how we can do this the Sublime way. So I have this word color right here selected and have pressed CMD+D. And it shows us the next instance of that word, without clearing the selection of the first.

[![tools1-7](../assets/images/tools1-7-small.jpg)](../assets/images/tools1-7.jpg)

It doesn't stop there. CMD+CTRL+G selects all instances of the word throughout the whole file. You can think of it as a global selection.

So, this makes it very easy for us to quickly refactor.

### 10.6 Extending Editor
Remember how I told you that your editor is like that steak knife that was built to fulfill only a specific purpose? Well, that wasn't the entire truth.

It's true that most editors have figured out how to do a great job with basic editing, but almost all modern editors can be extended with functionality.

In Sublime's case, all of it comes from a healthy community of developers, like you. They were missing something and built it.

And indeed, right now your Sublime is a genetic text editor. It doesn't care about you being a web developer. In the next step you customize it so it becomes a front-end development editor.

Sublime doesn't have a built in plug in repository, so the first thing we'll need to do is install package control. Its the only time we'll manually need to install a plugin.

[![tools1-8](../assets/images/tools1-8-small.jpg)](../assets/images/tools1-8.jpg)

We'll take this scary looking block of text [(https://packagecontrol.io/installation)](https://packagecontrol.io/installation) and paste it into Sublime's terminal. And with that it's fetching the plug in and installing all of the dependencies.

Let's test whether it worked. Type Command+Shift+P to bring up Sublime's command palette. This drop down menu is useful in many ways because it contains all the actions Sublime can do.

[![tools1-9](../assets/images/tools1-9-small.jpg)](../assets/images/tools1-9.jpg)

I generally use it to discover stuff I didn't know about, like this toggle comment action andto execute actions that don't have shortcuts or have crazy long ones.

But right now, type in P-A-C, and you'll see many new commands associated with package control. The one we really care about is install package. (VSCode: ext)

This is the list of all of the packages in the repository. So now that we're prepared, let's install a few of our favorite plugins. (The links are below)

- Emmet
- Sidebar Enhancements
- Color Picker
- Color Highlighter

Through package control's install command, please install Emmet, Sidebar Enhancements, Color Picker and Color Highlighter. Some plugins require restarting the editor. So to make sure to do that after you have installed everything.

Emmet dramatically extends and improves Sublime's built in text snippets. Its craziest feature is the ability to use CSS selectors to create newHTML markup. I know that sounds a bit confusing, but let me tell you what I mean.

Let's say I need a list with four items in my index.html file. I can do that by typing

- `ul#nav>li*4`

Then pressing Tab expands the selector into the HTML we specify.

```html
<ul id="nav">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Emmet comes with a lot more built in magic that you should definitely check out in the link in the instructor's notes.

The Sidebar Enhancements plugin has a pretty descriptive and spot on name. It mostly extends the right-click menu of Sublime's usually pretty bare-bones sidebar with all of the stuff you would expect. Deleting files, new folders and so on. But also, some nifty stuff such as copying content as a data URI.

Now, these last two, Color Picker and Color Highlighter work together to make editing and working with colors in CSS, much easier.

Pressing Cmd+Shift+C opens the system color picker and allows you to quickly choose a color. And when the cursor is placed in or around an existing color, picking a new one will update it.

[![tools1-10](../assets/images/tools1-10-small.jpg)](../assets/images/tools1-10.jpg)

The highlighter outlines or underlines colors it finds in your CSS with a preview so you always have an idea what you're looking at.

#### Sublime Resources

- [Package Control](https://packagecontrol.io/): The Sublime Text package manager
- [Emmet](http://emmet.io/) home page
- [Emmet on Package Control]()https://packagecontrol.io/packages/Emmet
- [SideBarEnhancements](https://packagecontrol.io/packages/SideBarEnhancements) on Package Control
- [ColorPicker](https://packagecontrol.io/packages/ColorPicker) on Package Control
- [ColorHighlighter](https://packagecontrol.io/packages/Color%20Highlighter) on Package Control

### 10.7 Quiz: Using the Palette
Which of these shortcuts converts text to lowercase? For a quick hint, check the command palette.

Check the command palette if you get stuck.

- [ ] CTRL + L
- [ ] CMD + SHIFT + L
- [ ] CMD + K, CMD + L
- [ ] CMD + SPACE, L

#### 10.7 Solution
The correct choice was CMD + K, CMD + L.

Remember to use the command pallet to look up any commands that you want to learn the shortcuts for.

You do this by opening the command palette, and start typing any part of the command. In this case, "L + O + W..." for lowercase. It will bring up the Transform to Lowercase command.

### 10.8 Wrap up
And with that, we're already at the end of the lesson.

I encourage you to not just experiment with different commands and plugins but try to get even more familiar with the editor.

Take your time and try out lots of plugins from the package control website or see how Sublime feels with code you have already written.

## Lesson 11. Build Automation
### 11.1 Intro
This hammer here is a fantastic tool to build stuff. But in order for it to work, it needs my immediate attention of energy. I can't just turn it on and let it do its thing.

In today's affordable tool shed, we've only recently got a few additions that are different. Modern tools like a 3D printer, can be given a task that it then performs autonomously until it's done.

In today's life of a web developer, we're seeing a similar trend, a large collection of tools that you feed tasks to and that then automate and improve many aspects of your workflow.

Let's dive into the world of build tools.

### 11.2 Build Tools
Build tools aren't a new thing, but web dev specific build tools only became popular a few years ago.

The simplest build tool is just a shell, or bash script. These scripts, with the `.sh` extension, are just a series of terminal commands or functions, and can be executed from the command line.

But working with the dependency graphs, or only updating files that have changed are tricky tasks with just a shell and this is where the original build system, `make`, comes in, adding file management sugar, and more.

After `make` came build tools such as Ant, Maven, and Gradle, all especially popular in the world of Java. All of them have declarative tasks, but you need to use XML to drive them, or in the case of Gradle, a programming language that you might not understand.

But web developers have a burning hate for everything XML, with the only exception of HTML as an accepted flavor. And so came a new set of modern, web development-focused, build tools; tools that would use a language that web developers are already familiar with: JavaScript.

Out of JavaScript are two Node.js-based build tools which have become very popular: Grunt and Gulp.

[![tools1-11](../assets/images/tools1-11-small.jpg)](../assets/images/tools1-11.jpg)

But why are these the popular ones and what should you look for in a build tool? Here are the most important features to look for.

1. Fast
2. Community-driven
3. Modular & Extensible
4. Feature-rich

#### Fast
A build tool should be fast in execution as there's a need for speed when iterating on a website or app.

We're used to changing a line or reloading a page afterwards to see the changes instantly and disrupting that flow is a no go.

#### Community-driven
It should also be supported by a healthy community that exchanges plugins that add functionality and answers questions on sites such as Stack Overflow.

With popular build tools such as Grunt, chances are there's already an answer to your problem, and somebody else has had it before.

#### Module & Extensible
Next, it's very important that even if it comes with a lot of bells and whistles you can extend it with more and custom functionality as you see fit.

#### Feature-rich
And finally, the tool should already solve a few common problems out of the box for it to be useful.

Grunt, was the most popular tool and fulfills many of these requirements. It has a strong community and a healthy plugin ecosystem. 

Gulp, the new popular kid on the block, has two significant advantages over Grunt. It's built for speed and can execute tasks in parallel, plus converts open files into super fast streams internally.

Gulp's tasks, use code over configuration, which means that you can just use normal JavaScript, and extend or modify tasks that don't work for you.

You might have already guessed it, we're sticking with Gulp for the rest of this course but if your team or company chooses Grunt or a different system instead, fear not. The concepts are quite similar, and many times the plugin exists for both.

Here's a link to stackshare.io which gives stats and compares these three JS Build Tools / JS Task Runners: [Webpack vs. Gulp vs. Grunt](https://stackshare.io/stackups/grunt-vs-gulp-vs-webpack). (Technically, Webpack is a bundler while Gulp & Grunt are JavaScript task runners.)

### 11.3 Quiz: Build Tool Qualities
What are the core qualities of a good build tool?

- [x] Fast exectution / build time

    Yes. Things need to be fast when you're developing a website or app. If you change a line and reload the page, you want to see those changes instantly. Disrupting that flow is a no-go. So make sure your actual build time never goes beyond a few seconds.
- [x] Vibrant plugin community

    Yes. Build tools are pretty useless by themselves. You either need to write a lot of custom code or rely on plugins. So make sure to pick one that has the plugins you need.
- [x] Modular and sharable tasks

    Yes. Individually contained tasks allow you to easily enable and disable certain steps of your build process and their important prerequisite.
- [ ] Concise and short API

    No. There is no point in saving bytes when writing automation code. The important bit is that you understand what the configuration of your build system does, not how short the notation is.

### 11.4 Gulp vs Grunt
So what's so special about Gulp? Let's have a closer look.

The main difference between Grunt and Gulp is that Grunt focuses on configuration, while Gulp focuses on code. But what does that even mean in practice?

Have a look at this Grunt configuration file. It's not important that you understand everything it does right away.We'll get to that later.

[![tools1-12](../assets/images/tools1-12-small.jpg)](../assets/images/tools1-12.jpg)

It uses a JavaScript config object, to configure certain tasks, such as concat or uglify.

**To change or extend one of these tasks, you would have to modify the plugins themselves.**

Consider the same functionality in this Gulp config file instead. It looks more like standard JavaScript.

[![tools1-13](../assets/images/tools1-13-small.jpg)](../assets/images/tools1-13.jpg)

At any given point, you can intervene, and type your files into another function before moving on.

The second big argument is all about speed.

Grunt executes tasks in sequence, one after another whereas Gulp, by default, executes tasks in parallel, and finishes when all have finished.

But that's not all that makes Gulp usually come up much faster. Gulp comes with the concept of streams, that cause much less IO, or file system access.

Head to the Gulp installation instructions below, and install Gulp on your system. If you haven't done so already, you also need to install Node.js and NPM.

#### 11.4 Resources

- [Gulp Installation Instructions](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### 11.5 Installing Gulp
#### Installing Gulp and Course Code
Note: if you have not installed NodeJS or NPM you will need to install these first before installing Gulp. You can download and install NodeJS and NPM by going to the [Node official site](https://nodejs.org/) and downloading the latest version of NodeJS.

1. Take a few moments and [install Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). The instructions are listed in the link.
2. Grab the [course code](https://github.com/udacity/ud892) from Github.

### 11.6 Define  Gulp Task
Every Gulp project starts with a Gulp file. This file sits in the root directory of your project and defines all the tasks that you should execute when running Gulp.

[![tools1-14](../assets/images/tools1-14-small.jpg)](../assets/images/tools1-14.jpg)

There are a few ways to define a task in Gulp but first we need to `require` 'gulp' as a dependency since a gulp file is essentially a node.js script.

```js
var gulp = require('gulp');
```

Tasks in Gulp are asynchronous and Gulp uses [async-done](https://www.npmjs.com/package/async-done) to wait for the task's completion.

Tasks are called with a callback parameter which we call to signal completion. Alternatively, Task can return a stream, a promise, a child process or a RxJS observable to signal the end of the task.

> #### Task Examples on stackoverflow 
> Here's a link that shows each of the five ways we can define a task.
> - [Define a task in Gulp 4.x (stackoverflow)](https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async).

#### Option #1: Call the callback function (easiest)
This is probably the easiest way.

Gulp automatically passes a callback function to your task as its first argument. Just call that function when you're done:

```js
var gulp = require('gulp');

gulp.task('default', function(done) {
  console.log('hello world');
  done();
});
```

#### Option #2: Return a Promise
An alternative task setup returns a `Promise`.

Note that most of the time you won't have to create the `Promise` object yourself, it will usually be provided by a package (e.g. the frequently used `del` package returns a `Promise`).

```js
var gulp = require('gulp');

gulp.task('default', function() {
  return new Promise(function(resolve, reject) {
    console.log('hello world');
    resolve();
  });
});
```

#### Run the task
 You can run it by executing gulp at the command line.

 ```bash
 gulp
 ```

### 11.7 Gulp Streams vs Grunt Tasks
Before we move on and create more complex tasks, let's talk a bit about the concept of streams in Gulp.

Build systems like Grunt have tasks that make changes to files and then save those changes to a temporary location before the next task takes over to make the next set of changes.

As a result, every task incurs a penalty for I/O in file system operations.

[![tools1-16](../assets/images/tools1-16-small.jpg)](../assets/images/tools1-16.jpg)

Gulp on the other hand, converts your input files into an in memory stream. So the I/O is only done initially, and at the very end of all tasks.

This is what gives Gulp such a great speed increase in many situations.

#### 11.7 Resources
##### Comparison Articles
- [Gulp vs Grunt - Beyond the Numbers](https://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/) (1-2014)
- [Gulp vs Grunt - Comparing Both Automation Tools](https://www.keycdn.com/blog/gulp-vs-grunt/) (3-2017)
- [Grunt Vs Gulp: Battle Of The Build Tools](https://deliciousbrains.com/grunt-vs-gulp-battle-build-tools/) (10-2017)

##### Supporting Articles
- [The Basics of Node.js Streams](https://www.sitepoint.com/basics-node-js-streams/) (11-2014)
- [Define a task in Gulp 4.x (stackoverflow)](https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async) (7-2016)

### 11.8 Sass & Autoprefixer
We'll start with a common task for many web developers. That task is to make CSS work across the board on the most current subset of browsers in use.

[![tools1-17](../assets/images/tools1-17-small.jpg)](../assets/images/tools1-17.jpg)

Prefixes, obscure syntax, and the inability to nest or use variables, all make working with CSS a pretty trying part of being a web developer.

That said, we can rewrite our style sheet in Sass, a super set of CSS that gets rid of many of CSS annoyances, and compile it to pure CSS. Then, instead of prefixing CSS properties manually, we automate that task with Autoprefixer.

If you've never used Sass before, check out [this Sass link](http://sass-lang.com/) to learn more about it.

#### 11.8 Resources

- [Sass](https://sass-lang.com/)
- [Autoprefixer](https://autoprefixer.github.io/)

### 11.9 Gulp Task: Sass
#### Install Sass NPM Dependencies
Both Sass and Autoprefixer have existing gulp plugins that we can use. So, let's start with installing `gulp-sass` as a project dependency.

```bash
$ npm install --save-dev gulp-sass

+ gulp-sass@4.0.1
added 140 packages from 121 contributors...
```


This will install the plugin so we can use it in our gulp file. Now we have to change the folder structure slightly to account for the generated CSS output files.

#### Folder Setup
Create a new folder in your project directory and call it 'sass'. Then move the files `main.css` and `extra.css` from the CSS folder into the sass folder and rename the extension to `.scss`.

By changing the extension, we just turned these into Sass files that soon get complied into CSS files with our new task.

The 'css' directory should now be empty.

#### Create 'styles' Task
Now before we can use the `gulp-sass` plugin, we need to make it available to gulp by using a `require` directive.

```js
var gulp = require('gulp');
var sass = require('gulp-sass');
```

Next we create a new task and name it 'styles', which is assigned to the first argument of the `task` method.

The second argument is a function that's executed when the task is invoked.

```js
gulp.task('styles', function () {

});
```

Now we need to tell gulp which files we want it to work with. For that, gulp has a special command called `src` on the `gulp` object.

The `src` method takes a [glob pattern](https://github.com/isaacs/node-glob) to determine which files it's going to operate on. In this case we use the the following line.

```js
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss');
});
```

This looks for files with the `.scss` extension in a `sass` folder with any potential sub-directories in-between.

Now that we have the files, we pipe them to Sass.

The `pipe` function on the stream of files we just created, takes the destination that the plugin provides, so we call sass right here.

```js
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass());
});
```

So now we've converted our files from Sass to proper CSS, but we still need to save then out.

We do this by using `pipe` again into which we pass `gulp.dest('./css')` to specify our final destination folder.

Here's the completed code.

```js
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
```

But by default, the whole build will stop and error out when Sass discovers an error.

This can be tested by dropping in some bad characters in 'main.scss' such as an opening & no closing curly brace: `abc {`.

That's not always what you want. Very often, it's better to finish an action and output the error. Many plugins such like `gulp-sass` emit events for this scenario.

Listening to the `error` event on a Sass object and inserting the `sass.logError` function changes the default behavior. Instead of killing the whole build, it tells Gulp to simply log the error and go on as usual.

```js
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
```

This looks much better. Now, we can run Gulp in the terminal.

```bash
gulp styles
```

This generates new CSS files from the original Sass files.

Now's a great time to get familiar with Sass if you haven't already done so.

#### 11.9 Resources

- [Node Glob Primer](https://github.com/isaacs/node-glob)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) npm package

### 11.10 Gulp Task: Autoprefixer
Now you now know the basics of finding, installing and enabling a plugin.

Here's a link to the [gulp-autoprefixer plugin](https://www.npmjs.com/package/gulp-autoprefixer).

Note that searching for 'autoprefixer' plus 'gulp' on Google will also return a link to the NPM plugin as well.

[![tools1-18](../assets/images/tools1-18-small.jpg)](../assets/images/tools1-18.jpg)

The NPM page gives the installer command that should be run in the terminal.

```bash
$ npm install --save-dev gulp-autoprefixer

+ gulp-autoprefixer@5.0.0
added 10 packages from 190 contributors...
```

Now we go ahead and `require` the plugin at the top of our gulpfile.js

```js
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
```

The autoprefixer object is just another receiver of a pipe stream and since we already have a pipe coming from Sass, we simply add a new line right before we specify the file's destination.

```js
gulp.task('styles', function(done) {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(

    ))
    .pipe(gulp.dest('./css'));
  done();
});
```

Lastly, we insert a configuration object to specify the browser's option of Autoprefixer, which tells Autoprefixer for which browser versions to prefix.

In this case, we'll just instruct it to use the last two versions of every popular browser.

```js
gulp.task('styles', function(done) {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(
      browsers: ['last 2 versions']
    ))
    .pipe(gulp.dest('./css'));
  done();
});
```

Now when we rerun `gulp styles` in the terminal, we see that the original `main.scss` file here:

#### main.scss
```css
img {
  position: absolute;
  top: 0;
  left: 60px;
  width: 100px;
  transform: translate(0, -100%);
  filter: invert(1);
}
```

now becomes the updated `main.css`

#### main.css
```css
div.main aside img {
  position: absolute;
  top: 0;
  left: 60px;
  width: 100px;
  -webkit-transform: translate(0, -100%);
          transform: translate(0, -100%);
  -webkit-filter: invert(1);
          filter: invert(1); }
```

#### 11.10 Resources

- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) npm package