import helloWorld from './helloworld.js';
import '../styles/index.css';
import '../styles/style.css';

const header= document.createElement('h3');
header.innerHTML= 'Welcome to react!'
header.className= 'heading';
document.body.appendChild(header);

const para= document.createElement('p');
para.innerHTML= 'this is para!'
document.body.appendChild(para);
helloWorld();