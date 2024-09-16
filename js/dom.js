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

//1. where to add 
const placesList = document.getElementById('places-list');

//what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

//3. add the child 
placesList.appendChild(li);

//---practice
const li1 = document.createElement('li');
li1.innerText = 'sagorika';

placesList.appendChild(li1);

//section added
const cricketerList = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
	<h1>Bangladesh cricket team</h1>
	<ul>
		<li>Mashrafe</li>
		<li>Mashrafe</li>
		<li>Mashrafe</li>
		<li>Mashrafe</li>
		<li>Mashrafe</li>
	</ul>
`

cricketerList.appendChild(section);

//1. where to add
const mainContainer = document.getElementById('main-container');

const section1 = document.createElement('section');
const h12 = document.createElement('h1');
h12.innerText = 'My food list';
section1.appendChild(h12);

const ul = document.createElement('ul');

const li2 = document.createElement('li');
li2.innerText = 'biriyani';
ul.appendChild(li2);

section1.appendChild(ul)
mainContainer.appendChild(section1)

