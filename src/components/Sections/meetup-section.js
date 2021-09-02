import React from "react";
import "twin.macro";
import { MaxContainer } from "../share-ui";
import MeetupIcon from "../../images/icon-meetup.svg";
import MeetupBg from "../../images/meetup.png";
import IconPaw from "../../images/ic-paw.svg"

const MeetUp = () => (
  <div tw="py-10 bg-green-600 rounded-tl-lg rounded-br-lg text-white">
    <MaxContainer>
      <img src={MeetupBg} alt="Toronto Corgi Meetup" tw="mb-6 rounded-md w-5/6 mx-auto" />
      <div tw="flex items-center">
        <img src={IconPaw} alt="Corgi Meetup" tw="w-5 h-5 mr-1"/>
        <h3 tw="text-sm font-semibold">Corgi Meetup</h3>
      </div>
      <div tw="text-xl font-bold pt-1">Meet with more corgi friends!</div>
      <p tw="py-5">
        As corgi pawrents, we know that corgis always love to play with corgis! We organized corgi meetup in Great Toronto Area every month!
        Welcome to meet and play with Jasper and his friends!
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
