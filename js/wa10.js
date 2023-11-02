const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.randomize');

function randomValueFromArrary(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const storyText = [""];

const insertX = [""];
const insertY = [""];
const insertZ = [""]