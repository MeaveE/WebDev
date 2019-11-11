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

document.getElementById("savebtn").addEventListener("click", addnote);

//add the note
function addnote(event){
	event.preventDefault();

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
	btn.id= "delrow-" + counter;

 addListenerDeleteButton(btn);

//create the edit button
	var btn2 = document.createElement("BUTTON");
	btn2.innerHTML="Edit";
	btn2.id="edrow-" + counter;
	console.log(btn.id);

 addListenerEditButton(btn2);

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


//edit function
document.getElementById("edrow-" + counter).addEventListener("click", editnote);


function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation();      
    deleteNote(e);
  });
}

function deleteNote(e) {
  let Note = e.target.parentNode;
  Note.parentNode.removeChild(Note);
}

function addListenerEditButton(editbtn) {
  editbtn.addEventListener('click', function (e) {
    e.stopPropagation();      
    editnote(e);
  });
}

function editnote(e){
		let NoteToEdit = e.target.parentNode;
		console.log("edit fxn");
		NoteToEdit.parentNode.contentEditable = true;
	};

