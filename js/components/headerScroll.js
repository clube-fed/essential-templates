//header scroll
var cbpAnimatedHeader = (function () {
	var docElem = document.documentElement,
		header = document.querySelector('header'),
		didScroll = false,
		//changeHeaderOn = $j('.banner div[id^="photoPluginWrapper"] > div:not([style*="none;"])').outerHeight();
		//changeHeaderOn = 300;
		firstScroll = true;

	function init() {
		window.addEventListener('scroll', function (event) {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 250);
			}
		}, false);
	}

	function scrollPage() {
		var sy = scrollY();
		if ($j('body').find('.modulewrap').length !== 0) {
			changeHeaderOn = $j('header').outerHeight();
		} else if ($j('body').find('.private.home').length !== 0) {
			changeHeaderOn = $j('.quick-links').outerHeight();
		} else {
			changeHeaderOn = ($j('.banner').outerHeight() - 120);
		}
		//console.log(changeHeaderOn);
		if (sy >= changeHeaderOn) {
			$j('header').addClass('shrink');
			//$j('#scrollDown').attr('style', 'position: absolute; bottom: 50px; height: 10px !important');
			if (firstScroll == true) {
				$j('header').css('top', '-120px').animate({
					top: 0
				});
				firstScroll = false;
			}
		} else {
			$j('header').removeClass('shrink');
			$j('header').css('top', '0');
			firstScroll = true;
			//$j('#scrollDown').attr('style', 'position: absolute; bottom: 50px; height: 100px !important');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	//init(); // Un-comment for sticky nav

})();