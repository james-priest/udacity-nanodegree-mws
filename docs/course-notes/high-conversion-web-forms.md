---
title: High Conversion Web Forms
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD032 -->
<!-- # Mobile Web Specialist Nanodegree -->
# High Conversion Web Forms

[<-- back to Mobile Web Specialist Nanodegree homepage](../index.html)

### Links
#### Resources
- [Create Amazing Forms by Pete LePage](https://goo.gl/i0vY1M) - input types, datalist, labels, autocomplete attributes, autofill pitfalls, real-time validation
- [Web Forms the Right Way](https://www.slideshare.net/greenido/web-forms-the-right-way) - a deck slides detailing HTML5 Forms best practices.
- [Autocomplete example](http://greenido.github.io/Product-Site-101/form-cc-example-m3.html) - with multiple tabs and various autocomplete fields.

#### Samples
- [Responsive Mobile Ready Forms](https://codepen.io/james-priest/pen/PxbKdy) - Pen on CodePen

---

## 1. Efficient Inputs Pt 1
### 1.1 Course Intro
Hi, I'm Ido Green. I'm a Developer Advocate at Google. And I'm Cameron Pittman. I make front-end courses here at Udacity.

[![wf1-1](../assets/images/wf1-1-small.jpg)](../assets/images/wf1-1.jpg)

Cameron and I want to help you a bit with the forms, because almost any meaningful experience on the webs come with boxes that need to be filled.

It might be a registration form, a shopping cart or a sign in form. All of these need simple forms. And why? Well, it's because the simpler the form is, the more conversions you're going to see.

In fact, according to Chrome usage data, you can make forms 30% faster by just making them ready to autofill. We will dive into it in the second lesson. For now, just remember that with faster forms comes happier users and more conversion.

This course is all about best practices for designing and developing forms. We want you to build forms that work great for all your users, no matter their platform, mobile or desktop. However, mobile platforms are a bit more of a challenge due to the smaller screen size. So we are going to focus on that more in this course.

Also for this course, we expect that you're a web developer who understands the fundamentals of HTML, CSS, and JavaScript. We expect that you've been building sites with forms, and you're always trying to stay up to date with best practices

In the first two lessons, you'll be learning about inputs that make up forms. All the little button and toggles that clutter your user screens.

And in the third lesson, you'll take on forms as a whole and examine what you can do to convert more users. This is especially important for e-commerce sites, but it certainly applies to any kind of long form.

In the last lesson, you'll make forms reactive and touchable for mobile users.

### 1.2 Quiz: Fix this Form
If you want to get better at building forms, you need to start critiquing forms. Many forms that look pretty reasonable are, in reality, not that great.

With that in mind, I want you to try critiquing this form. You can find [a link to it here](http://udacity.github.io/course-web-forms/project/start/create.html).

[![wf1-2](../assets/images/wf1-2-small.jpg)](../assets/images/wf1-2.jpg)

This form is actually part of the final project for this course which is an event planner app.

You'll eventually have a chance to apply everything you've learned in this course, to turn this clunky app into a high conversion machine. And by the way, the version that you'll see in a few moments might look slightly different than this one. And that's simply because we might tweak it a bit between now and when you're actually taking the course.

Overall though, it should look pretty much the same. Anyway, play with his form for a moment and when you're done, I have a question for you.

How would you improve this form? Would you change the title? Would you consolidate inputs? And this means simply taking multiple inputs and turning them into one. Would you write better validation messages? Or would you add more questions? Check all that apply.

#### 1.2 Solution
I'll start at the top.

[![wf1-3](../assets/images/wf1-3-small.jpg)](../assets/images/wf1-3.jpg)

Change the title? Mm, no, I wouldn't do that. Right now the title is "Create an Event", and that seems pretty straightforward, so I'll leave it alone.

Next up, consolidate inputs, definitely. Look, right now you have to select the time, the day, the month, and the year separately. And These are all really part of the same question so, I think it make sense that they're the same input. Seems like an improvement to me.

Now, what about better validation messages, definitely. Right now you have to scroll down to the bottom to see a list of errors.

[![wf1-4](../assets/images/wf1-4-small.jpg)](../assets/images/wf1-4.jpg)

This could be a lot more helpful in a lot of different ways so that should definitely be improved.

Lastly, what about adding more questions? Well, you really want to minimize the number of questions you ask if you want to keep the form simple. So no, I don't think that adding more is going to improve this form.

Okay, not too bad.In the next video you'll see an interview with Luke Wroblewski who is a product director at Google. Luke is an expert on forms. You're going to here him talk about how he approaches forms as a whole. Let's watch.

### 1.3 Luke Interview Pt 1
Hi, I'm Luke Wroblewski. I'm a product director at Google, and the experience I have that's probably most relevant here is I wrote a book called Web Form Design, and in there I looked at all the little details and nuances that make forms work online.

[![wf1-5](../assets/images/wf1-5-small.jpg)](../assets/images/wf1-5.jpg)

I think what you just said about thinking purposefully about forms is the key. 

Don't just treat these things as one offs that you have to do. Don't just copy a pattern and assume that it works. Actually take the time to think what are you asking people and how are you asking them that? And if you put in a little bit of effort, you'll have a lot of impact and that's kind of the whole essence of form design.

### 1.4 Good Form Design
A picture is worth a thousand words, right? So I want to show you a few examples that will help you develop the right mindset for creating better forms.

[![wf1-6](../assets/images/wf1-6-small.jpg)](../assets/images/wf1-6.jpg)

On the right is an example that is good.

Notice how it is quick to finish. Notice the placeholders. The fonts are visible and big enough. Notice the progress bar.

On the left is an example that is not so good. Notice how it is hard to finish. Notice that you don't see any progress. The font is too small.

I hope you noticed the patterns that well-designed forms share. In the next video, Cam and I will summarize the principles of a well-designed forms.

### 1.5 Useful Form Principles
When building forms, you've got one main objective, getting more conversions. That's when a new visitor to your site sign up or make a purchase and nothing is more effective than making forms quick and easy to finish.

The less users have to type, the less that's in the way between them and converting. It's pretty simple. You know, in my mind the best example of a super fast form is Amazon's One Click Ordering. It's great because you're just done in milliseconds.

True, that's a fast form but it only works for some products and only if the users are already signed in. For all other situations, it pays to help out your users. Guide them with useful labels, prompts, validation, and progress indicators.

Build up their confidence and watch your conversions go up.

### 1.6 Form Fixing Strategies
While you are working to decrease the time it takes to complete the form, you've got a few options at your disposal to help out.

[![wf1-7](../assets/images/wf1-7-small.jpg)](../assets/images/wf1-7.jpg)

First off, you could use your user's existing data. For example, if the user is logged into your site, and you already know their postal code because they submitted it in a earlier form, it will be nice of you to pre-fill the postal code field with a known one like you could see here.

Another option is to access the geolocation in order to determine the postal code. This works even if the user isn't logged in.

This is great because with almost no effort ,you saved your users time and you're one field closer to completion. In the date example, here it's three fields closer.

Another easy option is to enable users to automatically fill fields by enabling autofill. You will dive deep into autofill attribute by enabling Auto Complete in the next lesson.

[![wf1-8](../assets/images/wf1-8-small.jpg)](../assets/images/wf1-8.jpg)

But before thinking about our attributes on your inputs, I want you to think about the input elements themselves. Just look how powerful autofill can be.

I'm just start typing here and when I'm choosing, it's automatically fill the form.

[![wf1-9](../assets/images/wf1-9-small.jpg)](../assets/images/wf1-9.jpg)

Here's a [link to the autocomplete example](http://greenido.github.io/Product-Site-101/form-cc-example-m3.html) used in screen capture above.

### 1.7 Death to Dropdowns
You know, I'm one of those people that likes to finish something as soon as I think of it. If I think about something like let's say picking out a flight. I'll just take out my phone and start picking dates. And I found that I pretty often encounter dropdown menus, usually for things like dates. This seems reasonable, right?

Okay, I want you to watch this counter that just popped up on your screen. It's going to count the number of taps it takes for me to search for a flight. Are you ready? Watch.

[![wf1-10](../assets/images/wf1-10-small.jpg)](../assets/images/wf1-10.jpg)

Did you catch that?

Three taps to select a month. Not a great start. Here, let me finish.

[![wf1-11](../assets/images/wf1-11-small.jpg)](../assets/images/wf1-11.jpg)

Did you see how many taps that took? It's ridiculous. Clearly, there must be a better input than a dropdown.

### 1.8 HTML5 Inputs
There are much better options than dropdowns.

[![wf1-12](../assets/images/wf1-12-small.jpg)](../assets/images/wf1-12.jpg)

Check out the following resources

- [Create Amazing Forms by Pete LePage](https://goo.gl/i0vY1M) - input types, datalist, labels, autocomplete attributes, autofill pitfalls, real-time validation
- [Web Forms the Right Way](https://www.slideshare.net/greenido/web-forms-the-right-way) - a deck slides detailing HTML5 Forms best practices.

After watching Cam having terrible time with dropdowns, you should be asking yourself, how do I pick the right ones? How do I decide what input to pick? These are great questions.

Luckily the HTML5 standard includes a number of input types tailored for every situation.

Consider these the tools or building blocks for your forms. This should look pretty familiar. Here is on the left is the Phone input and on the right is the Email and in the middle you could see the URL. 

[![wf1-13](../assets/images/wf1-13-small.jpg)](../assets/images/wf1-13.jpg)

And of course we have many more. Notice how each specialized input contains the buttons that the user needs. Nothing more, nothing less.

This is great because we don't have too much real estate on a mobile device and we want to enable our users the most convenient way to type the information they need.

In the next quizzes, Cam will challenge you to research on your own and pick the best input types for your forms.

### 1.9 Quiz: Pick an Input
This flight picker app was annoying. I was tapping way too much to pick flight dates. 

[![wf1-14](../assets/images/wf1-14-small.jpg)](../assets/images/wf1-14.jpg)

This site is obviously using the wrong kinds of inputs. There's gotta be a better way. So for this quiz, I want you to think about the types of inputs you're inflicting upon your users. So you don't make the same mistakes that I did when I built this.

Here are two HTML inputs.The first input is for date and the second one is for time.

[![wf1-15](../assets/images/wf1-15-small.jpg)](../assets/images/wf1-15.jpg)

What types of inputs make the most sense for these two inputs? Check out the link below to see a list of inputs on the Mozilla Developer Network.

- [Input types on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)

Do some research, and when you're done, type your answers into these boxes.

#### 1.9 Solution
On the Mozilla developer network and I have a list of inputs.

[![wf1-16](../assets/images/wf1-16-small.jpg)](../assets/images/wf1-16.jpg)

I see a few relevant inputs like `date` and `datetime-local`. `datetime-local` is really useful but includes times.

Given that there's a separate input for time in this quiz, I want to go with `date`.

So I'll scroll down, and there is time. Well, that's pretty straightforward. This is what the form looks like before you enter date and time.

[![wf1-17](../assets/images/wf1-17-small.jpg)](../assets/images/wf1-17.jpg)

You'll notice that these two are just defaulted to text inputs.

And then after you enter date and time for the types, you will see that now you have a nice date selector for dates, and a nice time selector for time.

[![wf1-18](../assets/images/wf1-18-small.jpg)](../assets/images/wf1-18.jpg)

That looks pretty good.

### 1.10 Quiz: Datalist
Okay, so not everything about drop downs is all bad. For instance, the ability to give users a predefined list of options actually can come in handy. It's just that forcing users to scroll through massive lists of options can be tiring. And it's not very flexible because they have to pick one of the options.

[![wf1-19](../assets/images/wf1-19-small.jpg)](../assets/images/wf1-19.jpg)

Incidentally, there is one kind of input that combines the helpfulness of a pre-defined list with the flexibility of a text input, and it's called the datalist.

Here's an example. 

[![wf1-20](../assets/images/wf1-20-small.jpg)](../assets/images/wf1-20.jpg)

With the data list, you still get a pre-defined list of options, but users also have the ability to type. And as users type, they will see options from the list get suggested. But this doesn't mean that users have to use one of the options. They can actually type in a different value.

This makes data lists a nice, flexible solution. The syntax is pretty simple. Rather than putting options in a select tag, put them in a data list tag.

Each option should have a value set to whatever value you want it to take, and you'll need to give the data list an `id`. The input should have a `list` attribute, and the `list` attribute should match the datalist `id`.

[![wf1-21](../assets/images/wf1-21-small.jpg)](../assets/images/wf1-21.jpg)

You can find out more about the data list on MDN

- [Datalists on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

For this quiz you're going to be building the data list you just saw. I'll be giving you a version of the demo with a dropdown, and you'll be turning it into this.

[![wf1-22](../assets/images/wf1-22-small.jpg)](../assets/images/wf1-22.jpg)

#### 1.10 Solution
Turn this dropdown into a datalist!

##### Select
Here's where the code starts. There's a select tag indicating that this is a drop down and there are a few options inside.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz - Datalists</title>
</head>
<body>
    <p>What kind of event are you hosting?</p>
    <select>
        <option>Party</option>
        <option>Meeting</option>
        <option>Conference Talk</option>
        <option>Sports Game</option>
    </select>
</body>
</html>
```

##### Datalist
And this is what it looks like as a datalist.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz - Datalists</title>
</head>
<body>
    <label for="event">What kind of event are you hosting?</label>
    <input id="event" name="event" list="event-items">
    <datalist id="event-items">
        <option value="Party">
        <option value="Meeting">
        <option value="Conference Talk">
        <option value="Sports Game">
    </datalist>
</body>
</html>
```

The differences are pretty minimal. The `select` tag turned into a `datalist` tag. I added a `list` attribute to the `input` with the same `id` as the `datalist`. And I changed all the option values from inert HTML text to values.

Next up, you're going to watch the next part of the interview with Luke. This time, he'll be talking about what makes a perfect form.

### 1.11 Luke Interview Pt 2
[![wf1-5](../assets/images/wf1-5-small.jpg)](../assets/images/wf1-5.jpg)

The perfect form is no form, right? Nobody wants to fill in forms. And I mentioned before, I wrote a book about web forms. The first two words in the book are "forms suck". Which is very true.

Nobody wants to go through that process of filling in a form. They want what's on the other side. They want that ride from Uber. They want the book from Amazon. They don't want to sit there retyping their name for the bizillonth time. And ultimately it's almost an insult to the person.

Technology is supposed to change the world, but the damn computer doesn't even remember what my name is? How many times must I type my name into the same freaking computer before it knows who I am?

Like I said, it's almost insulting to people to treat them that way. So my ultimate example of the best form is no form. And that's why I like these things that get you down to a single tap or something where you can just instinctively say, I want that and get what you want.

We are a long ways away from that, in any case, but there are a couple examples, which was very promising. And, usually, that's how things start. Or you'll see one or two examples that people say, oh, that's not achievable, but gradually more and more people get to that point and it becomes the new norm.

### 1.12 Lesson Outro
You know, there are other ways to predict what your users will want to type. For instance, if you already have your users relevant data, why not just prefill the form for them? It's easy enough.

Even if your users aren't logged in, you can still help them out. For example, you could guess their location using location services. See links below.

- [Ido's CodePen Geolocation Example](http://codepen.io/greenido/pen/qOEbGp)
- [HTMLRocks Geolocation Example](https://www.html5rocks.com/en/tutorials/geolocation/trip_meter/)

In the end, this is all in the pursuit of the most important principles to takeout from this lesson. Speed equals conversions.

This lesson got you thinking about fast, efficient inputs, but you are just getting started. In the next lesson, you'll dive into other time-saving tricks, like creating inputs that support autofill and validation.

## 2. Efficient Inputs Pt 2
### 2.1 Lesson Intro
In the last lesson, you starting building efficient form by picking input types. It's a good start, but you can do more to make inputs even simpler.

[![wf1-1](../assets/images/wf1-1-small.jpg)](../assets/images/wf1-1.jpg)

In this lesson, you'll be helping your users fill out inputs faster and with more confidence. This means adding useful labels and prompts, enabling auto-fill and validating their inputs

Let's get to it but first things first, labels.

### 2.2 Question
Pop quiz. What was the last website you visited? Maybe Twitter? Maybe you can't remember. You know, there's a pretty good chance that you are like me, and you didn't immediately recall. And that's okay, because everybody forgets things.

It's not a big deal, but as a developer you should do what you can to help people remember what they're doing while they're on your site. The good news is that we have the label element to indicate what this is.

### 2.3 The Label Element
Labels should be prominent and visible when a user is filling out their associated inputs. When writing HTML, use the `label` element as a container for your inputs. Associated inputs get nested inside labels.

You could also use the `for` attributes to link inputs and labels. Either way works fine, but I like to nest because it simplify my HTML and makes it more semantic.

[![wf2-1](../assets/images/wf2-1-small.jpg)](../assets/images/wf2-1.jpg)<br>
**Live demo:** [Basic form](../exercises/wf2-3/index.html)

As an important bonus, applying labels to our form elements helps to improve the touch target size. The user can touch either the label or the input in order to place the focus on the input element. 

You could see here that we're using the `for` attributes. Okay, enough of me talking. I want you to try one out in the next quiz.

### 2.4 Quiz: Make a Label
Labels aren't too tricky. And you may have noticed that in previous quizzes I was actually using labels. So, now it's your turn. In this quiz, you're going to be working with this page.

[![wf2-2](../assets/images/wf2-2-small.jpg)](../assets/images/wf2-2.jpg)

There are two inputs that need some labels. The first label will be for this check box which is asking users if they want to use their shipping address, for their billing address.

And then the second one is for this telephone number. For the billing address check box just use the `for` attribute, but don't nest the input inside the label.

And then for the telephone number input, nest the input inside the label but still use the `for` attribute.

Using it make sure that the screen readers connect the label with its associated input. One last thing.Eto and I, highly recommend that you test this input on an actual mobile device too.

#### 2.4 Solution

##### Before

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz - Labels</title>
</head>
<body>
    <form>
        <span>Same as billing address</span>
        <input type="checkbox">
        <br>
        <span>Telephone Number</span>
        <input type="tel">
    </form>
</body>
</html>
```

##### After

For the billing address input I just set the `for` attribute on the label to the same `id` that the input has. Easy enough, and then for the telephone number I nested the `input` inside the `label`.

I actually like doing it this way a little bit more, because nesting it makes it more obvious that the `input` belongs to the `label`.

I still used a `for` attribute though, so that my form would play nice with screen readers.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz - Labels</title>
</head>
<body>
    <form>
        <label for="use-billing">Same as billing address</label>
        <input id="use-billing" type="checkbox">
        <br>
        <label for="tel-number">Telephone Number
        <input id="tel-number" type="tel">
        </label>
    </form>
</body>
</html>
```

It doesn't look too different right now but you'll notice that when you click on the labels, that their associated inputs get put into focus. Very nice.

[![wf2-21](../assets/images/wf2-21-small.jpg)](../assets/images/wf2-21.jpg)<br>
**Live demo:** [Label form](../exercises/wf2-4/index.html)

Next stop, we'll be continuing our interview with Luke Wroblewski. Watch him as he describes how he likes to design inputs.

### 2.5 Luke Interview Pt 3
Customer wants to buy something, company wants to sell something, what's sitting in between them? A form.

[![wf1-5](../assets/images/wf1-5-small.jpg)](../assets/images/wf1-5.jpg)

If you think about registration, a company wants to grow their user base, someone wants to be part of that community, or product they have. And again what's between them is a form.

So in all these places where this connection happens between the organizations that make things on the internet, and the people that use those things, there's generally a form.

And those forms as you say consist of input fields. The biggest mistake that I think people make is treating those things from what I would call almost a back end perspective.

That is inside of a database, to simplify things, you have these name value pairs, right, name and then a field for what the name is. And you've got a whole bunch of these things and they constitute something like the record of a user, or a purchase.

And when it comes time to collect that information to fully fill in that database, what you do is you just spit out those name value pairs as input fields and labels. And ta-da, job done with a form.

So both of these things I learned almost the hard way, if you will, at eBay about how to think about them differently.

When I was at Ebay many years ago it was the 28th largest economy in the world. So lots and lots of people buying and selling things on there. And we found that when we made small changes to these forms we could really have a huge impact.

In fact when we redesigned the registration form process, we had to go back to Wall Street and restate earnings because that was how tremendous the impact was. And when you think about the ability for something like a form to impact something like the 28th largest economy in the entire planet, you really start to understand the importance of all the little details in the forms.

And that goes well beyond which name value pairs you include.

How you put the labels in, what kind of form control you use, what kind of feedback you give to people as they're filling in this information. How do you organize it? What do you do to message the before and after parts of the form?because it's a part of a broader flow.

And so the biggest mistake is really not considering that full envelope of form design, and really just regurgitating a database's fields onto a screen and putting a submit button on the bottom.

### 2.6 Label Size & Position
When you were playing with the label element, did you notice how the label appeared next to the input? This is not an accident. It makes it easier to see the label.

[![wf2-6](../assets/images/wf2-6-small.jpg)](../assets/images/wf2-6.jpg)<br>
**Live demo:** [Contact form](../exercises/wf/contact.html)

Please remember, portrait and landscape view have different form factors.

In landscape view ports, like this one, labels should be next to the input elements.

[![wf2-4](../assets/images/wf2-4-small.jpg)](../assets/images/wf2-4.jpg)

In portrait view ports, like this one, labels should be above the input elements.

[![wf2-5](../assets/images/wf2-5-small.jpg)](../assets/images/wf2-5.jpg)

Few things to keep in mind. If you are not careful, custom scroll handlers may scroll input elements to the top of the page hiding the label.

You should especially avoid placing labels below the input elements because you run the risk that they may be covered by the virtual keyboard, not good. 

For example, all the labels in the portrait view on mobile appear above the inputs because, as you can see, the virtual keyboard is coming up.

[![wf2-7](../assets/images/wf2-7-small.jpg)](../assets/images/wf2-7.jpg)

### 2.7 Placeholders
Along with labels, placeholders like this one are super useful for text or numeric inputs.

[![wf2-8](../assets/images/wf2-8-small.jpg)](../assets/images/wf2-8.jpg)<br>
**Live demo:** [Shipping form](../exercises/wf/shipping.html)

Use placeholders to give users a concrete idea of exactly what they should type. For example, an input on a city field show what is the expected value telling users they should use a full name of the city, like here.

But remember that placeholders disappear as soon as the user start typing in the element, which means they are not a replacement for labels. They should be used as an aid to help guide users.

### 2.8 Quiz: Placeholder
At Udacity we've used the slogan, "Learn. Think. Do". And there's no better way to learn than by doing, so for this next quiz you are going to do some placeholders.

You'll be given a little input that prompts users to type in the name of an event. And I want you to give it the placeholder event name. Make sure you test on your mobile devices.

```html
<!DOCTYPE html>
<!--
Add the placeholder attribute with the text "Event Name".
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz - Placeholder</title>
</head>
<body>
    <form action="#">
        <label for="event-name">
            <span>Enter the name of your event:</span>
            <input type="text" id="event-name">
        </label>
    </form>
</body>
</html>
```

#### 2.8 Solution
This one is pretty simple. All you have to do is add the placeholder attribute to the input and set it to some text, which in this case is "Event Name"

```html
<!DOCTYPE html>
<!--
Add the placeholder attribute with the text "Event Name".
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz - Placeholder</title>
</head>
<body>
    <form action="#">
        <label for="event-name">
            <span>Enter the name of your event:</span>
            <input type="text" id="event-name" placeholder="Event Name">
        </label>
    </form>
</body>
</html>
```

Notice that you can see "Event Name" within the input when there's no text. But when you start typing, it disappears.

[![wf2-11](../assets/images/wf2-11-small.jpg)](../assets/images/wf2-11.jpg)<br>
**Live demo:** [Placeholder](../exercises/wf2-8/index.html) text

### 2.9 Calendars
Let's talk about calendars.

Many forms need the concept of a date. It shows up everywhere - ordering plane tickets, movie tickets, setting a doctor appointment, and probably a million other examples.

You could turn dates into a three or four parts process with time, day of month, months, and a year. Or you could use a calendar widget.

I like calendar widgets because they are much simpler, and more straightforward.

[![wf2-9](../assets/images/wf2-9-small.jpg)](../assets/images/wf2-9.jpg)<br>
**Live demo:** [Date/Time Attributes Demo](https://codepen.io/james-priest/pen/mQOdJV?editors=1000) on CodePen

You've got a few options for displaying calendars. You could use the browser's implementation by setting the attribute `type="datetime-local"` on an input element. But, you might find that it doesn't match the visual theme of your app, that's fine.

You could always edit it's styles or simply roll on your own CSS, using web components or a JavaScript widget. See the Resources section below for some more info about styling or building calendars.

Other way, the most important thing, is to show your users a full calendar when they need to set a date .If not, users will never get away from your form to look up dates which only increase the odds that they will abandon the form all together.

Here is another example. When I wish to book a flight, I can see clearly what are the dates that this flight is going to take off and land.

[![wf2-10](../assets/images/wf2-10-small.jpg)](../assets/images/wf2-10.jpg)

Dates are common. Show your users calendars when they need them.

#### 2.9 Resources
Links to styling of form elements.

- [Styling HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms) - MDN article
- [Advanced CSS Form Styling](https://jonathan-harrell.com/advanced-css-form-styling/) - Article from 2017
- [List of Pseudo-Elements to Sytle Form Controls](https://www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/) - Article from 2013

### 2.10 Quiz: Calendars
Here's another opportunity for you to practice. This calendar is really doing things the hard way.Each part of the date is being typed in individually, as is the time.

[![wf2-12](../assets/images/wf2-12-small.jpg)](../assets/images/wf2-12.jpg)

So for this quiz, I want you to simplify this calendar. Consolidate all of these inputs into a single input that still let's users input all the same information.

#### 2.10 Solution
I started by going [straight to the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types). I wanted to check out the list of different input types.

As you might recall, there's an input that consolidate date and time called `datetime-local`.

Here's how it looks. You can click on this drop down arrow to get a nice visual calendar to pick out dates, and you've got a place to input times.

[![wf2-13](../assets/images/wf2-13-small.jpg)](../assets/images/wf2-13.jpg)
**Live demo:** [Calendar control](../exercises/wf2-10/index.html) with input type `datatime-local`.

### 2.11 Typos from Typing
Ugh, come on! These buttons are too small. So you know what, I'm not going to buy these shoes,I just can't deal with typing my address in one more time on this small screen.

It's hard to type on a small screen. So if it's hard to type the form doesn't get submitted and you lose the user.

This is particularly sad, if you're an online retailer and you just missed a sale.

This is where you could leverage to autocomplete attribute. It tells the browsers to automatically fill the user's saved information into a form.

### 2.12 Autocomplete
In modern browsers, there is a cool feature that you could use called autofill. Users appreciate when a website saves them time by automatically filling common fields like name, email, and more.

[![wf2-14](../assets/images/wf2-14-small.jpg)](../assets/images/wf2-14.jpg)<br>
**Live demo:** [Contact form](../exercises/wf/contact.html)

Plus autofill helps to reduce potential input errors like what we experienced before. Browsers use many heuristics to determine which field they could auto-populate based on a previously specified data by the user.

You, the developer, can give hints to the browser by providing both the `name` attribute and the `autocomplete` attribute on each input element.

For example, to give the browser a hint that it should auto complete the form with a user's name, email, and phone number. You should use these `autocomplete` attributes.

Let's have a look at the code.

```html
<label for="name">Name</label>
<input type="text" name="name" id="name" required autocomplete="name"
  placeholder="Full Name">

<label for="email">Email</label>
<input type="email" name="email" id="email" required autocomplete="email" 
  placeholder="name@example.com">

<label for="confirm-email">Confirm Email</label>
<input type="email" name="confirm-email" id="confirm-email" required 
  autocomplete="email" placeholder="name@example.com">

<label for="tel">Telephone</label>
<input type="tel" name="phone" id="phone" required autocomplete="tel"
  placeholder="+1-425-450-1212">
```

The name input has an autocomplete attribute value of `name`. The email input hav the autocomplete value of `email`. And the phone input element has the `tel`.

Let's see it in action. When I start typing the address, you could see that the browser is already remember what was typed here before.

[![wf2-15](../assets/images/wf2-15-small.jpg)](../assets/images/wf2-15.jpg)<br>
**Live demo:** [Contact form](../exercises/wf/contact.html)

And now when I click select the appropriate email the rest of the form gets filled in.

[![wf2-16](../assets/images/wf2-16-small.jpg)](../assets/images/wf2-16.jpg)<br>
**Live demo:** [Contact form](../exercises/wf/contact.html)

Awesome. Below is [a massive list of auto-complete attributes](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en). Take a look and see how you could automate life for your users and put a big smile on their faces.

#### 2.12 Resources
Here are some resources

- [Help users checkout faster with Autofill](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en) - Google Developer website

### 2.13 Quiz: Autocomplete
It's time to practice. Here is a very simple input for an email address.

[![wf2-17](../assets/images/wf2-17-small.jpg)](../assets/images/wf2-17.jpg)

Right now, this box that you'll be checking out in a moment is just a text input. So the browser has no way of knowing what kind of information is about to be typed in and if it doesn't know what's going to be typed in, it can't help you type it in.

So for this quiz, I want you to make this input auto fillable by adding an autocomplete attribute. When you do it right, you should start seeing some email addresses pop up here as you type.

- [Autocomplete attributes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)

```html
<!DOCTYPE html>

<!--
Make this email input auto-fillable by adding an `autocomplete` attribute.
-->

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Quiz - Autocomplete</title>
</head>
<body>
  <form action="#">
    <label for="email">
      <span>Email:</span>
      <input type="email" id="email" placeholder="example@udacity.com">
    </label>
  </form>
</body>
</html>
```

#### 2.13 Solution
I started by heading over to the Mozilla Developer Network, and then looking at the autocomplete attribute.

I chose the one called "email". Back inside my HTML, I went to the input element and added the `autocomplete` attribute. I set its value to "email".

```html
<!DOCTYPE html>

<!--
Make this email input auto-fillable by adding an `autocomplete` attribute.
-->

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Quiz - Autocomplete</title>
</head>
<body>
  <form action="#">
    <label for="email">
      <span>Email:</span>
      <input type="email" id="email" placeholder="example@udacity.com"
        autocomplete="email">
    </label>
  </form>
</body>
</html>
```

So this is how it looks. Now, when I type into this input, I can see suggestions from past email addresses I've used.Perfect.

[![wf2-18](../assets/images/wf2-18-small.jpg)](../assets/images/wf2-18.jpg)
**Live demo:** [Email autocomplete](../exercises/wf2-13/index.html)

### 2.14 Autofocus
Speaking of automation, it's worth mentioning the `autofocus` attribute.

Autofocus automatically puts the cursor on an input when the input is rendered,making it easy for users to quickly begin using the form.

[![wf2-19](../assets/images/wf2-19-small.jpg)](../assets/images/wf2-19.jpg)

Desktop browsers immediately move the focus to the input field. However, mobile browsers ignore the autofocus attribute, so that the keyboard doesn't randomly appear.

The Google home page, for example, as you could see here, uses the autofocus attribute on the search bar, because the vast majority of users just want to start typing the queries as soon as the page loads.

[![wf2-20](../assets/images/wf2-20-small.jpg)](../assets/images/wf2-20.jpg)

Use autofocus when you want to save your user's time. But be careful because it will steal keyboard focus and potentially prevent the backspace character from being used for navigation.

Also, it's recommended that you only autofocus inputs that are above the fold. Otherwise, the page will scroll down immediately upon rendering, which can be jarring.

### 2.15 Past Data to Fill Inputs
In many cases, we ask users to type out the same information, even when the website has their information.

For example, think about name, address, telephone number, email, credit card, etc. Wouldn't it be cool to offer a shortcut that saves time, typing, and money?

As you know, retailers often use past orders to suggest future inputs. Because once they've already collected and saved your address why ask for it again?

It makes life less frustrating for your users. It also a good idea to ask permission. For example Amazon asks which saved address to use.

But be careful. If your application fills in too much, users might get the wrong information. For example, shipping your package to the wrong address. 

Remember, reusing information will make your forms faster.

<!-- 
### 2.16 Validation
So far, we focused on helping users fill out forms faster by, well,not filling out anything.But now, I want you to think about your users confidence,with good validation features.With validation, you can ensure that users knowthat they are filling forms with the right information.More importantly,validation can ensure that the users fill out form correctly the first time.They won't waste time leaving an input and submitting a form only to findout a few seconds later that they forgot a digit in their zip code.With validation, you are giving your users a real time feedback andminimizing errors.I want to choose a new password, and like in any good website,I have a few rules that I need to enforce.Here, while i'm typing, you could see that I'm using lowercase, andnow I understand that I need an uppercase, as well, I need few numbers,and I just passed the minimum length of eight characters.I'm adding some punctuation, and only then, I'm enabling the next button.It's worth adding that HTML file validation or any front end validation,for that matter, is not a replacement for a service side validation.Your websites are obviously not safe,unless you validate on your back end too.The approach Cam and I are discussing is justa way to improve the user experience, and to put a big smile on the faces.In the next video, I'll show you how to use HTML5 attributes for validation. -->