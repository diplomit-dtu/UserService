package rest;

public class WrongPasswordException extends Exception {
	private static final long serialVersionUID = 299907880750855701L;

	public WrongPasswordException(String message) { 
		super(message);
	}
}
