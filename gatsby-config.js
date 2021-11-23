module.exports = {
  siteMetadata: {
    title: `Jasper the Corgi`,
    description: `A corgi lives in Toronto. Sharing about corgi life and dog tips`,
    author: `@jerryzhao0423`,
    siteUrl: `https://jasperthecorgi.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-use-query-params",
    `gatsby-plugin-sitemap`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-L4KXZ5VT1R"],
        pluginConfig: {
          head: true,
          respectDNT: false,
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
