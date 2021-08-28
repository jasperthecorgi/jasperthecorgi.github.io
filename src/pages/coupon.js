import React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Footer } from "../components/Footer/Footer";
import { MaxContainer } from "../components/share-ui";

const CouponPage = ({ data, location }) => {
  const list = [
    {
      id: 6,
      name: "KAG Pet",
      image: data.image02,
      link: "https://kagpet.com/",
      discount: "10%",
      code: "JASPER10",
    },
    {
      id: 5,
      name: "Pooch Botanics",
      image: data.image01,
      link: "https://poochbotanics.com/",
      discount: "10%",
      code: "JASPER10",
    },
    {
      id: 3,
      name: "Charmy Box",
      image: data.image04,
      link: "https://charmyboxshop.com/",
      insName: "@charmypetbox",
      insLink: "https://www.instagram.com/charmypetbox/",
      discount: "15%",
      code: "CORGIJASPER15",
    },
    {
      id: 1,
      name: "Hounds on Raw",
      image: data.image05,
      link: "https://www.houndsonraw.com/",
      insName: "@hounds_on_raw",
      insLink: "https://www.instagram.com/hounds_on_raw/",
      discount: "10%",
      code: "CORGIJASPER",
    },
  ];
  return (
    <Layout location={location}>
      <Seo title="Jasper's coupon" />
      <div tw="bg-gradient-to-b from-lightGreen to-darkGreen py-5 min-h-screen">
        <MaxContainer>
          <h1 tw="font-bold text-xl text-center bg-white rounded p-2.5 shadow my-4">Use Jasper's code to save!</h1>
          <div tw="grid grid-cols-2 gap-4">
            {list.map((item) => (
              <a href={item.link} target="_blank">
                <div tw="bg-white rounded p-2.5 shadow text-center">
                  <h3 tw="font-semibold mb-2">{item.name}</h3>
                  <GatsbyImage image={getImage(item.image)} alt={item.name} />
                  <div tw="mt-2 font-semibold">{item.code} </div>
                  <div>({item.discount} Off)</div>
                </div>
              </a>
            ))}
          </div>
        </MaxContainer>
      </div>
    </Layout>
  );
};
export default CouponPage;

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
  }
`;
