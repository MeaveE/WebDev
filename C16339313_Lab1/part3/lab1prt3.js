//this function hides and reveals the add note form
function display(){
	
  var x = document.getElementById("row-1");
  var y = document.getElementById("addbtn");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML="Add";
  } else {
    x.style.display = "block";
    y.innerHTML="Hide";
  }
};

var counter = 2;

//add the note
function addnote(){
	console.log("fxn 2");
	var noteDiv = document.getElementById("note");

	counter = counter + 1;

	var node = document.createElement("DIV");                	
	node.className="row-" + counter;		
	node.id="row-" + counter;			// Create a <div> node with the note
	colourchoice(node);

	var textnode = document.createTextNode(document.getElementById("notetext").value);
	node.appendChild(textnode); 

	//create the delete button
	var btn = document.createElement("BUTTON");
	btn.innerHTML="Delete";
	btn.id= "row-" + counter;

//create the edit button
	var btn2 = document.createElement("BUTTON");
	btn2.innerHTML="Edit";
	btn2.id="row-" + counter;
	console.log(btn.id);

// Append the text to <div>
	noteDiv.appendChild(node); 
	node.appendChild(btn);
	node.appendChild(btn2);
	console.log("append");


};

function colourchoice(nodeid){
	
	var colourId = document.getElementById("color");//get the chosen color
	console.log(colourId.value);
	colorchosesn = colourId.value
	nodeid.style.backgroundColor = colorchosesn;//change color doesnt cause it to delete adding text does why?
}

/*delete function should be outside of addnote function
	btn.onclick=deletenote()
//edit function
	btn2.onclick=editnote()

function deletenote(){
		console.log("Delete");

		 var element = document.getElementById(btn.id);//need to identify the number of the button clicked
    	 element.parentNode.removeChild(element);

	};

function editnote(){
		console.log("edit fxn");
		document.getElementById(btn2.id).contentEditable = true;
	};*/