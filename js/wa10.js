const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const storyText = "It was 45 fahrenheit outside today in Langley Falls, VA, so :insertx: went for a walk to the park down the block. When he got to :inserty:, he raised his head to the air and howled in drunken anger, then :insertz:. Steve Smith and Roger saw the whole thing right in front of their eyes as Roger was dressed up as his Ricky Spanish persona and filming a Tik-Tok. He didn't get up and Roger started recording and making jokes, this was no suprise to Steve Smith. The guy. — :insertx: , weighed 240 pounds, and it was a cold day here in Lnagley.";

const insertX = ["A Pitbull named Galaxy Destroyer", "Michael Myers", "Jason"];
const insertY = ["the lake", "bodega", "dog park"];
const insertZ = ["jumped in head first", "ran into a wall at full sprint", "walked in circles until he passed out"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);


function result() {

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Steve Smith", name);
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(240/14) + " stone";
      newStory = newStory.replace("240 pounds", weight);
      const temperature =  Math.round((45-32)*(5/9)) + " centigrade";
      newStory = newStory.replace("94 fahrenheit", temperature);
  
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }