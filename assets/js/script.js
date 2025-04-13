const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    author: 'Nelson Mandela'
  },
  {
    quote: 'Life is what happens when you’re busy making other plans',
    author: 'John Lennon'
  },
  {
    quote: 'The purpose of our lives is to be happy',
    author: 'Dalai Lama'
  },
  {
    quote: 'Get busy living or get busy dying',
    author: 'Stephen King'
  },
  {
    quote: 'The biggest adventure you can take is to live the life of your dreams.',
    author: 'Oprah Winfrey'
  },
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt'
  },
  {
    quote: 'The best way to predict your future is to create it.',
    author: 'Abraham Lincoln'
  },
  {
    quote: 'Believe you can and you`re halfway there.',
    author: 'Theodore Roosevelt'
  }
]

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const {quote, author: quoteAuthor} = quotes[randomIndex]
  // const quote = randomQuote.quote
  // const quoteAutor = randomQuote.author
  // @ts-ignore
  quoteElement.textContent = quote
  // @ts-ignore
  quoteAuthorElement.textContent = quoteAuthor
}

// @ts-ignore
generateBtn.addEventListener('click', generateRandomQuote)