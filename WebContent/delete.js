

	
function deleteUser(){
	event.preventDefault();
	
	var deleteId = $("#deleteid").val();
	console.log(deleteId);
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
				//loadUsers();
			} else {
				console.log("User does not exist");
			}
		},
		error: function() {
			console.log("Error deleting user");
		}
	});
	

}

