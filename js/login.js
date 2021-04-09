var url = "user_page.html"
var user_id;

var login = function(){
    var login = $('#loginInput').val();
    var password = $('#passwordInput').val();

    $.ajax({
        url: 'http://192.168.1.226:8080/herox/api/login?login=' + login + '&password=' + password,
        async: true,
        dataType: 'json',
        success: function (dataResponse) {
			user_id = dataResponse; 
            location.replace(url + "?id=" + dataResponse);
        },
        error: 
        function(response, status) {
            alert("Error: " + response);
        }
    });

}

$('#submit_btn').click(function() {
	login();
});

