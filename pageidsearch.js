// Retrieves the xID found on UNR pages (the manifest controls page access).
var bodyID = document.getElementsByTagName("body")[0].id;
// Outputs the bodyID to console for testing.

// stringify the bodyID

console.log(bodyID);



// Copies the bodyID into the addon's HTML page, making it easy to copy and paste.
document.body.onload = addElement(bodyID);
//  Creates an alert box with a copy ID ready to be pasted.
// copyToClipboard(bodyID);



//  copy the bodyID into the addon page.

function copyToClipboard(bodyID)
{
	// Prompts a window with the XID.
	window.prompt("Copy to clipboard: Ctrl+C, Enter", bodyID)
}

function addElement (bodyID) 
{ 

  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 

  var newContent = document.createTextNode(bodyID); 

  console.log(newContent); // works fine up to here?
  newDiv.appendChild(newContent); //add the text node to the newly created div. 
  console.log(newDiv); // seems to be appended correctly. hmm.
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  console.log(currentDiv); // this returns null. interesting.
  document.body.insertBefore(newDiv, currentDiv); 
}