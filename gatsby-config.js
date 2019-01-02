module.exports = {
  siteMetadata: {
    title: 'DriveScoop',
    description: 'Home for all things car sharing related. Why let your car sit idle when you can rent to a user in need? DriveScoop provides cost-effective carpooling options that connect renters to owners. This is possible because we provide the technology to enable car owners to rent their vehicles to others hassle free.',
    keywords: 'car sharing, drive, ride sharing, ride share, auto share, rent your car, make money renting your car, car rental'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '4ja9vdqnktzm',
        accessToken: '8971988287cbab9b3319e837b9d681b9f657954c3283243647183152081874fb'
      }
    }
  ],
}
    //'gatsby-transformer-sharp',
    //'gatsby-plugin-sharp',
    //{
      //resolve: `gatsby-plugin-manifest`,
      //options: {
        //name: 'gatsby-starter-default',
        //short_name: 'starter',
        //start_url: '/',
        //background_color: '#663399',
        //theme_color: '#663399',
        //display: 'minimal-ui',
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      //},
    //},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  

