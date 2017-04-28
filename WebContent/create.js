

function createUser(){
	event.preventDefault(); // forhindre at siden sendes til server
	var userJson = $("#userform").serializeJSON();
	console.log(userJson);
	$.ajax({
		method: "POST",  
		url: "rest2/users",
		data: userJson,
		contentType: "application/json",
		success: function(response) { 
			if (response === "true") {
				console.log("Success creating user"); // F12 js consol i brauser 
			} else {
				console.log("User already exists");
			}
		},
		error: function() {
			console.log("Error creating user");
		}
	});
	console.log(userJson);
}
//}