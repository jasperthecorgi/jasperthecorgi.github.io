import React, { useState } from "react";
import { Link } from "gatsby";
import tw from "twin.macro";
import Logo from "../../static/Logo.png";
import { InternalLink, MaxContainer } from "../share-ui";

const MenuIcon = ({ opened, ...props }) => {
  return (
    <svg viewBox="0 0 30 13" css={[tw`w-8 h-8`]} {...props}>
      <g stroke="#151110" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
        <path d="M1 1h28" css={[tw`transition-transform duration-300 transform origin-center`, opened && tw`-rotate-45 translate-y-1`]} />
        <path d="M1 12h28" css={[tw`transition-transform duration-300 transform origin-center`, opened && tw`rotate-45 -translate-y-1`]} />
      </g>
    </svg>
  );
};
export const Navbar = ({ bgColor }) => {
  const navColor = bgColor === "darkBeige" ? tw`bg-darkBeige` : tw`bg-beige`;
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const NavItem = tw.div`font-semibold py-5`
  return (
    <nav role="navigation" css={[tw`py-5`, navColor, menuOpen && tw`fixed inset-0 z-10`]}>
      <MaxContainer>
        <div tw="flex justify-between items-center">
          <Link to="/">{/*<img src={Logo} alt="Jasper the Corgi" tw="w-8 h-8" />*/}</Link>
          <MenuIcon opened={menuOpen} onClick={openMenu} />
        </div>
        <div css={menuOpen ? tw`block text-center py-20`:tw`hidden`}>
          <NavItem>
            <InternalLink to="/">Home</InternalLink>
          </NavItem>
          <NavItem>
            <InternalLink to="/coupon">Coupons</InternalLink>
          </NavItem>
          <NavItem>More to come</NavItem>
        </div>
      </MaxContainer>
    </nav>
  );
};
