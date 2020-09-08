import _ from 'lodash';
import './style.css';
import Icon from './webpack-icon.jpg';

function component () {
	const div = document.createElement('div');
	const p = document.createElement('h2');
	document.body.appendChild(div)
	div.appendChild(p);

	p.innerHTML = _.join(['Homework', '#14', 'Modules', '&&', 'webpack'], ' ');
	div.classList.add('hello');
	p.classList.add('words');

	const myIcon = new Image();
	myIcon.src = `./dist/${Icon}`;

	div.appendChild(myIcon);

	return div;
}

document.body.appendChild(component())


