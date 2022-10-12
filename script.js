const encodeForm = document.querySelector("#encode");
const encodeText = document.querySelector("#encodeText");
const timesEncode = document.querySelector("#timesEncode");
const decodeForm = document.querySelector("#decode");
const decodeText = document.querySelector("#decodeText");
const timesDecode = document.querySelector("#timesDecode");
let link;
let splitText;
let splitTextLength;
function say(text, element) {
	const node = document.createElement("p");
	const textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById(element).appendChild(node);
}

function decode(text, k) {
	if(k > 0) {
		return decode(atob(text), k - 1);
	} else {
		say(`${text}`, "decodeList");
		if(text.indexOf("http://")!=-1||text.indexOf("https://")!=-1){
		  if(text.indexOf(" ")!=-1){
		  splitText=text.split(" ");
		  }
		  splitTextLength=splitText.length;
		  for(let i = splitTextLength; i >= 0, i--;) {
		    if(splitText[i].indexOf("http://")!=-1||splitText[i].indexOf("https://")!=-1){
		      window.open(splitText[i]);
		    }
		  }
		}
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