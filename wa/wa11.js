const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picarrary = ['images/131108082143-thor-the-dark-world.jpg', 'images/pic2.jpg', 'images/captain-america-android-0aqaztdwgpz41epy.jpg', 'images/h_blackpanther_mobile_19754_57fe2288.jpeg', 'images/iron man.jpeg'];
/* Declaring the alternative text for each image file */
const altText = ['Thor', 'Rock', 'Flowers', 'Black Panther', 'Iron Man'];
/* Looping through images */
for (let i = 0; i < 5;i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', picarrary[i]); //picarray using i
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}
    

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if(btn.getAttribute('class') === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})
