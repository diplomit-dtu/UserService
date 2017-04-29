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

//Convenience function for generating som html from an 
function generateUserHTML(user){
	var deleteId = user.id;

	console.log("user id "+deleteId);
	console.log("user id" + user.id);

	return 	'<tr><td>' + user.id + '</td>' +
				'<td>' + user.name + '</td>' +
	'</tr>';
}  

