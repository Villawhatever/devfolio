require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    // Your Name
    name: "Andrew \"Villa\" Villarrubia",
    // Main Site Title
    title: `Andrew Villarrubia | Developer and Magic Judge`,
    // Description that goes under your name in main bio
    description: `Fan of coding standards and card game rules`,
    // Optional: Twitter account handle
    author: null,
    // Optional: Github account URL
    github: `https://github.com/Villawhatever`,
    bluesky: `https://bsky.app/profile/villawhatever.bsky.social`,
    // Optional: LinkedIn account URL
    linkedin: null,
    // Content of the About Me section
    about: `Lego Mindstorm got me into programming when I was a kid, and I"ve been at it since.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: "Moleman",
        description:
          "A repo of \"unofficial\" official Magic rulings built on React and MongoDB",
        link: "https://mtgmoleman.netlify.app/",
      },
      {
        name: "Magic Comprehensive Rules for JudgeApps",
        description:
          `Parses the Magic comprehensive rules into a templated, hyperlinked WordPress-ified HTML page.`,
        link: "https://github.com/SethCurry/mtg-html-rules/tree/judgeapps-wordpress",
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: "Paylocity",
        description: "Full-Stack Developer, December 2021 - Present",
      },
      {
        name: "Magic Judge",
        description: "Level 2 (Judge Program), Level 3 (Judge Foundry), Feb 2017 - Present",
      },
    ],
    skills: [
      {
        name: "Languages & Frameworks",
        description: "C#, Typescript, React, Go, Python",
      },
      {
        name: "Databases",
        description: "SQL, Mongo",
      },
      {
        name: "Other",
        description: "Docker, API design, Agile",
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: process.env.MONGODB_CONNECTIONSTRING,
        dbName: process.env.MONGODB_DBNAME,
        collection: process.env.MONGODB_COLLECTION,
        extraParams: {
          ssl: true,
          authSource: process.env.MONGODB_AUTHSOURCE,
          retryWrites: true
        }
      }
    },
  ],
};
