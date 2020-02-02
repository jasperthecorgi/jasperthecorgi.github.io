import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "../../components/Banner/Banner";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <Banner className="Homepage__Banner" background="#64bfc8"/>
    </div>
  );
};
