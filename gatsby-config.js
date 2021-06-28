module.exports = {
  siteMetadata: {
    title: 'Sputnikfy - Spotify Clone',
    description: 'Clone de Spotify by Maximiliano Arrieta',
    author: 'Maximiliano Arrieta <arrieta.maxi18@gmail.com>',
    siteUrl: 'https://the-netflix.netlify.app/'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png'
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ]
}
