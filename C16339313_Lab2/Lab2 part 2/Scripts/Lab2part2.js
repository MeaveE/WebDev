
function titles(){
	//part 1 print only titles with 6 or more words
	fetch('https://jsonplaceholder.typicode.com/posts')
	 .then(function (response){
	 	response.json().then(function(data) {
	     data.forEach(x => {
			var title = x.title;
			if(title.split(' ').length >= 6){
				console.log(title);
			}
		})
	  })
	});
}

//part 2 print word frequency of body
var wordMap = {};
function mapWords(){

	fetch('https://jsonplaceholder.typicode.com/posts')
	 .then(function (response){
	 	response.json()
	 	.then(json => json.map(x => x.body)) //maps value of x to x.body
	 	.then(function(data) {
	       data.forEach(x => 
	            x.split(" ").forEach(J => 
	            	//if this word has not yet been counted incriment by one else add one to the current value
	                (wordMap[J] == null ? wordMap[J] = 1 : wordMap[J] = wordMap[J] + 1)           
	            )
	        )
	 })
	});
  	let wordIndex = Object.keys(wordMap); //index to map the word to the number of occurences 
    wordIndex.forEach(key => console.log(key + " : " + wordMap[key]));
    wordMap = {};


}
