//find the form
var resgistrationForm = document.querySelector("#registration");

// Get references to the input fields
 	var usernameInput = document.querySelector("#username");
 	var usernameMessage = document.querySelector("#username-message");
 	var nameInput = document.querySelector("#full-name");
 	var nameMessage = document.querySelector("#full-name-message");
 	var campusMessage = document.querySelector("#campus-message");
 	var campusOptions = document.querySelectorAll('[name=campus]');
 	var messageInput = document.querySelector("#message");
 	var messageMessage = document.querySelector("#message-message")

 	// Listen for the blur event on the username input field
 	usernameInput.onblur = function(){

 		// Create a fake list of usernames that are in use
 		var usernames = ["admin", "user", "test", "matt.chamberlain"];

 		//check if the username is in use
 		if( usernames.indexOf( this.value.toLowerCase() )  >= 0 ) {
 			
 			usernameMessage.innerHTML = "Username is in use";

 		} else if( this.value.length < 3 ) {

 			usernameMessage.innerHTML = "Your username must be at least 3 characters"

 		} else if( this.value.length > 20 ) {

 			usernameMessage.innerHTML = "Username must be at most 20 characters"

 		} else if( usernamePattern.test( this.value ) ) {
 			// Hide any existing messages
 			usernameMessage.innerHTML = "";
 		} else {
 			// Display an error to the user
 			usernameMessage.innerHTML = "Invalid username";
 		}
 	}

 	messageInput.onkeyup = function() {

 		var totalLetters = this.value.length;

 		messageMessage.innerHTML = totalLetters + "/240"
 	} 

//wait for the user to submit the form
// resgistrationForm.onsubmit = function(event) {

// 	// Count how many errors there are
// 	var totalErrors = 0;

//  	// Check the username

//  	if( usernamePattern.test( usernameInput.value ) ) {
//  		//Username is valid
//  		usernameMessage.innerHTML = "";
//  	} else {
//  		// Username in invalid
//  		usernameMessage.innerHTML = "Username is invalid";
//  		totalErrors++;
//  	}

//  	if( namePattern.test( nameInput.value ) ) {
//  		// Name is valid
//  		nameMessage.innerHTML = "";
//  	} else {
//  		// Name in invalid
//  		nameMessage.innerHTML = "Name is invalid";
//  		totalErrors++;
//  	}

//  	var campusIsSelected = false;
//  	//Loop over all the campus options
//  	for(var i=0; i<campusOptions.length; i++) {

//  		//check if this campus has been selected
//  		if( campusOptions[i].checked ) {
//  			campusIsSelected = true;
//  		}

//  	}

//  	// If camousIsSelected is still false
//  	if( campusIsSelected == false ) {
//  		campusMessage.innerHTML = "Please select a campus";
//  		totalErrors++;
//  	} else {
//  		campusMessage.innerHTML = "";
//  	}

//  	//If the total errors is greater than 0
//  	if( totalErrors > 0) {
//  		// Stop the form from submitting
//  		event.preventDefault();
//  	}
	
	
	
// }//