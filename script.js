const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
    try {
        const response = await fetch('https://api.allorigins.win/get?url=https://zenquotes.io/api/random');
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        quoteText.innerText = `"${parsedData[0].q}" — ${parsedData[0].a}`;
    } catch (error) {
        quoteText.innerText = "Oops! Couldn't fetch a quote. Try again!";
    }
}

newQuoteBtn.addEventListener('click', getQuote);
getQuote(); // Load a quote on page load
