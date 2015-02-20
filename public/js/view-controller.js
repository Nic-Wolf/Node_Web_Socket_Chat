//************************************************************//
// Title:    View Controller
// Project:  Socket Chat
// Author:   Nic Wolf
// Sources:  None
// Revision: 0.1.0 (2/20/2015)
//************************************************************//
/* Description:
   Takes elements on the front end and appends new messages to 
   them. Sets the chat message in a web socket.

   TODOS:
     - 

   NOTES:
     - 
*/

var socket = io();

window.onload = init;

function init() {

	var frmMain    = document.getElementById('frmMain');
	var txtInput   = document.getElementById('txtInput');
	var ulMessages = document.getElementById('ulMessages');

	frmMain.onsubmit = function(event) {
		event.preventDefault();
		socket.emit('chat message', txtInput.value);
		txtInput.value = "";
	}//end onsubmit()

	socket.on('chat message', function(msg) {
		var newItem     = document.createElement("li"); // Create a <li> node
		var newItemText = document.createTextNode(msg); // Create a text node
		newItem.appendChild(newItemText);               // Append the text to <li>

		ulMessages.appendChild(newItem); // Append the new li to the list
	});//end onChatMessage()

}//end init()
