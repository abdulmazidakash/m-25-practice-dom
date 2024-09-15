console.log('hello from js');
// console.log(document);
// console.log(document.body);

const student = {
	name: 'abul',
	Id: 11,
	study: function(time){
		// console.log(time, 'study kortase');
	}
}

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
	// console.log(li.innerText);
}

const h1Collection = document.getElementsByTagName('h1');
// console.log(h1Collection);

for (const h1 of h1Collection){
	// console.log(h1.innerText);
}

const places = document.getElementsByClassName('important-places');
for (const place of places){
	// console.log(place.innerText);
}

const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText  = 'Fruits changing by js'

const someLi = document.querySelectorAll('#fruits-container li')
// console.log(someLi);

for (const li of someLi){
	// console.log(li.innerText);
}

const sections = document.querySelectorAll('section');

// console.log(sections);
for (const section of sections){
	// console.log(section);
	section.style.border = '2px solid teal';
	section.style.marginBottom = '10px';
	section.style.borderRadius = '15px';
	section.style.backgroundColor = 'aquamarine';
	section.style.padding = '10px';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';


const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');