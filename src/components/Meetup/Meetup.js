import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import MeetupIcon from "../../static/icon-meetup.svg";
import "./Meetup.scss";

export const Meetup = ({ background, className }) => {
  return (
    <div className={classNames("Meetup", className)} style={{ background: `${background}` }}>
      <div className="maxWidthContainer">
        <div>
          <div className="Meetup__Title">
            Meet with Jasper
            <br />
            and other corgi friends
          </div>
          <div className="Meetup__FindUs">
            <div>Find us on</div>
            <a href="https://www.meetup.com/Toronto-Corgi-Meetup-Group/" target="_blank" rel="noreferrer noopener">
              <img src={MeetupIcon} alt="Meetup" className="Meetup__MeetupIcon" />
            </a>
          </div>
          <div className="Meetup__GrpName">(Toronto Corgi Meetup Group)</div>
        </div>
        <CustomCarousel images={MeetupImages} />
      </div>
    </div>
  );
};

const MeetupImages = [
  "./static/MeetupPhoto/img1.jpg",
  "./static/MeetupPhoto/img2.jpg",
  "./static/MeetupPhoto/img3.jpg",
  "./static/MeetupPhoto/img4.jpg",
  "./static/MeetupPhoto/img5.jpg",
];
