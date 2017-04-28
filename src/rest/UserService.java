package rest;

import javax.ws.rs.POST;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import java.util.ArrayList;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

// crud
// svarer til 
// post,get,put,delete

@Path("users")
public class UserService {

	private static ArrayList<User> allUsers = new ArrayList<User>() {
		private static final long serialVersionUID = -6607099362887584352L;
	};
	static {
		allUsers.add(new User("10", "Stig"));
		allUsers.add(new User("20", "Finn"));
	}
	
	// Svarer til read
	// wget -method GET "http://localhost:8080/UserService/rest2/users"
	// postman GET http://localhost:8080/UserService/rest2/users
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<User> getUsers() {
		return allUsers;
	}
	
	//Svarer til create
	//wget -method POST "http://localhost:8080/UserService/rest2/users" -Body '{"id":"40","name":"Ulrik"}' -ContentType "Application/Json"
	//Postman POST http://localhost:8080/UserService/rest2/users Body > {"id":"40","name":"Ulrik"} Headers(1) Key: ContentType > Value: Application/Json
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean addUser(User u) {
		User existingUser = findUser(u.getId());
		if (existingUser != null) 
			return false;
		allUsers.add(u);
		return true;	
	}

	//Svarer til opdater
    //wget -method PUT "http://localhost:8080/UserService/rest2/users" -Body '{"id":"40","name":"Ulrik h"}' -ContentType "Application/Json"
	//Postman PUT http://localhost:8080/UserService/rest2/users Body row > {"id":"40","name":"Ulrik"} Headers(1) Key: ContentType > Value: Application/Json
	@PUT
	public boolean editUser(User u) {
		User existingUser = findUser(u.getId());
		if (existingUser == null) return false;
		existingUser.setName(u.getName());
		return true;	
	}

	// ok1 svarer til Slet
	//wget -method DELETE "http://localhost:8080/UserService/rest2/users" -Body '{"id":"20"}' -ContentType "Application/Json"
	//wget -method DELETE "http://localhost:8080/UserService/rest2/users" -Body '{"id":"22"}' -ContentType "Application/Json"
	//Postman DELETE http://localhost:8080/UserService/rest2/users Body row > {"id":"40"} Headers(1) Key: ContentType > Value: Application/Json
	@DELETE
	public boolean delete(User request) {
		User existingUser = findUser(request.getId());
		if (existingUser == null) return false;
		allUsers.remove(existingUser);
		return true;
	}
	
	private User findUser(String id) {
		for (User existingUser : allUsers) {
			if (existingUser.getId().equals(id)) {
				return existingUser;
			}
		}
		return null;
	}
}