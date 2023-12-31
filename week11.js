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

//console.log(random(2));

function random(number) {
    return Math.floor(Math.random () * number);
}

function random2(number) {
    return(Math.random() * number);
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (let i = 0; i<999; i++) {
        ctx.beginPath();
        let red = random(100);
        let green = random(255);
        let blue = random(255);
        let alpha = random2(10);
        let color = "rgba("+red+","+green+","+blue+","+alpha+")";
        console.log(color);
        ctx.fillStyle = color;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            4,
            2 * Math.PI,
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw);