/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);

function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
}

function calculateTimeRemaining() {
    // Get the current date and time
    const currentDate = new Date();

    // Specify the target date and time
    const targetDate = new Date("2023-10-08T13:30:00");

    // Calculate the time difference in milliseconds
    const timeDifference = targetDate - currentDate;

    // Calculate weeks, days, hours, minutes, and seconds remaining
    const weeksRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    const daysRemaining = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 7);
    const hoursRemaining = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesRemaining = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsRemaining = Math.floor((timeDifference / 1000) % 60);

    // Create a human-readable string
    let remainingTime = "";
    if (weeksRemaining > 0) {
        remainingTime += `${weeksRemaining} Week${weeksRemaining > 1 ? 's' : ''}, `;
    }
    if (daysRemaining > 0) {
        remainingTime += `${daysRemaining} Day${daysRemaining > 1 ? 's' : ''}, `;
    }
    remainingTime += `${hoursRemaining} Hour${hoursRemaining > 1 ? 's' : ''}, `;
    remainingTime += `${minutesRemaining} Minute${minutesRemaining > 1 ? 's' : ''}, `;
    remainingTime += `${secondsRemaining} Second${secondsRemaining > 1 ? 's' : ''}`;

    // Display the results on the HTML page
    const timeRemainingDisplay = document.getElementById("time-remaining");
    timeRemainingDisplay.innerHTML = remainingTime;
}

// Calculate and display the time remaining
calculateTimeRemaining();




