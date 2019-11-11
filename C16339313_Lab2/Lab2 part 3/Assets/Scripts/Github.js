

function getUsers(){
	let search = document.getElementById("search").value;

	fetch('https://api.github.com/users')
	 .then(function (response){
	 	response.json().then(function(data) {
	     data.forEach(x => {
		     	if(x.login == search){
					console.log("found!" + x.login);
					populateUser(x.login);
				}
			})
		})
	  });
}


function populateUser(user){

	fetch('https://api.github.com/users/'.concat(user))
	.then(function(response){
		response.json().then(function(data){
				console.log(data.name);
				document.getElementById("userimg").src = data.avatar_url;
				document.getElementById("NameDiv").innerHTML = data.name; //JSON.stringify(data.name,null,2); //
				document.getElementById("Username").innerHTML = data.login;
				document.getElementById("Email").innerHTML = data.email;
				document.getElementById("Location").innerHTML = data.location;
				document.getElementById("NumberofGits").innerHTML = data.public_gists; //public_gists
				var counter = 1; //pass in counter for populating repos so when a new user is searched the repos update instead of adding to the end
				populateRepos(data.login, counter);
			})
	})
}


function populateRepos(user, counter){
	fetch('https://api.github.com/users/'+ user +'/repos')
	.then(function(response){
		response.json().then(function(data){
			data.forEach(x => {
			   	console.log(x.name);
			    console.log(counter);
			    if(counter <= 5){ 
			    	document.getElementById("repoName-"+ counter).innerHTML = x.name;
			    	document.getElementById("repoDesc-"+ counter).innerHTML = x.description;
			    }
			    counter = counter + 1;
			    if(counter >= 7){
			    	var repodata = document.getElementById("userRepos");
			    	var repoOverflow = document.createElement("li"); 
			    	repoOverflow.id="userRepoData";
			    	var repoOverflowdata = document.createElement("DIV");
					repoOverflowdata.id="repoName-" + counter;
					repoOverflowdata.innerHTML = "<h3>Name: </h3>" + x.name + "<h3>Description: </h3>" + x.description;
					repodata.appendChild(repoOverflow);
					repoOverflow.appendChild(repoOverflowdata);
			    }
			})
		})
	})
}

