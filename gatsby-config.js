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
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://vschool.io`,
                stripQueryString: true,
            },
        },
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
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/vs_favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `vschool`,
                accessToken: process.env.PRISMIC_API_KEY,
                linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
            },
        },
        // {
        //     resolve: `gatsby-source-ghost`,
        //     options: {
        //         apiUrl: `https://blog.vschool.io`,
        //         contentApiKey: process.env.GHOST_API_KEY,
        //     },
        // },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                id: process.env.HOTJAR_ID,
                sv: 6,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: process.env.GOOGLE_TAG_MANAGER_ID,
                defaultDataLayer: { platform: "gatsby" },
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: process.env.FACEBOOK_PIXEL_ID,
            },
        },
        {
            resolve: `gatsby-plugin-intercom`,
            options: {
                appId: process.env.INTERCOM_APP_ID,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
