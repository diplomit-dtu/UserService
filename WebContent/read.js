function read1(){
	event.preventDefault();
	$("#usertablebody2").html(""); //tømmer element
	$.ajax({
		method: "GET",
		url: "rest2/users",
		dataType: "JSON",
		success: function(response) { 
			$.each(response, function(i, user) {
				console.log(user);
				$("#usertablebody2").append(generateUserHTML2(user));
				
			});
		},
		error: function() {
			console.log("Error loading users");
		}
		
	});
	return false;
}


function generateUserHTML2(user){

	return 	'<tr><td>' + user.id + '</td>' +
	'<td>' + user.name + '</td>' +
	'</tr>';



}  

