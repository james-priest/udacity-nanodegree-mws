/*
Write your code in the attachEventListeners() function defintion, which starts on line 89.
 */

(function() {
	/*
	The actual grey box your finger touches.
	 */
	var toggle = document.querySelector('#toggle');
	/*
	The line that the toggle slides over.
	 */
	var line = document.querySelector('#line');

	/**
	 * Keeps track of touches and determines where the toggle should be on the slider.
	 * @param {DOM node} toggle - The actual toggle that will be moving.
	 * @param {DOM node} line - The actual line that the toggle slides over.
	 */
	function ToggleTracker (toggle, line) {
		var toggleRect = toggle.getBoundingClientRect(),
				lineRect = line.getBoundingClientRect();
		
		this._max = lineRect.width - toggleRect.width;
		this._half = this._max / 2;
		
		this._touchOffset = 0;
	}

	ToggleTracker.prototype = {
		_touches: [],
		/**
		 * Call this to register a movement.
		 * @param {Number} posX - The current x-position of the finger/mouse.
		 */
		addMovement: function (posX) {
			this._touches[0] = this._touches[1] || posX;
			this._touches[1] = posX;
		},
		/*
		Call this to get the toggle's distance from the origin for
		the CSS property: transform: translateX()
		 */
		getTranslateX: function () {		
			/*
			How far the finger actually moved
			 */
			var dx = this._touches[1] - this._touches[0];
			
			/*
			transform: translateX() works by translating from a starting point. The idea is to
			sum every dx to find the current distance from the origin.
			 */
			this._touchOffset = this._touchOffset + dx;

			/*
			I don't want to overwrite _touchOffset as it needs to stay constant between touches.
			 */
			var reportedValue = this._touchOffset;

			/*
			Make sure the toggle doesn't slide off the slider!
			 */
			if (reportedValue < 0) {
				reportedValue = 0;
			} else if (reportedValue > this._max) {
				reportedValue = this._max;
			}

			return reportedValue;
		}
	};

	/*
	You could create multiple ToggleTrackers for multiple toggles.
	 */
	var toggleTracker = new ToggleTracker(toggle, line);
	
	/*
	Meant to be called by requestAnimationFrame for silky smooth 60fps performance.
	#perfmatters - https://www.udacity.com/course/browser-rendering-optimization--ud860
	 */
	function slide() {
		var translateX = toggleTracker.getTranslateX();
		toggle.style.webkitTransform = "translateX(" + translateX + "px)";
		toggle.style.transform = "translateX(" + translateX + "px)";
	}

	function attachEventListeners() {
		/*
		The idea is:
			1) On start, set flag that toggle has started sliding (see the DOMContentLoaded event
			handler). Attach the event to the toggle itself	and add the first movement.
			2) On move, if sliding has been activated, then register a new movement and animate the move.
			Movement doesn't need to be limited to the toggle as it's easy for a finger/mouse to slip off.
			3) On end, set flag that the toggle has stopped sliding. Once again, it doesn't need to be 
			limited to the toggle as the finger/mouse can come up anywhere in the window.
		 */
		
  	// Flag to indicate whether the toggle is in the process of sliding.
		var sliding = false;
		
		toggle.addEventListener('touchstart', function (event) {
			event.preventDefault();
			sliding = true;
			toggleTracker.addMovement(event.touches[0].pageX);
		});

		window.addEventListener('touchmove', function (event) {
			// event.preventDefault();	// no longer needed
			if (sliding) {
				toggleTracker.addMovement(event.touches[0].pageX);
				this.requestAnimationFrame(slide);
			}
		});

		window.addEventListener('touchend', function (event) {
			event.preventDefault();
			sliding = false;
		});

		toggle.addEventListener('mousedown', function (event) {
			sliding = true;
			toggleTracker.addMovement(event.clientX);
		});

		window.addEventListener('mousemove', function (event) {
			if (sliding) {
				toggleTracker.addMovement(event.clientX);
				this.requestAnimationFrame(slide);
			}
		});

		window.addEventListener('mouseup', function (event) {
			sliding = false;
		});
	}

	/*
	Attaches all the event listeners when the page's content is ready.
	 */
	document.addEventListener("DOMContentLoaded", function(event) {
  	/*
		Flag to indicate whether the toggle is in the process of sliding.
		 */
		// var sliding = false;
    attachEventListeners();
  });
})();