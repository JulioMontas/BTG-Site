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
        attorney {
          id
          slug
          name
          location
          picture {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, layout: FIXED)
          }
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
            coverImage {
              gatsbyImageData(
                width: 300
                height: 250
                layout: CONSTRAINED
                forceBlurhash: false
                placeholder: BLURRED
              )
            }
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
        attorney {
          id
          slug
          name
          location
          picture {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, layout: FIXED)
          }
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

  const queryDisclaimer = await graphql(`
    {
      datoCmsDisclaimer {
        title
        content {
          value
        }
      }
    }
  `)
  queryCaseResult.data.allDatoCmsCaseResult.nodes.forEach(node => {
    createPage({
      path: `/testimonial-and-case-study/${node.slug}`,
      component: require.resolve(`./src/templates/case-result-post.js`),
      context: { node },
    })
  })
  queryAttorney.data.allDatoCmsAttorney.nodes.forEach(node => {
    createPage({
      path: `/about-us/attorney/${node.slug}`,
      component: require.resolve(`./src/templates/attorney-profile.js`),
      context: { node },
    })
  })
  queryPracticeArea.data.allDatoCmsPracticeArea.nodes.forEach(node => {
    createPage({
      path: `/services/${node.slug}`,
      component: require.resolve(`./src/templates/pratice-area-post.js`),
      context: { node },
    })
  })
  queryBlogPost.data.allDatoCmsPost.nodes.forEach(node => {
    createPage({
      path: `/guide-and-resources/${node.slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { node },
    })
  })
}
