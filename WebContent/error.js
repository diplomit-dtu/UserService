

function fail(){
	event.preventDefault(); // forhindre at siden sendes til server
	var userJson = $("#userform").serializeJSON();
	console.log(userJson);
	$.ajax({
		method: "put",  
		url: "rest2/errors?x=0",
		contentType: "application/json",
		success: function(response) { 
			console.log("Success");
			console.log(response.name);
		},
		error: function(jqXHR, text, error) {
			console.log(error);
			console.log(text);
			console.log(jqXHR.responseText);
			console.log(jqXHR);
			console.error("Error12");
			console.error("Status: " + jqXHR.status);
			console.error("Text: " + text);
			console.error("Error: " + error);
		}
	});
	console.log(userJson);
}
//}