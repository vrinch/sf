   ;(function($) {
    "use strict";
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                name2: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 11
                },
                subject: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "your name must consist of at least 2 characters",
                    minlength: "your name must consist of at least 2 characters"
                },
                name2: {
                    required: "your name must consist of at least 2 characters",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                phone: {
                    required: "Please input your number",
                    minlength: "your input must contain 11 numbers",
                },
                subject: {
                    required: "please indicate a subject"
                },
                message: {
                    required: "your message must consist of at least 20 characters",
                    minlength: "your message must consist of at least 20 characters"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })

})(jQuery)
