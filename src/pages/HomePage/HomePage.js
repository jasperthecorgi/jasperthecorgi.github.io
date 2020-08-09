import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "../../components/Banner/Banner";
import { Meetup } from "../../components/Meetup/Meetup";
import { Footer } from "../../components/Footer/Footer";
// import DrawPrize from "../../components/DrawPrize/DrawPrize";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <Banner className="Homepage__Banner" background="#fff"/>
      <Meetup/>
      {/*<DrawPrize/>*/}
      <Footer/>
    </div>
  );
};
