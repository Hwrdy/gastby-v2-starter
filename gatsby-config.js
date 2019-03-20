module.exports = {
  siteMetadata: {
    title: 'Title',
    siteUrl: 'https://www.google.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-component',
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'DEXON',
    //     short_name: 'DEXON',
    //     start_url: '/',
    //     background_color: '#101010',
    //     theme_color: '#101010',
    //     display: 'minimal-ui',
    //     icon: 'src/assets/ic-header-logo.svg',
    //   },
    // },
  ],
};
