// Retrieves the xID found on UNR pages (the manifest controls page access).
var bodyID = document.getElementsByTagName("body")[0].id;
// Outputs the bodyID to console for testing.
console.log(bodyID);


// Makes an alert box with a copy ID ready to be pasted.
copyToClipboard(bodyID);

function copyToClipboard(bodyID)
{
	// Prompts a window with the XID.
	window.prompt("Copy to clipboard: Ctrl+C, Enter", bodyID)
}
