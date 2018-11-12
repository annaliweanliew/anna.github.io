// My array of tag names
var myTagNames = ['skyscraper','Shanghai','New York','London','Bangkok'];

// My array of colors
var myColors = ['pink','lightblue','yellow','lightgreen','orange'];

const random = Math.random();

// function to randomised an array
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(random * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	return array;
}

// shuffle my array of tag names
myTagNames = shuffle(myTagNames);

console.log(myTagNames);

// select random tag name from randomised array
var tagName = myTagNames [Math.floor(random *(myTagNames.length))];
console.log(tagName);

// shuffle my array of colors
myColors = shuffle(myColors);
console.log(myColors);

// list of tag names
const tagList = document.getElementById('tag-list');

// list of photos
const photoList = document.getElementById('photo-list');

// function to get the photos with random tag name from Tumblr
function getTagPhotos (tagName){

	fetch('https://api.tumblr.com/v2/tagged?tag='+tagName+'&api_key=hdBrTPhpjUgfZIOUSixU1P3ofgmMZlwsGNaDmxelgskJwt4FRX')
	// convert the raw response into a JSON
		.then(function(response){
			return response.json();
		})

		.then(function(result){

			const items = result.response;


			for (i=0; i<items.length; i++){
				const item = items[i];

				if (item.photos != undefined){

					const altSizes = item.photos[0].alt_sizes;

					const imageSrc = altSizes[altSizes.length - 4].url;
					
					const li = document.createElement('li');
					
					const image = document.createElement('img');

					// same as setting attribute (eg. src) to image
					// image.setAttribute('src', imageSrc);
					image.src = imageSrc;

					li.appendChild(image);

					photoList.appendChild(li);				
				}
			}
		})

		.catch (function(err){
			console.log(err);
			window.alert('The Tumblr API is not working. Try again later');
		})

}

// Display list of buttons with tag names
for (n=0; n<myTagNames.length; n++){

	const myTagName = myTagNames[n];	

	const li = document.createElement('li');

	const button = document.createElement('button');

	button.id = myTagName;

	button.innerHTML = myTagName;

	// set background color for buttons
	const myColor = myColors[n];

	button.style.backgroundColor = myColor;

	li.appendChild(button);
	
	tagList.appendChild(li);

	// call function to get photos with random tag name
	getTagPhotos(tagName);

	// user to select correct tag name by clicking on button
	button.onclick = function(){
		
		if (myTagName == tagName){
			window.alert("That's correct!");
			
			// game resets after correct answer is selected
			window.location.reload();
		}

		else{
			window.alert("That's wrong. Try again!")
		}
	}
}



