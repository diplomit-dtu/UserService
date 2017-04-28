function loadUsers(){
	$("#usertablebody").html(""); //tømmer element
	$.ajax({
		method: "GET",
		url: "rest2/users",
		dataType: "JSON",
		success: function(response) { 
			$.each(response, function(i, user) {
				$("#usertablebody").append(generateUserHTML(user));
				
			});
		},
		error: function() {
			console.log("Error loading users");
		}
	});
}



