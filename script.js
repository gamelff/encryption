const encodeForm = document.querySelector("#encode");
const encodeText = document.querySelector("#encodeText");
const timesEncode = document.querySelector("#timesEncode");
const decodeForm = document.querySelector("#decode");
const decodeText = document.querySelector("#decodeText");
const timesDecode = document.querySelector("#timesDecode");

function say(text, element) {
	const node = document.createElement("p");
	const textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById(element).appendChild(node);
	alert(text.length);
}

function decode(text, k) {
	if(k > 0) {
		return decode(atob(text), k - 1);
	} else {
		say(`${text}`, "decodeList");
		return text;
	}
}

function encode(text, k) {
	if(k > 0) {
		return encode(btoa(text), k - 1);
	} else {
		say(`${text}`, "encodeList");
		return text;
	}
}

function encodeSubmit() {
	encode(`${encodeText.value}`, timesEncode.value);
}

function decodeSubmit() {
  decode(`${decodeText.value}`, timesDecode.value);
}

try {
  
}
catch(err) {
  alert(err);
}
