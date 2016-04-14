//find the form
var resgistrationForm = document.querySelector("#registration");

//wait for the user to submit the form
resgistrationForm.onsubmit = function(event) {

	// Count how many errors there are
	var totalErrors = 0;

 	

 	// Get references to the input fields
 	var usernameInput = document.querySelector("#username");
 	var usernameMessage = document.querySelector("#username-message");
 	var nameInput = document.querySelector("#full-name");
 	var nameMessage = document.querySelector("#full-name-message");
 	var campusMessage = document.querySelector("#campus-message");
 	var campusOptions = document.querySelectorAll('[name=campus]');

 	// Check the username

 	if( usernamePattern.test( usernameInput.value ) ) {
 		//Username is valid
 		usernameMessage.innerHTML = "";
 	} else {
 		// Username in invalid
 		usernameMessage.innerHTML = "Username is invalid";
 		totalErrors++;
 	}

 	if( namePattern.test( nameInput.value ) ) {
 		// Name is valid
 		nameMessage.innerHTML = "";
 	} else {
 		// Name in invalid
 		nameMessage.innerHTML = "Name is invalid";
 		totalErrors++;
 	}

 	var campusIsSelected = false;
 	//Loop over all the campus options
 	for(var i=0; i<campusOptions.length; i++) {

 		//check if this campus has been selected
 		if( campusOptions[i].checked ) {
 			campusIsSelected = true;
 		}

 	}

 	// If camousIsSelected is still false
 	if( campusIsSelected == false ) {
 		campusMessage.innerHTML = "Please select a campus";
 		totalErrors++;
 	} else {
 		campusMessage.innerHTML = "";
 	}

 	//If the total errors is greater than 0
 	if( totalErrors > 0) {
 		// Stop the form from submitting
 		event.preventDefault();
 	}
	
	
	
}