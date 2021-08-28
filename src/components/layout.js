/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useRef, useEffect, useCallback } from "react"
import tw, { GlobalStyles } from "twin.macro"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />

      <div>
        <main tw="relative">
          <div>
            {children}
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
