const axios = require('axios')
const cheerio = require('cheerio')
const cleanupText = require('./cleanup-text')

module.exports = async url => {
  try {
    const { data } = await axios.get(url, { timeout: 10000 })
    const $ = cheerio.load(data)
    const content = cleanupText($('.ezxmltext-field').text())
    return {
      title: cleanupText($('title').text()),
      header: cleanupText($('.article__header').text()),
      summary: cleanupText($('.byline').text()),
      description: `${content.substr(0, 300)}...`,
      content: content
    }
  } catch (error) {
    throw error
  }
}
