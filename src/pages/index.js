import React, { useEffect } from "react";
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => {
  // useEffect(()=>{
  //   navigate("/coupon/")
  // },[])
  return (
    <Layout location={location}>
      <Seo title="Home" description="Welcome to Corgi Japser's website" />
    </Layout>
  )
}
export default IndexPage
