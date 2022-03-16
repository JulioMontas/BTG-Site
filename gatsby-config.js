require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `BTG | Barnes Trial Group`,
    description: `If you have been injured in an accident, turn to the Barnes Trial Group in Tampa. Twenty years of trial experience. Call 813-251-0777.`,
    author: `@BTGLaw`,
    siteUrl: `https://btg-site.netlify.app/`,
  },
  plugins: [{
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: process.env.DATO_API_TOKEN,
      previewMode: true,
      disableLiveReload: false,
      localeFallbacks: {
        it: ['en'],
      },
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://btg-site.netlify.app/`,
    },
  },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Barnes Trial Group`,
        description: `Finding the right lawyer for any injured accident.`,
        short_name: `BTG`,
        lang: `en`,
        start_url: `/`,
        background_color: `#3D586B`,
        theme_color: `#3D586B`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ],
}
