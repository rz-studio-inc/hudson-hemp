const path = require("path")

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPageTemplate {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicSplitPageTemplate {
        edges {
          node {
            uid
            data {
              page_title {
                text
              }

            }
          }
        }
      }
    }
  `);

  const template = path.resolve("src/templates/PrimaryLayout.js")
  const altTemplate = path.resolve("src/templates/SplitLayout.js");

  pages.data.allPrismicPageTemplate.edges.forEach(edge => {

    if (edge.node.uid == 'home') {
      console.log('index');
      createPage({
        path: `/`,
        component: template,
        context: {
          uid: edge.node.uid
        }
      });
    } else {

      createPage({
        path: `/${edge.node.uid}`,
        component: template,
        context: {
          uid: edge.node.uid,
        },
      })
    }
  })

  pages.data.allPrismicSplitPageTemplate.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: altTemplate,
      context: {
        uid: edge.node.uid
      }
    })
  })
}