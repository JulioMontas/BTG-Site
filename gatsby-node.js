exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryCaseResult = await graphql(`{
    allDatoCmsCaseResult {
      nodes {
        id
        slug
        title
        subtitle
        content {
          value
        }
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
            coverImage {
              gatsbyImageData(width: 300, height: 300, placeholder: BLURRED, layout: FIXED)
            }
          }
          content {
            value
          }
          achievement {
            value
          }
          picture {
            gatsbyImageData(
              width: 200,
              height: 200,
              placeholder: BLURRED,
              layout: FIXED
            )
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
          subtitle
          content {
            value
          }
          coverImage {
            gatsbyImageData(
              placeholder: BLURRED
              width: 300
              height: 300
              forceBlurhash: false
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `)
  const queryBlogPost = await graphql(`
    {
      allDatoCmsPost {
        nodes {
          id
          slug
          title
          excerpt
          content {
            value
            blocks {
              id
            }
          }
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
  queryBlogPost.data.allDatoCmsPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { node },
    })
  })
}
