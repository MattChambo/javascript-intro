//find the form
var resgistrationForm = document.querySelector("#registration");

//wait for the user to submit the form
resgistrationForm.onsubmit = function(event) {

 	// Patterns to use in validation
 	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$");
 	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");

 	// Get references to the input fields
 	var usernameInput = document.querySelector("#username");
 	var usernameMessage = document.querySelector("#username-message")
 	var nameInput = document.querySelector("#full-name")
 	var nameMessage = document.querySelector("#full-name-message")
 	// Check the username

 	if( usernamePattern.test( usernameInput.value ) ) {
 		//Username is valid
 		usernameMessage.innerHTML = "";
 	} else {
 		// Username in invalid
 		usernameMessage.innerHTML = "Username is invalid";
 	}

 	if( namePattern.test( nameInput.value ) ) {
 		// Name is valid
 		nameMessage.innerHTML = "";
 	} else {
 		// Name in invalid
 		nameMessage.innerHTML = "Name is invalid";
 	}

	// Stop the form from submitting
	event.preventDefault();
	
}