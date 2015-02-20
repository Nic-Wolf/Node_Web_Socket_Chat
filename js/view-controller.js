// TODO - get rid of jQuery!

var socket = io();

window.onload = init;

function init() {

	var frmMain    = document.getElementById('frmMain');
	var txtInput   = document.getElementById('txtInput');
	var ulMessages = document.getElementById('ulMessages');

	frmMain.onsubmit = function() {
		socket.emit('chat message', txtInput.value);
	}//end onsubmit()

	//if (txtInput.value === "") { return false; }

	socket.on('chat message', function(msg) {
		var newItem     = document.createElement("li"); // Create a <li> node
		var newItemText = document.createTextNode(msg); // Create a text node
		newItem.appendChild(newItemText);               // Append the text to <li>

		ulMessages.appendChild(newItem); // Append the new li to the list
	});//end onChatMessage()

}//end init()
