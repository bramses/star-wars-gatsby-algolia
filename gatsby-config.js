require('dotenv').config()

const myQuery = `{
  swapi {
    allPersons {
      name
      birthYear
      height
      species {
        name
      }
      mass
      homeworld {
        name
      }
      vehicles {
        name
      }
    }
  }
}`

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.swapi.allPersons.map( node => {
      if (node.birthYear) {
        node.birthYear = Number(node.birthYear.replace('BBY', ''))
      }
      return node
    }), // optional
    indexName: 'star-wars-characters', // overrides main index name, optional
  },
];

module.exports = {
  siteMetadata: {
    title: `Galaxy Quest`,
    description: `Welcome to the Algolia and Gatsby implementation! Here you can see a full demo of how Algolia and Gatsby can be integrated on  a frontend and a backend.`,
    author: `@algolia`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.APP_ID,
        apiKey: process.env.API_KEY,
        indexName: 'star-wars-characters', // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url: "https://api.graphcms.com/simple/v1/swapi"
      }
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
