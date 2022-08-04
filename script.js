
var button = document.getElementById('submit');
button.onclick  = function(){

var textField = document.getElementById("add-text");
var text = textField.value;
textField.value = "";
textField.clear;
const item = document.createElement('li');
item.className = 'element';
item.appendChild(document.createTextNode(text));
//Inner href
var link = document.createElement("a");
link.innerHTML = '<a href="">x</a>';

item.appendChild(link);

var list = document.getElementById('list');
list.appendChild(item);
};