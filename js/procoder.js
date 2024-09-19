document.querySelector('h1').innerText = 'Subscribe';

const box = document.querySelector('#box');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';

document.getElementById('box').style.backgroundColor = 'blue';

const menuItem = document.querySelectorAll('a');
// menuItem[0].style.color = 'red';

menuItem.forEach(function (i){
	i.style.color  = 'red';
	i.style.fontSize = '24px';
});

const cusClass = document.getElementsByClassName('nav-link');

const convertedClass = Array.from(cusClass);
// console.log(convertedClass);
// for(let i = 0; i < cusClass.length; i++){
	// console.log(cusClass[i]);
// }

convertedClass.forEach(function (i){
	i.style.backgroundColor = '#262626'
	i.style.margin = '0, 0, 5px'
	i.style.padding = '#262626'
});

// document.querySelector('.box').id;
// document.querySelector('.box').className;




