import quotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const {quote, author} = randomQuote

  // @ts-ignore
  quoteElement.textContent = quote
  // @ts-ignore
  quoteAuthorElement.textContent = author
}

// @ts-ignore
generateBtn.addEventListener('click', generateRandomQuote)