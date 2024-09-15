console.log('third js');

const main = document.getElementById('main-container');
const section = document.createElement('section');

section.innerHTML = `
	<h1>My dynamic html</h1>
	<ul>
		<li>dynamic item</li>
		<li>dynamic item</li>
		<li>dynamic item</li>
		<li>dynamic item</li>
	</ul>
`;

main.appendChild(section);

const main1 = document.getElementById('main-container');
const section1 = document.createElement('section');
section.innerHTML = `
		<h1>My dynamic section 2</h>
		<p>Extra text added inside paragraph</p>
		<ul>
			<li>second item</li>
			<li>second item</li>
			<li>second item</li>
			<li>second item</li>
			<li>second item</li>
		</ul>
`

main1.appendChild(section1)


