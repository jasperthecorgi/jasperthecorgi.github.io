import React from "react";
import "twin.macro";
import { MaxContainer } from "../share-ui";
import MeetupIcon from "../../images/icon-meetup.svg";
import MeetupBg from "../../images/meetup.png";
import IconPaw from "../../images/ic-paw.svg"

const MeetUp = () => (
  <div tw="py-10 bg-darkBeige text-green-700">
    <MaxContainer>
      <img src={MeetupBg} alt="Toronto Corgi Meetup" tw="mb-8 rounded-sm w-5/6 mx-auto" />
      <div tw="flex items-center">
        <img src={IconPaw} alt="Corgi Meetup" tw="w-5 h-5 mr-1"/>
        <h3 tw="text-sm text-mainBlack font-medium">Corgi Meetup</h3>
      </div>
      <div tw="text-2xl font-semibold pt-4">Meet with more corgi friends!</div>
      <p tw="py-4 text-mainBlack text-sm">
        <p tw="my-2">As corgi pawrents, we know that corgis always love to play with corgis! </p>
        <p tw="my-2">We organized corgi meetup in Great Toronto Area every month!</p>
        <p tw="my-2">Welcome to meet and play with Jasper and his friends!</p>
      </p>
      <div tw="inline-block text-lg font-bold">Join the group here!</div>
      <a href="https://www.meetup.com/Toronto-Corgi-Meetup-Group/" target="_blank" rel="noreferrer noopener">
        <img src={MeetupIcon} alt="Toronto Corgi Meetup Group" tw="w-24 inline-block ml-2" />
      </a>
      <div tw="text-sm">(Toronto Corgi Meetup Group)</div>
    </MaxContainer>
  </div>
);
export default MeetUp;
