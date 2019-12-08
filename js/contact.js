function send_mail() {
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
} */

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



}(jQuery));


(function ($) {
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