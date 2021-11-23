/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useRef, useEffect, useCallback } from "react"
import { Helmet } from "react-helmet";
import tw, { GlobalStyles, css } from "twin.macro"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import { Navbar } from "./Navbar/Navbar";

const Layout = ({ children, bgColor }) => {
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
          <Navbar bgColor={bgColor} />
          {children}
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
