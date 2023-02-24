const idElement = document.querySelector('.id');
const quoteElement = document.querySelector('.quote');
const buttonElement = document.querySelector('.btn');

async function getQuote() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  idElement.textContent = `ADVICE #${data.slip.id}`;
  quoteElement.textContent = `"${data.slip.advice}"`;
}

getQuote();

buttonElement.addEventListener('click', getQuote);
