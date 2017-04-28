  /* Implement ajax call to rest Service */

$(document).ready(function(){
	loadUsers();
	$("table").on("click", "button.delete", function(evt) {
		deleteUser2(evt.target);
	});
});

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
				loadUsers();
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

function deleteUser2(element){
	var userid = $(element).data("userid")
	console.log(userid);
	deleteUserById(userid);
	return false;
}

function deleteUser(){
	event.preventDefault();
	
	var deleteId = $("#deleteid").val();

	deleteUserById(deleteId);
}
	
function deleteUserById(deleteId) {
	var dto =  { id: deleteId };
	var json = JSON.stringify(dto);
	
	$.ajax({
		method: "DELETE",
		url: "rest2/users",
		data: json,
		contentType: "application/json",
		success: function(response) { 
			if (response === "true") {
				console.log("Success deleting user");
				loadUsers();
			} else {
				console.log("User does not exist");
			}
		},
		error: function() {
			console.log("Error deleting user");
		}
	});
	

}

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
				'<td><button data-userid="' + user.id + '" onclick="deleteUser2(this);">Slet bruger</button></td>' +
				'<td><button data-userid="' + user.id + '" class="delete">Slet bruger igen</button></td>' +
	'</tr>';
}

//generic function for making a tablerow - note that keys must be in correct order
//function generateHTML(json){
//	var html = '<tr>'
//		$.each(json, function(i, elt) {
//			html+= '<td>' + elt + '</td>';
//		});
//	return html += '</tr>';
//}