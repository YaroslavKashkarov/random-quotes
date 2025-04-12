const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    autor: 'Nelson Mandela'
  },
  {
    quote: 'Life is what happens when you’re busy making other plans',
    autor: 'John Lennon'
  },
  {
    quote: 'The purpose of our lives is to be happy',
    autor: 'Dalai Lama'
  },
  {
    quote: 'Get busy living or get busy dying',
    autor: 'Stephen King'
  },
  {
    quote: 'The biggest adventure you can take is to live the life of your dreams.',
    autor: 'Oprah Winfrey'
  },
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    autor: 'Eleanor Roosevelt'
  },
  {
    quote: 'The best way to predict your future is to create it.',
    autor: 'Abraham Lincoln'
  },
  {
    quote: 'Believe you can and you\'re halfway there.',
    autor: 'Theodore Roosevelt'
  }
]

const quoteElement = document.getElementById('quote')
const generateBtn = document.getElementById('generate-btn')
const autorElement = document.getElementById('autor')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const quote = `<em>"${randomQuote.quote}"</em><br><span id="autor"></span>${randomQuote.autor}`
  // @ts-ignore
  quoteElement.innerHTML = quote

}

generateBtn?.addEventListener('click', generateRandomQuote)