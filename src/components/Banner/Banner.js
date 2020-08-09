import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Banner.scss";

export const Banner = ({background, className}) => {
  return (
    <div className={classNames("Banner",className)} style={{background:`${background}`}}>
      <div className="maxWidthContainer">
      </div>
    </div>
  );
};
