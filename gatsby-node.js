const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllProducts {
      allDatoCmsCaseResult {
        nodes {
          id
          slug
          title
          subtitle
        }
      }
    }
  `)
  const dateTemplate = path.resolve(`src/templates/caseResult.js`)
  queryResults.data.allDatoCmsCaseResult.nodes.forEach(node => {
    createPage({
      path: `/case-result/${node.slug}`,
      component: dateTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node,
      },
    })
  })
}


exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/post",
    component: require.resolve("./src/templates/post.js"),
    context: {},
    defer: true,
  })
}
