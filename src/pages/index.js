import React, { useEffect, useRef } from "react";
import tw, { css } from "twin.macro";
import { Link } from 'react-scroll'
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
import ChevronDown from "../images/icon-chevron-down.svg"

const IndexPage = ({ location }) => {
  // useEffect(()=>{
  //   navigate("/coupon/")
  // },[])
  const goToXmas = () =>{
    navigate("/xmas-card-form")
  }

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
              <Link to="couponSection" smooth={true} duration={500} tw=" mt-6 md:hidden">
                <div tw="text-green-700 mb-1 text-sm">Scroll to Coupons</div>
                <img src={ChevronDown} alt="scroll" tw="inline-block animate-bounce"/>
              </Link>
            </div>
            <img src={HeroTexture} alt='' tw="absolute w-72 pointer-events-none" css={[css`opacity: 0.16;bottom:-50%;left:0`]}/>
          </MaxContainer>
        </div>
        {/*<div tw="py-10 text-center bg-beige border-t-2 border-b-2 border-green-700 text-green-700">*/}
        {/*  <MaxContainer>*/}
        {/*    <div tw="text-2xl font-semibold mb-4">Holiday season is here!</div>*/}
        {/*    <div>We want to say thanks to everyone following and support us!</div>*/}
        {/*    <div>Fill a form today and get a holiday card from Jasper!</div>*/}
        {/*    <button onClick={goToXmas}*/}
        {/*            tw="bg-primaryBtn text-beige w-40 rounded-lg py-2 mt-4"*/}
        {/*    >Fill the Form</button>*/}
        {/*  </MaxContainer>*/}
        {/*</div>*/}
        <AboutMe/>
        <div id="couponSection">
          <CouponHome/>
        </div>
        <MeetUp />
        <FollowMe />
      </section>
    </Layout>
  );
};
export default IndexPage;
