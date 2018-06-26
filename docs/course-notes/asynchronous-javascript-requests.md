---
title: Asynchronous JavaScript Requests
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD024 MD032 -->
<!-- # Mobile Web Specialist Nanodegree -->
# Asynchronous JavaScript Requests

[<-- back to Mobile Web Specialist Nanodegree homepage](../index.html)

---

### Supporting Links
#### Sample Code
- [Web Accessibility GitHub repo](https://github.com/udacity/ud891) - Udacity's GitHub repo for this course

## Lesson 1. Ajax with XHR
### 1.1 Course Intro
Welcome to this course on Ajax.

The main concept of Ajax is simple. You make a request for some data and then without pausing everything to wait for the requests to return, you just move on and do something else.

[![ajax1-1](../assets/images/ajax1-1-small.jpg)](../assets/images/ajax1-1.jpg)

Then once the request finally does get returned, you deal with it. Really that's Ajax in a nutshell.

Now Ajax used to be an acronym for asynchronous JavaScript and XML and you'll still kind of see it that way but it's a bit of a misnomer now. Instead, Ajax is the concept of asynchronously requesting data whether that's an XML file a JavaScript file or JSON from a REST API.

It really doesn't matter what the data is. You just request the data asynchronously and then deal with it when it comes back.

In this course you'll learn to make Ajax requests using JavaScript. First, we'll look at doing this with the tried and true xhr object. Then we'll look at how jQuery makes Ajax requests in lesson two. Finally in lesson three we'll check out the new and massively improved way of making async
requests using the fetch API.

You're gonna love it.

So my mom's birthday is coming up soon and I need to make a cake for her. So, while I go to the store to get the ingredients, some of my friends are going to help demo how Ajax communication works when interacting with a server.

### 1.2 Client Server Demo
Let's start with what a request is. It's actually pretty useful to imagine the internet as a bunch of people who are just simply sending messages back and forth.

[![ajax1-2](../assets/images/ajax1-2-small.jpg)](../assets/images/ajax1-2.jpg)

For this example,

1. I'll be the client, which means that I'm actually a browser like Chrome or Firefox.
2. Jessica represents the internet. She is the middleman and will be passing information back and forth.
3. Ben here is the server, which means that he's computer dedicated to providing content to browsers like me.

If I want something from Ben, I'll send a GET Request to him. A **GET Request** is a message that tells him who I am and what I want.

So, got my message, Jessica takes it and passes it to Ben. Ben, the server, looks at my message and then sends back what I requested. This is called a **Response**. I can open the response and then do something with it.

In order for a website to open, it performs many requests for data, like Ben and I are doing right now. Most of the time, the response is critical for the page to load. For instance, I must have Ben's HTML to load the page and the CSS to lay it out.

When your browser makes a request synchronously, or without AJAX, it has to wait for responses before proceeding with the load.

**AJAX is special because it allows these types of requests asynchronously, which means that they can happen in the background without blocking the rest of the page load.**

Let's take this analogy just a little bit further. Let's imagine I send off a get request to Ben, but I've got some plans in mind for what I want to do with it when the response gets back.

So, when I send off the request, I will take the instructions and set them aside for myself. And they'll patiently wait right here. And now, I'm free to go off and work on other tasks.

When Ben's response eventually gets back, I'll open up the response, take a look at my instructions, and then do something with them.

These instructions that I set aside are called a **callback**, in that I call them when I get a response back.

#### Vocabulary
- **GET Request:** An internet request for data. Sent from a client to a server.
- **Response:** A server's response to a request. Sent from a server to a client. A response to a GET request will usually include data that the client needs to load the page's content.

### 1.3 Ajax Definitions & Examples
[![ajax1-3](../assets/images/ajax1-3-small.jpg)](../assets/images/ajax1-3.jpg)

Ajax requests allow for content retrieval and display without reloading the webpage.

Asynchronous in  Ajax refers to the fact that the request doesn't block other events from happening. Instead the page keeps on doing its thing and then only acts on the data when it gets for his turn by the server.

Ajax requests occur in a number of different ways and with varying levels of difficulty. Some require an API key, others use OAuth, and some don't use any authentication at all.

And the data returned by different Ajax requests differs too.

[![ajax1-4](../assets/images/ajax1-4-small.jpg)](../assets/images/ajax1-4.jpg)

The X and Ajax stands for XML which used to be the dominant hierarchical data format but today JSON is much more popular. In fact, most Ajax requests nowadays are actually AJAJ requests - standing for asynchronous JavaScript and JSON requests, but it doesn't sound as nice so we still just call them Ajax.

Embedded within Ajax responses it's pretty common to see HTML which websites can use to fill in part of the page.

#### History lesson
JavaScript frameworks and Single Page Apps are the way to build today, but let's review where we've come from.

In the traditional server-rendered web application, the client computer makes a request for a web page. The server creates and returns a page to the client. Finally, the client loads the new page and displays the information. If they interact with the page, say to add or remove something by submitting a form, they start the cycle all over again. The client will make another request, the server returns a totally new page, the client loads and presents it to the user again.

Up until the mid 2000s, this was basically the only way internet communication occurred. Information would reside on the server, and a client would request that data and refresh the page and display it. This cycle would repeat for each and every new page request.

In the late 90s, the Microsoft Outlook team added the XMLHTTP component to Internet Explorer and built a web version of the Outlook mail client. This code was later picked up by other browsers as XMLHttpRequest. This allowed browsers to make HTTP requests from Javascript and update the current page in place without fetching an entire page from the server. Instead of the synchronous model of waiting for a whole page, the user interface could update asynchronously as the user kept working. Most of the data being exchanged used the XML format.

AJAX
In 2005, Jesse James Garrett coined the term AJAX to mean “Asynchronous Javascript and XML”. This is essentially the technique of using XMLHTTPRequest to fetch data and then modify the current page.

AJAX took the web world by storm, spreading far beyond Microsoft Outlook. State-of-the-art web applications like Flickr, GMail, and Google Maps rapidly adopted it. Instead of having to wait for data and have the entire page refresh, these new, near instantaneous applications were incredible.

Browser Inconsistencies
Hold up, though. Ajax wasn't all ponies and rainbows. There were several different, incompatible browser implementations and developers were forced to code for one browser or write complex code for them all. Eventually, JavaScript libraries like jQuery and YUI emerged to reconcile the differences.

AJAX apps were great, but difficult for individual developers to write; as browsers kept changing, and people demanded apps on more devices, the code then became more and more complex and confusing. This challenge led to the rise of standard Javascript frameworks and libraries. JavaScript libraries arose to hide the complex browser differences, JavaScript frameworks made developing complex, powerful applications manageable.

### 1.4. APIs
#### Getting Data
We've looked at the concepts of Ajax and that it's the technology we'll use to add data to our project asynchronously. But where is this data coming from? And how do we get access to it? How will our app know how to retrieve that data.

We'll be using an **API** to interact with various data sources.

#### What's an API?
The acronym "API" stands for:

- **A**pplication **P**rogramming **I**nterface

There's data out there that's just waiting to be used. Most of the data-rich applications you use get their data from 3rd party websites. They actually fetch this data using APIs. In the video below, Cameron will demo how Reddit uses APIs for added interactivity on its site.

#### Available APIs
There are tons of API's available on the web that readily serve up interesting information and they're usually free to use so long as you aren't making thousands of requests per hour.

For instance Google offers a ton of API's including Google Analytics, Google Maps, & Google Fonts. 

[![ajax1-5](../assets/images/ajax1-5-small.jpg)](../assets/images/ajax1-5.jpg)

Looking around the web it isn't hard to find examples of websites that use external API's to create interesting interactions for users.

Reddit and the Reddit Enhancement Suite Chrome Plugin interact with a few different APIs to make reddit feel more dynamic.

When a user clicks on a link that resolves to a YouTube video, reddit opens up an embedded YouTube player which interacts with the YouTube API.

[![ajax1-6](../assets/images/ajax1-6-small.jpg)](../assets/images/ajax1-6.jpg)

When a user opens up a link to a Twitter feed, the reddit enhancement sweet chrome plug-in fires off an ajax request for twitter data.

It then uses the Twitter API to open up the tweet right here inside the page.

[![ajax1-7](../assets/images/ajax1-7-small.jpg)](../assets/images/ajax1-7.jpg)

#### Resources
- [Google's APIs](https://developers.google.com/apis-explorer/) - All the Google services you can imagine.
- [Programmable Web's giant database of APIs](http://www.programmableweb.com/apis/directory) - This is definitely worth skimming for some inspiration.
- [Udacity API](https://www.udacity.com/public-api/v1/catalog) - It's available for anyone to use. We want to make it easy for developers to access and share our catalog of courses.

### 1.5 XHR Async Request
It's cake baking time! Now before you can make a cake you need all of the ingredients to build it. So, we have the cake mix, we have eggs, milk, and butter.

[![ajax1-8](../assets/images/ajax1-8-small.jpg)](../assets/images/ajax1-8.jpg)

So we have everything we need so I'll turn on the oven and then we can start making it.

> [Music plays while the cake batter is prepared.]
> 1. Cake mix is put into a bowl
> 2. Eggs added, milk added, butter added
> 3. Ingredients are mixed into a batter
> 4. Batter is poured into a pyrex container
> 5. Pyrex container is put into the oven

Done! Okay, so work with me here a bit...

I need the cake to be baked before i can add frosting. And I've requested the oven to take the cake batter and turn it into a cake. When it's done, the timer will beep letting me know that I can get the cake back.

But I don't need to sit here and wait around for the cake to bake. I could go do something else. I could even make the frosting right now.

An XHR object is provided by the JavaScript environment and is used to make ajax requests. It's like this initial prep stage of making the cake batter.

You have to manually do a lot of the steps to get the request set up and finally sent off. But then your code can continue on and do other things.

When the response does come back it's been prepped to handle the return data.

With this analogy in mind let's look at the XHR object in detail.

<!-- 
### 1.6 The XHR Object
Just like how the `document` boject is provided by the JavaScript engine, the JavaScript engine also provides a way for us to make asynchronous HTTP requests. We do that with an `XMLHttpRequest` object. We can create these objects with the provided `XMLHttpRequest` constructor function.

One of the best ways to learn is to get your hands dirty and try things out! So go to [Unsplash](https://unsplash.com/), open up the developer tools, and run the following on the console:

```js
const asyncRequestObject = new XMLHttpRequest();
```

Confusingly, the constructor function has "XML" in it, but it's not limited to only XML documents. 

Remember that the "AJAX" acronym used to stand for "Asynchronous JavaScript and XML". Since the main file format that was originally used for asynchronous data exchange were XML files, it's easy to see why the function is called `XMLHttpRequest`.

XMLHttpRequests (commonly abbreviated as XHR or xhr) can be used to request any file type (e.g. plain text files, HTML files, JSON files, image files, etc.) or data from an API.

**Note:** We'll be digging into the XMLHttpRequest object. We'll look at how to create it, what methods and properties need to be used, and how to actually send asynchronous requests. For even more info on using the XHR object to make async requests, check out these links:

- [MDN's XMLHttpRequest doc](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)
- [WHATWG XHR Spec](https://xhr.spec.whatwg.org/)
- [W3C XMLHttpRequest Spec](https://www.w3.org/TR/XMLHttpRequest/) -->
