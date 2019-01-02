import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
/*import { StaticQuery, graphql } from 'gatsby'*/

import Header from './header'
import './layout.css'
import Footer from './Footer';

const Layout = ({ children }) => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header />
        {children()}
        <Footer data={data}>
          Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:support@drivescoop.com">Email us</a> with any questions  - Terms of Service - Privacy Policy . © 2018
        </Footer>
      </div>
  )
   
Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query siteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink {
      edges {
        node {
          title
          url 
          createdAt
        }
      }
    }
  }
`