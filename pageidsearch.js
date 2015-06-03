// Key listeners for dealing with the keyboard.
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);


// Retrieves the xID found on UNR pages (the manifest controls page access).
var bodyID = document.getElementsByTagName("body")[0].id;
// This is an array which stores keypresses.
var keys = [];

// Trigger copy to clipboard upon hotkey.
function copyToClipboard(bodyID)
{
	// Prompts a window with the XID.
	window.prompt("Copy to clipboard: Ctrl+C, Enter", bodyID);
}

// Controls actions upon keypresses. Takes global arguments.
function keysPressed(e)
{
  // store an entry for every key pressed
  keys[e.keyCode] = true;

  // Ctrl + Shift + Z
  if(keys[17] && keys[16] && keys[90])
  {
    // do something - interestingly enough, this works without needing to be called outside of the function.
    copyToClipboard(bodyID);
    // prevent default browser behavior
    e.preventDefault();
    // this "releases" the key combination, so that there isnt an infinite loop of prompts
    // this is used instead of the keysReleased function because we can specify multiple keys at once, versus last used.
    keys[17] = false; // turns ctrl back to normal
    keys[16] = false; // turns shift back to normal
    keys[90] = false; // turns z back to normal
  }
}
// If you're feeling lazy and just want to turn off the last used key.
function keysReleased(e)
{
  // mark keys that were released
  keys[e.keyCode] = false;
}


// I'll tinker with this tomorrow. Might still be useful to create an HTML page.
/*
function addElement (bodyIDArr) 
{ 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 

  var newContent = document.createTextNode(bodyIDArr); 

  newDiv.appendChild(newContent); //add the text node to the newly created div. 
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
*/