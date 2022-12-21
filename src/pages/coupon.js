import React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Footer } from "../components/Footer";
import { MaxContainer } from "../components/share-ui";

const CouponPage = ({ data, location }) => {
  const list = data?.allContentfulCoupon?.edges || []
  if (list.length === 0) {
    return null
  }
  list.sort((a,b)=>{
    return b.node.isPinned - a.node.isPinned
  })
  return (
    <Layout location={location} bgColor="darkBeige">
      <Seo title="Jasper's coupon" />
      <div tw="bg-darkBeige pb-5 min-h-screen text-green-700">
        <MaxContainer>
          <h1 tw="font-bold text-xl text-center text-green-700 rounded px-2.5 md:(mb-2)">Use Jasper's code to save!</h1>
          <h4 tw="text-base text-center text-green-700 rounded p-2.5 mb-2 md:(mb-6)">Let us know if you use one of our codes so we can give you a shout out!</h4>
          <div tw="grid grid-cols-2 gap-4 md:gap-10">
            {list.map(({node}) => (
              <a href={node.referralLink} target="_blank" key={node.id}>
                <div tw="bg-beige rounded p-2.5 shadow text-center md:(px-10 py-4)">
                  <h3 tw="font-semibold text-green-700 md:hidden">
                    {node.name}
                  </h3>
                  <div tw="text-xs mb-2 tracking-tight md:hidden">{node.description}</div>
                  <div tw="md:(flex items-center)">
                    <GatsbyImage image={getImage(node.image)} alt={node.name} tw="md:(w-40 h-40)" />
                    <div tw="md:(ml-10 text-left)">
                      <h3 tw="font-semibold text-green-700 text-lg hidden md:block">
                        {node.name}
                      </h3>
                      <div tw="text-sm mb-2 tracking-tight hidden md:block">{node.description}</div>
                      {node.discountCode && (
                        <div tw="md:(border-2 border-green-700 py-1 px-5 w-min)">
                          <div tw="mt-2 font-semibold md:mt-0">{node.discountCode}</div>
                          <div tw="text-sm whitespace-nowrap">
                            ({node.discount}% Off{node.isFirstBoxOnly && " on 1st Box"})
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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

export const data = graphql`
  query MyQuery {
    allContentfulCoupon {
      edges {
        node {
          id
          isFirstBoxOnly
          isPinned
          name
          description
          referralLink
          discount
          discountCode
          image {
            gatsbyImageData(width:300, height:300)
          }
        }
      }
    }
  }
`;
