// Retrieves the xID found on UNR pages (the manifest controls page access).
var bodyID = document.getElementsByTagName("body")[0].id;
// This is an array which stores keypresses.
var keys = [];

// retrieves the header of pages so that they are available for parsing
var currentLocation = window.location.href.toString().toLowerCase();

// true or false booleans
var boolNevadaToday = false;

console.log(currentLocation);
// checks to see whether or not we're on most unr.edu pages except the one with nevada today.
mainController(currentLocation);
// checks to see if on a nevadatoday page and fills fullHeader with a massive string - this makes the addon more responsive on pages that don't require it.
boolNevadaToday = nevadaTodayController(currentLocation);



// Controllers
function mainController(currentLocation)
{
  // As long as the current location isn't at nevada-today, we will load the event handlers that trigger the popup.
  if(currentLocation != "http://www.unr.edu/nevada-today")
  {
  window.addEventListener("keydown", keysPressed, false);
  window.addEventListener("keyup", keysReleased, false);
  }
}
// Triggered upon loading nevadaToday, so that the slower pageID method is called
function nevadaTodayController(currentLocation)
{
  console.log(currentLocation);
  if(currentLocation==="http://www.unr.edu/nevada-today")
  {
  console.log("this works");
  var fullHeader = document.getElementsByTagName("head")[0].innerHTML;
  // once retrieved, this parses the fullHeader to fetch the PageID:
  var newBodyID = slowXIDFetch(fullHeader);
  bodyID = newBodyID;
  window.addEventListener("keydown", keysPressed, false);
  window.addEventListener("keyup", keysReleased, false);
  }
}

// Trigger copy to clipboard upon hotkey.
function copyToClipboard(bodyID)
{
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
    // if on a normal UNR page
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




// Function that parses a header in HTML and returns an XID. 
function slowXIDFetch(fullHeader)
{
  var fullHeaderLength = fullHeader.length;
  // unicode literal for the spacebar space - see http://stackoverflow.com/questions/19810122/how-do-i-add-a-non-breaking-whitespace-in-javascript-without-using-innerhtml
  var endOfXID = '.';
  // go through element by element within the comment's head
  
  for(var i=0;i<fullHeaderLength;i++)
  {
    // This fetches the pageID from a comment in the header. It is really inefficient and it's really ugly - but it works.
    if(fullHeader[i] == "P" && fullHeader[i+1] == "a" && fullHeader[i+2] == "g" && fullHeader[i+3] == "e" && fullHeader[i+4] == "I" && fullHeader[i+5] == "D" && fullHeader[i+6] == ":")
      {
        // i+7 is whitespace
        // thus, we need to fetch the xID until the next whitespace
        var start = i+7;
        // i+8 is the first character, which is the x. hense why we're adding a count of 1.
        var count = 1;
        // this is the position of where the characters are added to the array.
        var arraySize = 0;
        // this is the array that stores the xid
        var slowPageID = [];
        // this is the string for slowPageID
        var stringSlowPageID;

        // we'll count up until we hit endOfXID
        // while the elements in the array do not match the endOfXID character (which is a period)
        while(fullHeader[start+count] !=  endOfXID)
        {
          // log what is stored at that element
          slowPageID[arraySize] = fullHeader[start+count];
          console.log(fullHeader[start+count]);
          // keep counting up until we hit endOfXID
          count++;
          // move the arraysize up by one to store the next character there.
          arraySize++;
        }

        // turns the array of character into a string  and also removes the commas
        stringSlowPageID = slowPageID.join('');
        console.log(stringSlowPageID);
         // then return stringSlowPageID so that it's the new bodyID
        return stringSlowPageID;
      } 
  }
  
  // check to see if "pageID" is there

  // once "pageID" is found, send a console.log out
}