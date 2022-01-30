exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/post",
    component: require.resolve("./src/templates/post.js"),
    context: {},
    defer: true,
  })
}
