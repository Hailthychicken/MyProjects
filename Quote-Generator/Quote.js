const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBTN = document.getElementById('twitter');
const newQuoteBTN= document.getElementById('new-qoute');
const loader = document.getElementById('loader');
let apiQuotes = [];


function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
//Check if author is null
if(!quote.author){
authorText.textContent = 'null';
}
else{
authorText.textContent = quote.author;
}

    quoteText.textContent= quote.text;
}
//Get Quotes
async function getQuotes(){
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //error
    }
}

//twetter quote
function tweetQuotes(){
const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl, '_blank');
}

newQuoteBTN.addEventListener('click', newQuote);
twitterBTN.addEventListener('click', tweetQuotes);


    //Onloading the page
    getQuotes();
