# Responsive Images: Project Part 1 #

## Your Goals: ##

* Make the images fit in their containers in the viewport.
* Restrain the width of the blog.
* Drop the page weight.

## How you know you're done ##

A code will appear in the Udacity Feedback. Paste the code in to the Udacity classroom to complete the quiz!

[More on the Udacity Front-End Grading Engine](https://github.com/udacity/frontend-grading-engine)

## Current Problems with the Page ##

* The text is readable, but the images overflow the viewport.
* Page weight is massive: the images have been saved as JPEGs at low quality, but they're still too big.
* The headings, body text and images are not styled, making the post hard to read and dull to look at.

## General Advice ##

Check the page with the Chrome Dev Tools:

* Open the tools, open the Network tab, reload the page and look at the number of requests, total transfer size and time to load.
* Change to device emulation mode by clicking the phone icon in the Dev Tools (at the top left next to the magnifying glass icon). Try the various throttling options to emulate a GPRS mobile phone cell connection -- now look at the Network tab. The page takes several minutes to complete loading. (Remember that studies by Amazon, Google and others show an increased drop off in revenue with delays of less than 0.1 seconds!) Even with a good DSL connection, load time is still over 10 seconds.
* Try out emulation on different devices, portrait and landscape (click the icon next to the dimensions). What problems do you notice with each image? Which ones look worse?

Check the page from Page Speed Insights -- lots more problems!
