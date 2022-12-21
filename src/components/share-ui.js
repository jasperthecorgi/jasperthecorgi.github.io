import * as React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";

export const MaxContainer = tw.section`relative mx-auto max-w-screen-xl px-6 md:px-10`;

export const InternalLink = ({ children, ...props }) => {
  return (
    <Link
      tw="inline-block font-semibold"
      {...props}
    >
      {children}
    </Link>
  );
};

export const InternalLinkBtn = ({ children, ...props })=>{
  return (
    <button tw="inline-block my-4 bg-primaryBtn px-6 py-4 rounded-md text-beige ">
      <InternalLink {...props}>{children}</InternalLink>
    </button>
  )
}

export const ExternalLinkBtn = ({ children, ...props })=>{
  return (
    <button tw="inline-block my-4 bg-primaryBtn px-6 py-4 rounded-md text-beige font-semibold">
      <a {...props}>{children}</a>
    </button>
  )
}
