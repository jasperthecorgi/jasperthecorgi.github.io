import React, { useEffect } from "react";
import tw from "twin.macro";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MeetUp from "../components/Sections/meetup-section";
import FollowMe from "../components/Sections/social-media-section";

const IndexPage = ({ location }) => {
  // useEffect(()=>{
  //   navigate("/coupon/")
  // },[])
  return (
    <Layout location={location}>
      <Seo title="Home" description="Welcome to Corgi Japser's website" />
      <MeetUp/>
      <FollowMe/>
    </Layout>
  );
};
export default IndexPage;
