$(document).ready(function(e) {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            alert("Thank you!");
        });
    });
});