import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useWindowCanScrollUp } from "../../hooks";
import Logo from "../../static/Logo.png";

export const Navbar = () => {
  const canScrollUp = useWindowCanScrollUp();

  return (
    <nav role="navigation" className={classNames("Navbar", { "Navbar--collapsed": canScrollUp })}>
      <div className="Navbar__Container">
        <div className="Navbar__SubContainer">
          <Link to="/" className="Navbar__Link">
            Blog
          </Link>
          <Link to="/" className="Navbar__Link">
            Gallery
          </Link>
        </div>
        <div className="Navbar__Logo">
          <Link to="/">
            <img src={Logo} alt="Jasper the Corgi" />
          </Link>
        </div>
        <div className="Navbar__SubContainer">
          <Link to="/" className="Navbar__Link">
            About Us
          </Link>
          <Link to="/" className="Navbar__Link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
