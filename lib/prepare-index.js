const uuid = require('uuid-random')

module.exports = data => {
  return {
    index: process.env.SEARCH_SERVICE_INDEX,
    type: process.env.SEARCH_SERVICE_INDEX_TYPE,
    id: uuid(),
    body: data
  }
}
