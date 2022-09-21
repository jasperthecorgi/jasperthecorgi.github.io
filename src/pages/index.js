import React, { useEffect, useRef } from "react";
import tw, { css } from "twin.macro";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MeetUp from "../components/Sections/meetup-section";
import FollowMe from "../components/Sections/social-media-section";
import { MaxContainer } from "../components/share-ui";
import CouponHome from "../components/Sections/coupon-section";
import AboutMe from "../components/Sections/aboutme-section";
import HeroImg from "../images/hero.jpg"
import HeroTexture from "../images/hero-texture.svg"

const IndexPage = ({ location }) => {
  // useEffect(()=>{
  //   navigate("/coupon/")
  // },[])

  return (
    <Layout location={location}>
      <Seo title="Home" description="Welcome to Corgi Japser's website" />
      <section>
        <div tw="py-10 text-center bg-beige">
          <MaxContainer>
            <div tw="flex flex-col md:(flex-row-reverse items-center)">
              <div tw="w-full text-center md:(w-1/2 text-left pl-16)">
                <div tw="text-2xl text-green-700">Hi! Welcome to my page!</div>
                <h1 tw="text-5xl font-semibold text-green-700 leading-normal">I'm Jasper</h1>
                <h2 tw="text-2xl text-green-700 leading-normal">A Pembroke Welsh Corgi</h2>
              </div>
              <img src={HeroImg} alt="Jasper the corgi" tw="rounded-md mt-10 mb-4 w-full md:(w-1/2)"/>
            </div>
            <img src={HeroTexture} alt='' tw="absolute w-72" css={[css`opacity: 0.16;bottom:-50%;left:0`]}/>
          </MaxContainer>
        </div>
        <AboutMe/>
        <CouponHome/>
        <MeetUp />
        <FollowMe />
      </section>
    </Layout>
  );
};
export default IndexPage;
