//Function to replace the content and show output area. Called from HTML.
function replaceContent() {
	//declaring the variables
	let myRecipientName;
	let myHostName; // Added: declare variable for host name
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipient-input").value
	
	// Added: read the entry in the host-input field and store it in the host name variable
	myHostName = document.getElementById("host-input").value

	//logging to devtools console
	console.log('Variable myRecipientName: ' + myRecipientName)
	
	// Added: log the host name variable to the console
	console.log('Variable myHostName: ' + myHostName)
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipient-placeholder").innerHTML = myRecipientName

	// Added: replace the host-placeholder text with the host's name
	document.getElementById("host-placeholder").innerHTML = myHostName

	//make output area visible by removing hidden class
		document.getElementById("outputArea").classList.remove("hidden")
	}