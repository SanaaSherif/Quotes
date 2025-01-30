const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        quoteText.innerText = `"${data[0].q}" — ${data[0].a}`;
    } catch (error) {
        quoteText.innerText = "Oops! Couldn't fetch a quote. Try again!";
    }
}

newQuoteBtn.addEventListener('click', getQuote);
getQuote(); // Load a quote on page load
