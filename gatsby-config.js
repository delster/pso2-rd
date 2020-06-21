module.exports = {
  siteMetadata: {
    title: `Red Drop (Sh2)`,
    description: `Red Drop is a Ship 2 alliance on PSO2 NA.`,
    author: `@delsterdev`
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    // GraphQL Source: Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    // GraphQL Source: Pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    // MDX Parser
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    // Styling
    `gatsby-plugin-styled-components`,
    // Image Optimization
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // PWA Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pso-red-drop-alliance`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#770000`,
        theme_color: `#770000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    // Progressive Web App + Offline functionality
    `gatsby-plugin-offline`
  ]
}
