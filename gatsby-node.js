exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryCaseResult = await graphql(`
    {
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
  const queryAttorney = await graphql(`
    {
      allDatoCmsAttorney {
        nodes {
          id
          slug
          name
          location
          phoneNumber
          faxNumber
          practiceArea {
            slug
            title
          }
          caseResult {
            slug
            title
            subtitle
          }
          content {
            value
          }
          achievement {
            value
          }
        }
      }
    }
  `)
  const queryPracticeArea = await graphql(`
    {
      allDatoCmsPracticeArea {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)
  queryCaseResult.data.allDatoCmsCaseResult.nodes.forEach(node => {
    createPage({
      path: `/case-result/${node.slug}`,
      component: require.resolve(`./src/templates/case-result-post.js`),
      context: { node },
    })
  })
  queryAttorney.data.allDatoCmsAttorney.nodes.forEach(node => {
    createPage({
      path: `/attorney/${node.slug}`,
      component: require.resolve(`./src/templates/attorney-profile.js`),
      context: { node },
    })
  })
  queryPracticeArea.data.allDatoCmsPracticeArea.nodes.forEach(node => {
    createPage({
      path: `/practice-area/${node.slug}`,
      component: require.resolve(`./src/templates/pratice-area-post.js`),
      context: { node },
    })
  })
}
