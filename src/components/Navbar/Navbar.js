import * as React from "react";
import { Link } from "gatsby";
import { useWindowCanScrollUp } from "../../hooks";
import Logo from "../../static/Logo.png";

export const Navbar = () => {
  const canScrollUp = useWindowCanScrollUp();

  return (
    <nav role="navigation" className={"Navbar"}>
      <div className="Navbar__Container maxWidthContainer isDesktopOnly">
        <div className="Navbar__SubContainer">
          <Link to="/" className="Navbar__Link">
            Blog
          </Link>
          <Link to="/gallery" className="Navbar__Link">
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
      <div className="Navbar__MobileContainer isMobileOnly">
        <div className="Navbar__Logo">
          <Link to="/">
            <img src={Logo} alt="Jasper the Corgi" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
