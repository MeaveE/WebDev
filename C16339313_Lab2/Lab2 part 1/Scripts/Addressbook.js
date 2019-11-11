function validate(){

	var name = document.getElementById("contactName").value;
	var mobile = document.getElementById("mobileNumb").value;
	var email = document.getElementById("contactEmail").value;	
	var errorbox = document.getElementById("errorbox");	

	var letters = /^[A-Za-z]+$/;
	var numbers = /^[0-9]+$/;
	var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	var maxlength = 20;
	var maxNumb = 10;
	var maxEmail = 40;

	var ifValid = true;
	var ifValid1 = true;
	var ifValid2 = true;

	if((name.match(letters) == null) || (name.length >= maxlength))
	{
		console.log((name.match(letters) == null) + "," + (name.length >= maxlength));
		console.log("invlaid name ");
		var errordiv = document.createElement("DIV"); 
		errordiv.id="error-1";
		errordiv.innerHTML = "Invalid name ";
		errorbox.appendChild(errordiv);
		ifValid = false;
	}
	if((mobile.match(numbers) == null) || (mobile.length >= maxNumb))
	{
		console.log((mobile.match(numbers) == null) + "," + (mobile.length >= maxNumb));
		console.log("invlaid number ");
		var errordiv1 = document.createElement("DIV"); 
		errordiv1.id="error-2";
		errordiv1.innerHTML = "Invalid mobile number ";
		errorbox.appendChild(errordiv1);
		ifValid = false;
	}
	if((email.match(emailformat) == null) || (email.length >= maxEmail))
	{
		console.log("invlaid email");
		var errordiv2 = document.createElement("DIV");
		errordiv2.id="error-3"; 
		errordiv2.innerHTML = "Invalid email ";
		errorbox.appendChild(errordiv2);
		ifValid = false;
	}

	console.log(ifValid);
	console.log(ifValid1);
	console.log(ifValid2);
	if(ifValid && ifValid1 && ifValid2){
		addNew();
	}
	
}

function addNew(){

	console.log("add1");
	var table = document.getElementById("contacts");
	var name = document.getElementById("contactName").value;
	var mobile = document.getElementById("mobileNumb").value;
	var email = document.getElementById("contactEmail").value;

	console.log("insert1");
	var newRow = table.insertRow(1);
	var nameCell = newRow.insertCell(0);
	var numberCell = newRow.insertCell(1);
	var emailCell = newRow.insertCell(2);

	console.log("assign1");
	nameCell.innerHTML = name;
	numberCell.innerHTML = mobile;
	emailCell.innerHTML = email;
}

var counter = 1;

function sortSwap(){
	
	counter = counter + 1;

	console.log(counter);
	console.log(counter%2);

	if(counter%2 == 0){
		sort();
	}
	else{
		reversesort();
	}

}

function sort(){//how to reverse

var table, rows, swap, i, x, y, shouldSwap;
  table = document.getElementById("contacts");
  swap = true;
  
  while (swap) {
    swap = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwap = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
 
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwap = true;
        break;
      }
    }
    if (shouldSwap) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      swap = true;
    }
  }
}
function reversesort(){//how to reverse

  console.log("reversesort");
  var table, rows, swap, i, x, y, shouldSwap;
  table = document.getElementById("contacts");
  swap = true;
  
  while (swap) {
    swap = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwap = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
 
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwap = true;
        break;
      }
    }
    if (shouldSwap) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      swap = true;
    }
  }
}

function search(){
	var input, filter, table, tr, td, i;
	input = document.getElementById("search");
	filter = input.value;
	table = document.getElementById("contacts");
	tr = table.getElementsByTagName("tr");

	for(i=1; i<tr.length;i++){

		td = tr[i].getElementsByTagName("td");
		for(var j=0; j<td.length;j++){
			cell = tr[i].getElementsByTagName("td")[j];
			if(cell){
				if(cell.innerHTML.indexOf(filter)> -1){
					tr[i].style.display = "";
					break;
				}
			
			}
		}
	}

}