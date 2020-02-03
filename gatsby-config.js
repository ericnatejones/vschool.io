require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `V School`,
        description: `Better Humans, Better Outcomes.`,
        author: `@vschool`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
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
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `vschool`,
                accessToken: `${process.env.PRISMIC_API_KEY}`,
                linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
            },
        },
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `https://blog.vschool.io`,
                contentApiKey: `7a801b092a229eef5613c5494e`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
