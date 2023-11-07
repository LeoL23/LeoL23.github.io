console.log("Making sure this test works");


const x = 1;
const y = 2;

if (x === y) {
    console.log("SUCCESS")
}
else {
    console.log("FAIL");
}

const btn = document.querySelector
("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext ("2d");

document.addEventListener
("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    
}

function draw() {


}

btn.addEventListener("click", draw);