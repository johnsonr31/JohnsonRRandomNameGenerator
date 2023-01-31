import { namesList, prevFive } from './localStorage.js';

let randomBtn = document.getElementById('randomBtn');
let rngResult = document.getElementById('rngResult');

// Variables
let randomNum = 0;


function getRandomName(){
    randomNum = Math.floor(Math.random() * 46)
    rngResult.innerHTML = namesList[randomNum];
    console.log(namesList[randomNum]);
}

console.log(namesList);
// getRandomName();

randomBtn.addEventListener('click', function(){
    getRandomName();
})