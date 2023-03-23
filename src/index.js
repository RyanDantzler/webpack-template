import generateJoke from './generateJoke';
import './styles/main.scss'
import tomato from './assets/tomato.svg';

const tomatoImg = document.getElementById('tomatoImg');
tomatoImg.src = tomato;

console.log(generateJoke());