import * as React from "react";
import tw from "twin.macro";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MaxContainer = tw.section`relative mx-auto max-w-screen-xl px-6 md:px-10`;

export const InternalLink = ({ children, ...props }) => {
  return (
    <AniLink
      tw="inline-block font-semibold"
      paintDrip
      hex="#f7f2ef"
      {...props}
    >
      {children}
    </AniLink>
  );
};

export const InternalLinkBtn = ({ children, ...props })=>{
  return (
    <button tw="inline-block my-4 bg-primaryBtn px-6 py-4 rounded-md text-beige ">
      <InternalLink {...props}>{children}</InternalLink>
    </button>
  )
}
