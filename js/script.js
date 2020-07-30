(function ($) {
	"use strict";

	$(".portfolio-single-slider").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".clients-logo").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".testimonial-wrap").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".portfolio-gallery").each(function () {
		$(this)
			.find(".popup-gallery")
			.magnificPopup({
				type: "image",
				gallery: {
					enabled: true
				}
			});
	});

	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
		};
		map = new google.maps.Map(
			document.getElementById("map-canvas"),
			mapOptions
		);
	}

	var google_map_canvas = $("#map-canvas");

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, "load", initialize);
	}

	// Counter

	$(".counter-stat").counterUp({
		delay: 10,
		time: 1000
	});

	(function ($) {
		$.fn.scrollingTo = function (opts) {
			var defaults = {
				animationTime: 1000,
				easing: "",
				callbackBeforeTransition: function () {},
				callbackAfterTransition: function () {}
			};

			var config = $.extend({}, defaults, opts);

			$(this).click(function (e) {
				var eventVal = e;
				e.preventDefault();

				var $section = $(document).find($(this).data("section"));
				if ($section.length < 1) {
					return false;
				}

				if ($("html, body").is(":animated")) {
					$("html, body").stop(true, true);
				}

				var scrollPos = $section.offset().top;

				if ($(window).scrollTop() == scrollPos) {
					return false;
				}

				config.callbackBeforeTransition(eventVal, $section);

				$("html, body").animate(
					{
						scrollTop: scrollPos + "px"
					},
					config.animationTime,
					config.easing,
					function () {
						config.callbackAfterTransition(eventVal, $section);
					}
				);
			});
		};

		jQuery(document).ready(function () {
			"use strict";
			new WOW().init();

			(function () {
				jQuery(".smooth-scroll").scrollingTo();
			})();
		});

		$(document).ready(function () {
			$(window).scroll(function () {
				if ($(window).scrollTop() > 50) {
					$(".navbar-brand a").css("color", "#fff");
					$("#top-bar").removeClass("animated-header");
				} else {
					$(".navbar-brand a").css("color", "inherit");
					$("#top-bar").addClass("animated-header");
				}
			});
		});
	})(jQuery);
})(jQuery);
