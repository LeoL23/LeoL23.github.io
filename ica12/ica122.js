const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const questionTxt = document.querySelector('#js-quote-text');
const answerBtn = document.querySelector('js-tweet').addEventListener('click', testFunction);
let answe = "";
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion'

async function getQuote(){
    //console.log('Test');

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json['question'])
        answer = json['answer']
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function displayAnswer(answer) {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = '';
    
}


function testFunction() {
    console.log("Answer button clicked");
}

getQuote();
