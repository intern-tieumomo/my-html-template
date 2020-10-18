$(document).ready(function(e) {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        if (fname == "" || lname == "") {
            swal('Pylate', 'Name is required!', 'warning');
        } else if (email == ""){
            swal('Pylate', 'Email is required!', 'warning');
        } else if (subject == ""){
            swal('Pylate', 'Subject is required!', 'warning');
        } else if (message == ""){
            swal('Pylate', 'Message is required!', 'warning');
        } else {
            $.ajax({
                url: "",
                type: "POST",
                data: $(this).serialize(),
                beforeSend: function() {
                    $('#submit').val('Sending ...');
                },
                success: function() {
                    $('#submit').val('Send Message');
                    swal('Pylate', 'We received your contact!', 'success');
                    $('#fname').val("");
                    $('#lname').val("");
                    $('#email').val("");
                    $('#subject').val("");
                    $('#message').val("");
                }
            });
        }
    });
});