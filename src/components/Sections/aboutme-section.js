import React from "react";
import "twin.macro";
import { InternalLink, MaxContainer } from "../share-ui";

const AboutMe = () => (
  <div tw="py-10 bg-darkBeige text-green-700 md:py-20">
    <MaxContainer>
      <div tw="md:(flex flex-col items-center)">
        <div tw="flex items-center">
          <h3 tw="text-sm text-mainBlack font-medium md:(text-lg)">About Me</h3>
        </div>
        <div tw="text-3xl font-semibold pt-4 md:(text-4xl pt-6)">Living my best life!</div>
        <div tw="py-4 text-mainBlack text-sm md:(text-lg py-8)">
          <p tw="my-2">Born Jul 2, 2019 in Taiwan, I came all the way to Canada and was brought to my forever home on Sep 2, 2019.</p>
          <p tw="my-2">I am a handsome corgi with little eyebrows and eyeliners. I have a long but fit body.</p>
          <p tw="my-2">I'm a pupfluencer living my best life in Toronto. I'm also a foodie and hiking master.</p>
        </div>
      </div>
    </MaxContainer>
  </div>
);
export default AboutMe;
