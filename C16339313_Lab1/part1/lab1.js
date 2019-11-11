


function display() {
console.log("hello");
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(document.getElementById("newitem").value);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("list").appendChild(node); 
   
}

/*var x = document.getElementById("lab");
   var item= "";
   var i;

   for(i=0;i<x.length;i++)
    item += x.elements[i].value + "<br>"

	document.getElementById("list").innerHTML = text;*/