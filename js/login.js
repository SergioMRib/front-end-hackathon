$.ajax({
	url: "http://theurl.com/api/stuff", type: 'GET',
	dataType: 'json',
	success: function (dataResponse) {
	doTheSuccessStuff(); },
	error: function(response, status) { itWillNeverGetHere(status); noSeriouslyWeShouldPutSomethingHere();
	} });

	