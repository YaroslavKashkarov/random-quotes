import quotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex
function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[currentQuoteIndex]
  const {quote, author} = randomQuote
  // @ts-ignore
  quoteElement.textContent = quote
  // @ts-ignore
  quoteAuthorElement.textContent = author
  // @ts-ignore
  toggleFavoriteBtn.textContent = randomQuote.isFavorite ? 'Remove from favorites' : 'Add to favorites'
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite
  // @ts-ignore
  toggleFavoriteBtn.textContent = currentQuote.isFavorite ? 'Remove from favorites' : 'Add to favorites'

  if(currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div')
    favoriteCard.classList.add('favorite-card')
    favoriteCard.innerHTML =
      `
    <p>${currentQuote.quote}</p>
    <p class='author'>${currentQuote.author}</p>
    `
    // @ts-ignore
    favoritesContainer.appendChild(favoriteCard)
  } else {
    // Remove the favorite card from the favorites container
    const favoriteCards = document.querySelectorAll('.favorite-card')
    console.log(favoriteCards)
    favoriteCards.forEach((card) => {
      if(card.textContent?.includes(currentQuote.quote)) {
        card.remove()
      }
    })
  }
}

// @ts-ignore
generateBtn.addEventListener('click', generateRandomQuote)
// @ts-ignore
toggleFavoriteBtn.addEventListener('click', toggleFavorite)

generateRandomQuote()
