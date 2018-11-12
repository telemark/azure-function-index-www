const normalizeWhitespace = require('normalize-html-whitespace')

module.exports = text => {
  text = text.replace(/\./g, '. ')
  text = text.replace(/\n/g, ' ')
  text = normalizeWhitespace(text)
  text = text.trim()

  return text
}
