;
(function($) {

  'use strict';


  $('.portfolio-single-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.clients-logo').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.testimonial-wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [{
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
      }, {
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

  $('.portfolio-gallery').each(function() {
    $(this).find('.popup-gallery').magnificPopup({
      type: 'image',
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
      // styles: style_array_here
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }

  var google_map_canvas = $('#map-canvas');

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  // Counter

  $('.counter-stat').counterUp({
    delay: 10,
    time: 1000
  });


  (function($) {
    $.fn.scrollingTo = function(opts) {
      var defaults = {
        animationTime: 1000,
        easing: '',
        callbackBeforeTransition: function() {},
        callbackAfterTransition: function() {}
      };

      var config = $.extend({}, defaults, opts);

      $(this).click(function(e) {
        var eventVal = e;
        e.preventDefault();

        var $section = $(document).find($(this).data('section'));
        if ($section.length < 1) {
          return false;
        };

        if ($('html, body').is(':animated')) {
          $('html, body').stop(true, true);
        };

        var scrollPos = $section.offset().top;

        if ($(window).scrollTop() == scrollPos) {
          return false;
        };

        config.callbackBeforeTransition(eventVal, $section);

        $('html, body').animate({
          'scrollTop': (scrollPos + 'px')
        }, config.animationTime, config.easing, function() {
          config.callbackAfterTransition(eventVal, $section);
        });
      });
    };


    jQuery(document).ready(function() {
      "use strict";
      new WOW().init();


      (function() {
        jQuery('.smooth-scroll').scrollingTo();
      }());

    });



    $(document).ready(function() {

      $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
          $(".navbar-brand a").css("color", "#fff");
          $("#top-bar").removeClass("animated-header");
        } else {
          $(".navbar-brand a").css("color", "inherit");
          $("#top-bar").addClass("animated-header");
        }
      });



    });



    /*
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      }); */

    /*(function($) {
        $.fn.scrollingTo = function(opts) {
          var defaults = {
            animationTime: 1000,
            easing: '',
            callbackBeforeTransition: function() {},
            callbackAfterTransition: function() {}
          };

          var config = $.extend({}, defaults, opts);

          $(this).click(function(e) {
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find($(this).data('section'));
            if ($section.length < 1) {
              return false;
            };

            if ($('html, body').is(':animated')) {
              $('html, body').stop(true, true);
            };

            var scrollPos = $section.offset().top;

            if ($(window).scrollTop() == scrollPos) {
              return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
              'scrollTop': (scrollPos + 'px')
            }, config.animationTime, config.easing, function() {
              config.callbackAfterTransition(eventVal, $section);
            });
          });
        };

        jQuery(document).ready(function() {
          "use strict";
          new WOW().init();


          (function() {
            jQuery('.smooth-scroll').scrollingTo();
          }());

        }); */
    /*

    $('#contact-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 4
        },
        email: {
          required: true,
          email: true
        },
        subject: {
          required: false,
        },
        message: {
          required: true,
        },
      },
      messages: {
        user_name: {
          required: "Please enter your name",
          minlength: "Your name must consist of at least 2 characters"
        },
        email: {
          required: "Please enter your email address",
        },
        message: {
          required: "Please enter your message",
          minlength: "Your message must consist of at least 2 characters"
        },
      },
      submitHandler: function send_mail() {
        window.location.href = 'mailto:goldinwebdesign@gmail.com?subject=Website%20Inquiry' +
          '&body=' + encodeURI(document.getElementById("message_field").value)
        return false
      }
      /* submitHandler: function(form) {
      		$(form).ajaxSubmit( {
      				type:"POST", data: $(form).serialize(), url:"sendmail.php", success: function() {
      						$('#contact-form #success').fadeIn();
      				}
      				, error: function() {
      						$('#contact-form #error').fadeIn();
      				}
      		}
      		);
      }



    }(jQuery)); */



    /*(function ($) {
        'use strict';

        var form = $('.contact__form'),
            message = $('.contact__msg'),
            form_data;

        // Success function
        function done_func(response) {
            message.fadeIn().removeClass('alert-danger').addClass('alert-success');
            message.text(response);
            setTimeout(function () {
                message.fadeOut();
            }, 2000);
            form.find('input:not([type="submit"]), textarea').val('');
        }

        // fail function
        function fail_func(data) {
            message.fadeIn().removeClass('alert-success').addClass('alert-success');
            message.text(data.responseText);
            setTimeout(function () {
                message.fadeOut();
            }, 2000);
        }

        form.submit(function (e) {
            e.preventDefault();
            form_data = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form_data
            })
            .done(done_func)
            .fail(fail_func);
        });

    })(jQuery); */

    //Smoothy scroll to top
    /*$back_to_top.on('click', function(event) {
      event.preventDefault();
      targetedScroll();
    }); */

    // example of smooth scroll to h2#anchor-name
    /*$('#about').on('click', function(event) {
      event.preventDefault();
      targetedScroll('about');
    });

    // bind smooth scroll to any anchor on the page
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      targetedScroll($(this).attr('href').substr(1));
    });

    // scrolling function
    function targetedScroll(id) {
      // scrollTop is either the top offset of the element whose id is passed, or 0
      var scrollTop = id ? $('#' + id).offset().top : 0;

      $('body,html').animate({
        scrollTop: scrollTop,
      }, scroll_top_duration);
    } */

  })(jQuery);
})(jQuery);