package rest;

public class User {

	private String id;
	private String name;
	
	public User() {
	}
	
	public User(String id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public void setId(String val) { 
		id = val; 
	}
	
	public String getId() { 
		return id; 
	}
	
	public void setName(String val) { 
		name = val; 
	}
	
	public String getName() { 
		return name; 
	}
	
}
