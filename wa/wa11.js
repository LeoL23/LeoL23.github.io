const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picarrary = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg' ];
/* Declaring the alternative text for each image file */
const altText = ['Eye', 'Rock', 'Flowers', 'Egypt', 'Butterfly'];
/* Looping through images */
for (let i = 0; i < 5;i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', picarrary);
    newImage.setAttribute('alt', altText);
    thumbBar.appendChild(newImage);
}
    


/* Wiring up the Darken/Lighten button */
getAttribute(
    btn.setAttribute("class", xxx);
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
)