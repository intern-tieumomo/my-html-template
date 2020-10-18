$(document).ready(function() {
    $('#login-form').on('submit', function(e) {
        e.preventDefault();

        var username = $('#username-input').val();
        var password = $('#password-input').val();

        if(username == "") {
            swal("Missing Input!", "Username is required!", "warning");
        } else if (password == "") {
            swal("Missing Input!", "Password is required!", "warning");
        } else {
            swal("Logged In", "You logged in with username: " + username + " and password: " + password, "success");
        }
    });
});