const parsePage = require('../lib/parse-page')
const prepareIndex = require('../lib/prepare-index')

module.exports = async function (context, mySbMsg) {
  context.log(`job received - ${mySbMsg.id} - start`)
  const pageUrl = mySbMsg.payload.url
  try {
    context.log(`job - ${mySbMsg.id} - url - ${pageUrl} - lookup - start`)
    let content = await parsePage(pageUrl)
    context.log(`job - ${mySbMsg.id} - url - ${pageUrl} - lookup - success`)
    content.url = pageUrl
    const index = prepareIndex(content)
    context.log(`job - ${mySbMsg.id} - add to index`)
    context.bindings.mySbQueue = Object.assign({}, { id: index.id, payload: index })
    context.log(`job - ${mySbMsg.id} - finished`)
  } catch (error) {
    context.log.error(`job - ${mySbMsg.id} - ${error}`)
  }
}
