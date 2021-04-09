var url = "user_page.html";
var mid = new URLSearchParams(window.location.search).get("mid");
var id = new URLSearchParams(window.location.search).get("id");
var hash = new URLSearchParams(window.location.search).get("hash");

var populate_crisis = function() {
	$.ajax({
        url: 'http://192.168.1.226:8080/herox/api/missions/' + mid,
        async: true,
        dataType: 'json',
        success: function (dataResponse) { 
			var mission = dataResponse;
			console.log(dataResponse);

			$("#title").html("<strong>" + mission.title + "</strong>");
            $("#compensation").html("Compensation: " + mission.compensation + "€");
            $("#description").html(mission.description);

            var checkboxesString = "";
            var spec = mission.neededPowers.split(",");

            for (i = 0; i < mission.neededSpecs.length; i ++) {
				checkboxesString += ('<div class="form-check"><input class="form-check-input" type="checkbox" value="unchecked"">'
                + '<label class="form-check-label" for="flexCheckDefault">' + spec[i] + '</label></div>')
			}

            $(checkboxesString).appendTo($("#checkboxes"));
		
        },
        error: 
        function(response, status) {
            alert("Error: " + response);
        }
    });
}

var claim_mission = function() {
    $.ajax({
        url: 'http://192.168.1.226:8080/herox/api/missions/' + id + '/claim/' + mid,
        type: "PUT",
        async: true,
        dataType: 'json',
        success: function () { 
			location.replace(url + "?id=" + id + "&hash=" + hash);
        },
        error: 
        function() {
            location.replace(url + "?id=" + id + "&hash=" + hash);
        }
    });

};

$("#claim").click(function() {
    claim_mission();
});

populate_crisis();