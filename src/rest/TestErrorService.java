package rest;

import javax.ws.rs.POST;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("errors")
public class TestErrorService {
	
	
	// Anvendelse af responce objektet
	//http://localhost:8080/UserService/rest2/errors?x=1
	@GET //error1.html Response
	@Produces(MediaType.APPLICATION_JSON)
	public Response get(@QueryParam("x") int x) {
		// fejlen kastes ved at retunerer Response objektet
		// 
		if (x > 0) {
			//
			return Response.ok(new User("42", "Bent")).build();
		} else {
			return Response.status(Status.BAD_REQUEST).entity("Der er sket en fejl").build(); 
			// Status 400
		}
	}
	
	@POST //error2.html WebApplicationException
	@Produces(MediaType.APPLICATION_JSON)
	public User post(@QueryParam("x") int x) {
		if (x > 0) {
			return new User("42", "Bent");
			
		} else { // kaster uncheck exception
			throw new WebApplicationException("denne tekst bliver ikke printet", Status.BAD_REQUEST);
		}
	}
	
	@PUT //error3.html egne eception
	@Produces(MediaType.APPLICATION_JSON)
	public Response put(@QueryParam("x") int x) throws WrongPasswordException {
		// her skal x sættes alt efter hvordan det går med datalagring
		if (x > 0) {
			return Response.ok(new User("42", "Bent")).build();
			
		} else {
			throw new WrongPasswordException("Forkert kodeord"); // bemærk at den er checked
		}
	}
}
