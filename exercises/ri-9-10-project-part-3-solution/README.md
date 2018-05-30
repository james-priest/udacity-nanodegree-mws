# Responsive Images: final version #

This version uses the picture element for art direction: different image crops are loaded, depending on viewport size.

The images still use `max-width: 100%` – which means 'expand the image display size to fit the container, but no larger than the natural width of the image'. What defines the size of the body images? You can find out with the Dev Tools.

## To do ##

* Getting text size right is hard. Is the body text too big or small on some devices and window sizes? Are the headings the right size relative to the body text?
* In GPRS emulation mode, this page still takes nearly a minute to load. Images load randomly – and the image captions load first and don't make sense without the images. How might image loading be accomplished more efficiently? Take a look at the [Resource Priorities](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/ResourcePriorities/Overview.html#attr-lazyload) editor's draft. What about JavaScript alternatives, such as the jQuery [Lazy Load Plugin](http://www.appelsiini.net/projects/lazyload)? Any potential problems?
* The markup is verbose! We've gone from around 7,000 characters to over 14,000. That's twice the download size – just to start displaying text. How could we improve this?
* Check the page with [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fudacity.github.io%2Fresponsive-images%2Fproject%2Ffinal%2F&tab=mobile): the images are still unoptimized.

Check the page with the Chrome Dev Tools:

* Open the tools, open the Network tab, reload the page and look at the number of requests, total transfer size and time to load.
* Change to device emulation mode by clicking the phone icon in the Dev Tools (at the top left next to the magnifying glass icon). Try the various throttling options to emulate a GPRS mobile phone cell connection – now look at the Network tab. Total page weight is now less than 300KB, and page load is less than 1.5s on DSL – a lot better than the very first version, which was over 3MB in size and took several minutes to load on DSL.

The page takes several minutes to complete loading. (Remember that studies by Amazon, Google and others show an increased drop off in revenue with delays of less than 0.1 seconds!) Even with a good DSL connection, load time is still over 10 seconds.
* Try out emulation on different devices, portrait and landscape (click the icon next to the dimensions). What problems do you notice with each image? Which ones look worse?

Check the page from Page Speed Insights – lots more problems!
