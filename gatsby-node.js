const differenceInMilliseconds = require("date-fns/differenceInMilliseconds")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const createNodeShop = newDate => {
    const nodeMeta = {
      id: createNodeId(`my-cool-date`),
      parent: null,
      children: [],
      internal: {
        type: `TheTime`,
        contentDigest: createContentDigest(newDate),
      },
    }

    const node = Object.assign({}, { date: newDate }, nodeMeta)
    createNode(node)
  }

  let newDate = new Date()
  createNodeShop(newDate)
}
