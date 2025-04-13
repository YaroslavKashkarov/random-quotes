import quotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn')

let currentQuoteIndex
function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[currentQuoteIndex]
  const {quote, author} = randomQuote
  // @ts-ignore
  quoteElement.textContent = quote
  // @ts-ignore
  quoteAuthorElement.textContent = author
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !quotes[currentQuoteIndex].isFavorite
  // @ts-ignore
  if(toggleFavoriteBtn.textContent === 'Add to favorites') {
    // @ts-ignore
    toggleFavoriteBtn.textContent = 'Remove from favorites'
  } else {
    // @ts-ignore
    toggleFavoriteBtn.textContent = 'Add to favorites'
  }
}

// @ts-ignore
generateBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn?.addEventListener('click', toggleFavorite)