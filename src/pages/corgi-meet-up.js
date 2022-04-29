import React, {useEffect} from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Footer } from "../components/Footer";
import { MaxContainer } from "../components/share-ui";

const MeetupPage = ({ data, location }) => {

  return (
    <Layout location={location} bgColor="darkBeige">
      <Seo title="Toronto Corig Meetup" />
      <div tw="bg-darkBeige pb-5 min-h-screen text-green-700">
        <MaxContainer>
          <h1 tw="font-bold text-xl text-center text-green-700 rounded p-2.5 mb-4">Toronto Corgi Meetup</h1>

        </MaxContainer>
      </div>
    </Layout>
  );
};
export default MeetupPage;

export const query = graphql`
  query {
    image01: file(relativePath: { eq: "coupon/pooch.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image02: file(relativePath: { eq: "coupon/kag.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image03: file(relativePath: { eq: "coupon/corgily.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image04: file(relativePath: { eq: "coupon/charmybox.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image05: file(relativePath: { eq: "coupon/houndsonraw.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image06: file(relativePath: { eq: "coupon/hugsmart.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image07: file(relativePath: { eq: "coupon/crown_and_paw.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    } 
    image08: file(relativePath: { eq: "coupon/printypets.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image09: file(relativePath: { eq: "coupon/west_and_willow.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
    image10: file(relativePath: { eq: "coupon/sniff_and_bark.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300)
      }
    }
  }
`;
