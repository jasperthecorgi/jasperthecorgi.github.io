import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "../../components/Banner/Banner";
import { Meetup } from "../../components/Meetup/Meetup";
import { Footer } from "../../components/Footer/Footer";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <Banner className="Homepage__Banner" background="#64bfc8"/>
      <Meetup/>
      <Footer/>
    </div>
  );
};
