---
title: JavaScript Promises
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD024 MD032 -->
<!-- # Mobile Web Specialist Nanodegree -->
# JavaScript Promises

[<-- back to Mobile Web Specialist Nanodegree homepage](../index.html)

---

### Supporting Links
- Udacity Course - [Javascript Promises](https://www.udacity.com/course/javascript-promises--ud898) by Google
- Google Web Fundamentals - [JavaScript Promises - Jake Archibald](https://developers.google.com/web/fundamentals/primers/promises)

## Lesson 1. Creating Promises
### 1.1 Course Introduction
Hi everybody, I'm Cameron Pittman. Welcome to this short course on JavaScript promises.

[![prom1-1](../assets/images/prom1-1-small.jpg)](../assets/images/prom1-1.jpg)

Every web developer needs to be able to handle asynchronous work with confidence and ease, and that's why you're here. You're here to take advantage of native JavaScript promises.

There are many methods to handle asynchronous work already. However, as you'll be discovering in this course, promises are the recommended option, because they give you flexibility,intuitive syntax, and easy error handling.

But before we start all that, I have an off topic question for you.

You're looking at millions of stars in the disk of our Milky Way galaxy.

[![prom1-2](../assets/images/prom1-2-small.jpg)](../assets/images/prom1-2.jpg)

Every dot is a star. Some are bigger and brighter than the sun, others smaller and dimmer. But what else is in this picture? Planets.

Every single star in the Milky Way is the possible home for dozens of alien worlds. That means it's likely that there are hundreds of billions of planets in our galaxy alone.

The Kepler Space Observatory has found more than 1,000 exoplanets like this one in the last few years. Combined with data from other telescopes, astronomers have confirmed sightings of almost 2,000 exoplanets.That's a lot of worlds.

I had an idea when I was designing this class, andI call it the Exoplanet Explorer. It's a web app that helps people learn about real planets around other stars.

[![prom1-3](../assets/images/prom1-3-small.jpg)](../assets/images/prom1-3.jpg)

Throughout this class, you'll be using promises to request real JSON data about exoplanets, and that data is coming from NASA and CalTech.

You'll be using promises to turn that data into useful information in the app. Are you ready to get started?

### 1.2 Sync vs Async
> "The Promise object is used for deferred and asynchronous computations."<br>
> -MDN

Okay, great. This statement is less than helpful if you're understanding of the word asynchronous is less than certain.

So, the question is, what is asynchronous work?

Asynchronous work happens at an unknown or unpredictable time.

[![prom1-4](../assets/images/prom1-4-small.jpg)](../assets/images/prom1-4.jpg)

Normally code is synchronous. One statement executes, like this one, and there's a guarantee that the next statement executes immediately afterwards.

[![prom1-5](../assets/images/prom1-5-small.jpg)](../assets/images/prom1-5.jpg)

Threading on processors doesn't necessarily guarantee that, however, the JavaScript threading model ensures that, for all intents and purposes, JavaScript runs in a single timeline.

Unlike synchronous code. Asynchronous code is not guaranteed to execute in a single unbroken timeline.

[![prom1-6](../assets/images/prom1-6-small.jpg)](../assets/images/prom1-6.jpg)

In fact, you should assume that you have no idea when asynchronous operations will complete.

In a situation like this, for example, you can't even assume that just because you sent out the first request first and the second request second, that the first request will return sooner than the second.

Assume that either order is equally likely, as the fact that one or both requests just might fail altogether.

Network requests aren't the only examples of asynchronous code. Any code that relies on processes like these, like events, like threads, or just some kind of unknowable finishing time are asynchronous.

[![prom1-7](../assets/images/prom1-7-small.jpg)](../assets/images/prom1-7.jpg)

So, the big question is, what is the best way to handle asynchronous code?

Okay, the answer is obviously promises. That's why you're here.

### 1.3 Callbacks vs Thens
Callbacks are the default JavaScript technique for asynchronous work. Pass the function to another function, and then call the callback function at some later time when some conditions have been met.

[![prom1-8](../assets/images/prom1-8-small.jpg)](../assets/images/prom1-8.jpg)

This works well but there are some questions without obvious answers. For instance, how do you handle errors?

It's best practice to assume that any operation could fail at any time. It's doubly important to assume so with network requests.

[![prom1-9](../assets/images/prom1-9-small.jpg)](../assets/images/prom1-9.jpg)

If an error occurs on line #2, should you still execute the call back? If so, what value should it receive? If not, then what should happen?

What if it's a JavaScript error? Should that be handled any differently than a network error?
There's no clear answer.

Node.js basically makes error first callbacks mandatory but that doesn't really solve the problem. It's still basically your job to define, and implement an error handling strategy.

Assume that everything happened just fine, no errors and then this callback runs when the onload handler gets called.

[![prom1-10](../assets/images/prom1-10-small.jpg)](../assets/images/prom1-10.jpg)

Great. Now you've chained together two pieces of work, but what if this callback is also an asynchronous operation and you need something else to happen afterwards? Do you pass another function with another callback here?

This is one scenario that leads to something called the Pyramid of Doom. A dreadful situation where there are nasty, nasty nested callbacks within callbacks, within callbacks.

[![prom1-11](../assets/images/prom1-11-small.jpg)](../assets/images/prom1-11.jpg)

This looks ugly and it's hard to write, but the real sin is that it is incredibly frustrating to debug.

This is the same kind of code, but written with promises, and my, it looks nicer.

[![prom1-12](../assets/images/prom1-12-small.jpg)](../assets/images/prom1-12.jpg)

You'll be learning all about the beauty of `.then` later in this course. For now, just read this and appreciate the fact that you can figure out what's happening here, despite the fact that you haven't even finished this course.

That's pretty awesome.

### 1.4 Course Map
I broke this course into four stages that built on one another.

[![prom1-13](../assets/images/prom1-13-small.jpg)](../assets/images/prom1-13.jpg)

You'll start in the **Wrapping** stage where you'll be learning the syntax of constructing promises.

A promise constructor in and of itself isn't super useful. So from there, you'll be learning how to react the resolution of the promise.

If all goes well, you'll want to `.then` off the promise, or if something breaks, you'll want to `.catch` the error, these are the **Thening** and the **Catching** stages.

You'll spend the whole second lesson in the **Chaining** stage where you'll learn how to create long sequences of asynchronous work.

It's also worth going over some promise vocabulary. I'm stealing these definitions from Jake Archibald who wrote a fantastic [guide on promises](http://www.html5rocks.com/en/tutorials/es6/promises/) that you can find in the Resources section below.

There are four states a promise can have. You'll pick up these terms pretty quickly, but I recommend jotting them down on a piece of paper to help out as you're going through the course.

[![prom1-14](../assets/images/prom1-14-small.jpg)](../assets/images/prom1-14.jpg)

Here they are.

- **Fulfilled (Resolved):** - It worked :)
- **Rejected:** - It didn't work :(
- **Pending:** - Still waiting...
- **Settled:** - Something happened

The first one is **fulfilled**, and that means that the action related to the promise succeeded, this state is also known as resolved.

Then there is **rejected**, this means that the action related to the promise failed.

The next one is **pending**, which means that the promise has not yet fulfilled or rejected.

And then finally, there's **settled**, which means that the promise has either fulfilled or rejected.

Okay, now that you've got the terms behind promises and you know where we're going in the course, it's time to examine how and when promises are executed.

#### Resources

- [JavaScript Promises - Jake Archibald](https://developers.google.com/web/fundamentals/primers/promises)

### 1.5 Promises Timeline
I want you to imagine a situation like this, where you're setting an Event listener after the event has already fired.

[![prom1-15](../assets/images/prom1-15-small.jpg)](../assets/images/prom1-15.jpg)

What happens? Nothing.

If the event doesn't fire again, the Event listener never gets called.

Now imagine you're using promises and you set an action to occur for when a Promise resolves which is set after the promise has already resolved.

[![prom1-16](../assets/images/prom1-16-small.jpg)](../assets/images/prom1-16.jpg)

Guess what? This will execute.

Compare this to Event listener example where the Event listener would never get called if it's set after the event already fired.

[![prom1-17](../assets/images/prom1-17-small.jpg)](../assets/images/prom1-17.jpg)

I want to quickly show you some code.

This is a promise constructor, and you'll be learning more about this in the next video. This method `resolve()`, settles the promise.

[![prom1-18](../assets/images/prom1-18-small.jpg)](../assets/images/prom1-18.jpg)

A promise can only settle once. So in this scenario, the second resolve is doing nothing. Nothing's going to happen, it's going to go by unnoticed.

Compare this to events. An event can fire many times, but a promise can only settle once.

Promises execute in the main thread, which means that they are still potentially blocking.

[![prom1-19](../assets/images/prom1-19-small.jpg)](../assets/images/prom1-19.jpg)

If the work that happens inside the promise takes a long time, there's still a chance it could block the work the browser needs to do to render the page.

If so, the frame rate of your app is going to suffer, and you'll probably hear your users complain about jank.

Promises are not a pass for safely executing long running operations. They're simply a technique for deciding what will happen when an asynchronous task settles.

Think of them as `try...catch` wrappers around asynchronous work.

Okay, it's time for a quiz.

### 1.6 Quiz: Async Scenarios
In which of these situations should you consider using Promises?

[![prom1-20](../assets/images/prom1-20-small.jpg)](../assets/images/prom1-20.jpg)

1. Should you consider using Promises when you're working with information from an Ajax request?
2. Should you use them when you're executing long-running image manipulation in the main thread?
3. Should you use them when you're creating a series of divs and appending them to the body in a specific order?
4. Should you use them when you're posting messages back and forth between the main thread and a web worker. If you're not familiar with web workers, it's an API that allows you to create independent threads to execute long running JavaScript off the main thread.

There's more than one answer, so check all that apply.

#### Solution
So, which of these scenarios are right to be promisified? I'll go ahead and start at the top.

1. [x] Working with information from ajax requests.

    Most definitely. The word asynchronous is in the very definition of ajax, and you'll be working with these kinds of requests soon.

2. [ ] Executing long running image manipulation work in the main thread.

    No. Promises run in the main thread, so you don't gain anything from wrapping work in the main thread in a promise. The work will still happen synchronously and still probably lead to a janky experience.

3. [ ] Creating a series of HTML elements.

    No. Creating and appending DOM elements is synchronous, so there's no need to wrap them in promises. That being said, if these were, say image elements, or script elements with links to external resources, then loading the external resources themselves, are asynchronous operations. You could use promises to chain actions after the resources load. Likewise, if the data came from an asynchronous resource, then you could wrap this in a promise, but that's not what's happening here.

4. [x] Posting messages back and forth between the main thread and a web worker.

    Yes. Web workers run on separate threads and post data to the main thread. They are certainly asynchronous and perfect for promises.

All right, that's enough discussion about promises. It's time to start writing them.

### 1.7 Promise Syntax
We are entering the wrapping stage. I want you to keep in mind that:

- **A promise is a try-catch wrapper around code that will finish at an unpredictable time**.

[![prom1-21](../assets/images/prom1-21-small.jpg)](../assets/images/prom1-21.jpg)

Here, let me show you an example.

**Promise is a constructor**. You can either store a promise as a variable like I'm doing right here, or you can simply work on it as soon as you create it.

[![prom1-22](../assets/images/prom1-22-small.jpg)](../assets/images/prom1-22.jpg)

Either way works just fine, but you'll often see me simply work on the promise without storing it as a variable.

#### ES5
Here's the code from above.

```js
var promise = new Promise(function(resolve, reject) {
  var value = doSomething();
  if(thingWorked) {
    resolve();
  } else if (somethingWentWrong) {
    reject();
  }
}).then(function(value) {
  // success!
  return nextThing(value);
}).catch(rejectFunction);
```

#### ES6
This is the same promise constructor written in ES6.
```js
const promise = new Promise((resolve, reject) => {
  const value = doSomething();
  if(thingWorked) {
    resolve();
  } else if (somethingWentWrong) {
    reject();
  }
}).then(value => {
  //success!
  return nextThing(value);
}).catch(rejectFunction);
```


You pass a function to the promise with two arguments: `resolve` and `reject`.

[![prom1-23](../assets/images/prom1-23-small.jpg)](../assets/images/prom1-23.jpg)

`resolve` and `reject` are the two callbacks you use to specify when a promise has either **fulfilled**, because something worked, or **rejected** because something went wrong.

Let me show you what this actually looks like.

In this example, I'm wrapping an image tag loader in a promise because I want to do some work after the image loads on a page.

[![prom1-24](../assets/images/prom1-24-small.jpg)](../assets/images/prom1-24.jpg)

I'm using the image tag's `onload` handler to specify success.

`onload` calls `resolve`, which queues up the function passed to `.then` to execute after the remainder of the code in this function block finishes executing.

> **Note:** the JavaScript engine does not immediately stop executing this function upon calling `resolve`.
>
> It will execute the remaining lines in the function before transferring control to `.then` which in turn executes `finishLoading`.
>
> An example of this concept in action can be found in the *Resources* section below.

Being able to call `resolve` and `reject` is important. This is what it gives you the flexibility to explicitly say what constitutes **fulfillment** and what constitutes **rejection** for the promise.

When either `resolve` or `reject` has been called, the promise has been **settled**, and then at that point, the next part of the chain, usually, a `.then`, or it could be a `.catch`, is executed.

Back to the original example, any value passed to `resolve` or `reject` will be received as an argument by this subsequent `.then` or `.catch`.

[![prom1-25](../assets/images/prom1-25-small.jpg)](../assets/images/prom1-25.jpg)

In the event that nothing is passed to `resolve` or `reject` as is the case here with the `reject`, then it's totally fine. The next link in the chain simply receives `undefined`.

[![prom1-26](../assets/images/prom1-26-small.jpg)](../assets/images/prom1-26.jpg)

> **Note:** Just to be clear, when passing values or `undefined` through `resolve()` and `reject()` to `.then` and `.catch`, the values themselves aren't being passed to `.then` or `.catch`, rather they're being passed to the functions called by `.then` or `.catch`.

There's a third case and that is if the value that's passed is a promise.

If so, then the promise will execute first and then whatever value it resolves to will be passed to the next link in the chain.

[![prom1-27](../assets/images/prom1-27-small.jpg)](../assets/images/prom1-27.jpg)

Note that `resolve` and `reject` have the same syntax. `resolve` leads to the next `.then` in the chain, while `reject` leads to the next `.catch`.

Incidentally, if there is a JavaScript error somewhere in the body of the promise, `.catch` will also automatically get called.

And by the way, there's a bit more to error handling and you'll be learning about it in the next lesson. In the meantime, it is time for you to write your first promise.

#### Resources
Sample code that shows the remainder of the code in the function block gets executed even after `resolve()` gets called.

```js
new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
}).then(function() {
  console.log('third');
});
```

You'll notice that `'first'`, `'second'` and `'third'` all get logged. Most notably, `'second'` gets logged despite the fact that it comes after `resolve()`.

### 1.8 Quiz: Write a Promise
For this quiz you'll be wrapping `setTimeout()` with a Promise. There won't be any error handling yet because I want to keep this first quiz simple.

[![prom1-28](../assets/images/prom1-28-small.jpg)](../assets/images/prom1-28.jpg)

I'm giving you a sample page to work with, and inside of it you'll find a function called `wait()`. This function should simply wait a set number of milliseconds before resolving.

That means that you'll need to call `resolve` when `setTimeout()` executes its callback.

While you're working on this function, I want you to `console.log(this)` inside the Promise. The reason is that I have a question for you about the scope of `this` inside Promises when you finish working on it.

I also want you to return the Promise from `wait`. The reason is that, after you finish your work, you will be able to uncomment these two lines to test your code.

[![prom1-29](../assets/images/prom1-29-small.jpg)](../assets/images/prom1-29.jpg)

If there are no errors, and the text changes, you'll know you've done it right.

And like I said, when you're done, I have a question for you:

- What is the scope of this inside the Promise?

#### Resources
##### Instructions

1. Download `setTimeout-start.zip` from the Supporting Materials Section.
2. Wrap `setTimeout` in a Promise inside the `wait()` function. `resolve()` in setTimeout's callback.
3. `console.log(this)` inside the Promise and observe the results.
4. Make sure `wait()` returns the Promise too!

##### Supporting Materials

- [setTimeout-start.zip](https://www.udacity.com/api/nodes/6078481442/supplemental_media/settimeout-startzip/download)
- [setTimeout-solution.zip](https://www.udacity.com/api/nodes/6078481443/supplemental_media/settimeout-solutionzip/download)

#### Solution
So here's the solution. To start off I'm creating a Promise by using `new Promise()`.

[![prom1-30](../assets/images/prom1-30-small.jpg)](../assets/images/prom1-30.jpg)

I'm going to pass a function into the Promise with the parameter `resolve`. There is no `reject` in this case because I'm never going to need to reject so I just don't include it.

Inside the Promise I'm logging `this` so I can check out its scope later.

You'll see that in the callback function to the `setTimeout()`, I'm calling `resolve()` to resolve the Promise.

In this case the Promise will resolve after some number of milliseconds that's getting passed into `wait()`.

Also notice that I am returning the Promise and you'll see why in a second.

Then I've un-commented these two lines which say that after 2000 milliseconds the `finish` function should get called.

[![prom1-31](../assets/images/prom1-31-small.jpg)](../assets/images/prom1-31.jpg)

All right, let's see how this looks. I will go ahead and refresh the page.

You see that two seconds later it is complete.

[![prom1-32](../assets/images/prom1-32-small.jpg)](../assets/images/prom1-32.jpg)

It looks like `this` logged out the `window`, or the `global` object.

> **Note:** the scope of `this`, could change depending on the context.
>
> For instance, arrow functions with ES2015 take `this` from the enclosing execution context. Whereas in ES5, every new function defined its own `this` value.
>
> See [MDN article on Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for a complete explanation.

So the correct answer is the 'global object'.

#### ES6 Solution
Here is the same code written using ES6 syntax.

```js
function wait(ms) {
  return new Promise(resolve => {
    console.log(this);
    window.setTimeout( () => {
      resolve();
    }, ms);
  });
};

var milliseconds = 2000;
wait(milliseconds).then(finish);

// function to test with
function finish() {
  var completion = document.querySelector('.completion');
  completion.innerHTML = "Complete after " + milliseconds + "ms.";
};
```

This can be further shortened to:

```js
function wait(ms) {
  return new Promise(resolve => {
    console.log(this);
    window.setTimeout( resolve, ms);
  });
};

var milliseconds = 2000;
wait(milliseconds).then(finish);

// function to test with
function finish() {
  var completion = document.querySelector('.completion');
  completion.innerHTML = "Complete after " + milliseconds + "ms.";
};
```

### 1.9 Quiz: Wrap readyState
Okay, that first quiz was a little bit on the simple side. This one's going to be more useful.

You'll be replicating jQuery's `.ready()` feature by wrapping a check for `document.readyState` in a Promise.

#### jQuery Sidenote
While we won't be using jQuery for this exercise, I did want to note the new recommended syntax for calling [jQuery's `.ready()`](https://api.jquery.com/ready/) method.

**Note:** The following syntaxes are all equivalent ways of attaching a function to run when the DOM is ready.
- `$( handler )`
- `$( document ).ready( handler )`
- `$( 'document' ).ready( handler )`
- `$( 'img' ).ready( handler )`
- `$().ready( handler )`

As of jQuery 3.0, only the first syntax is recommended.

##### Depricated (as of jQuery 3.0)

```js
$(document).ready(function() {
  // Handler for the .ready called  
});
```

##### Recommended (as of jQuery 3.0)
```js
// es5
$(function() {
  // Handler for .ready() called
});

// es6
$(() => {
  // Handler for .ready() called
});
```

#### Thening
You are now in the thening stage of the course.

[![prom1-33](../assets/images/prom1-33-small.jpg)](../assets/images/prom1-33.jpg)

I want you to use `.then` to perform an action after a promised result.

`document.readyState` has three possible states: loading, interactive, and complete.

[![prom1-34](../assets/images/prom1-34-small.jpg)](../assets/images/prom1-34.jpg)

1. **loading** - the document is still loading.
2. **interactive** - the document has loaded and been parsed but sub-resources like images and style sheets have yet to load. This is equivalent to the `DOMContentLoaded` event.
3. **complete** - all the sub-resources including images and style sheets have loaded.

Every time the document's `readyState` changes, a `readystatechange` event fires.

[![prom1-35](../assets/images/prom1-35-small.jpg)](../assets/images/prom1-35.jpg)

Creating a promise to run on **interactive** is really useful if you want to run some code as soon as all of the initial DOM elements have been loaded.

For this quiz I'm giving you an event handler for `readystatechange`.

[![prom1-36](../assets/images/prom1-36-small.jpg)](../assets/images/prom1-36.jpg)

I want you to wrap it in a promise so that it resolves when the DOM is '**interactive**'. Or, in other words, I want it to resolve when the `readyState` is no longer '**loading**'.

Like the last quiz, you don't need to worry about error handling because if the DOM is never ready then the page won't display anyway.

Make sure you test, too. Do so by using `.then` to chain the method `wrapperResolved` when the document is ready.

[![prom1-37](../assets/images/prom1-37-small.jpg)](../assets/images/prom1-37.jpg)

Make sure you check out the Instructor Notes forhelp getting started, and good luck.

#### Resources

- [document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState) on MDN

##### Instructions

1. Download `readyState-start.zip` in the downloadables section.
2. Set network throttling so that the page isn't ready instantly. (Also, it's generally a good practice to have some throttling when testing sites. It'll help you see your site's performance from your users' perspectives.)
3. Wrap an event listener for `readystatechange` in a Promise.
4. If `document.readyState` is not `'loading'`, `resolve()`.
5. Test by chaining wrapperResolved(). If all goes well, you should see "Resolved" on the page!

##### Supporting Materials
- [readyState-start.zip](https://www.udacity.com/api/nodes/6105298604/supplemental_media/readystate-startzip/download)
- [readyState-solution.zip](https://www.udacity.com/api/nodes/6027593911/supplemental_media/readystate-solutionzip/download)

#### Solution
To start off, I need to give credit to Jake Archibald, who came up with the idea for this quiz, and who also wrote this code.

[![prom1-38](../assets/images/prom1-38-small.jpg)](../assets/images/prom1-38.jpg)

There are two parts to the `ready()` method.

1. It checks the `readyState` when the `readystatechange` event fires
2. And it also checks the `readyState` immediately.

By checking immediately, the `ready()` method will still work if `readyState` becomes '**interactive**' before this promise is created, so that's pretty useful.

And if the `readyState` is still loading when the promise is created, it'll call `checkState` every time the `readystatechange` event fires.

Once the `readyState` is no longer '**loading**', it resolves.

So here's how I test it. I simply call `ready()`, and then chain, `.then(wrapperResolved)` to the end.

Here's the completed code:

```js
function ready() {
  return new Promise(resolve => {
    function checkState() {
      if(document.readyState !== 'loading') {
        resolve();
      }
    }
    document.addEventListener('readystatechange', checkState);
    checkState();
  });
};

ready().then(wrapperResolved);

// function to test with
function wrapperResolved() {
  var completion = document.querySelector('.completion');
  completion.innerHTML = "Resolved!";
};
```

Time to see how it looks. To test with I'm using 3G so that the image takes a little bit to load.

Remember the text should say "Resolved!" before the image shows up.

[![prom1-39](../assets/images/prom1-39-small.jpg)](../assets/images/prom1-39.jpg)

Now, it already say resolved but let see what happens when the page get refreshed. You can see that its resolved immediately before the image even finishes loading, that's pretty cool.

Okay. Now it's time to try some error handling.