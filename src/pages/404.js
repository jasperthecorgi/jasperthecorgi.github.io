import React, { useEffect, useRef } from "react";
import tw, { css } from "twin.macro";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { InternalLinkBtn, MaxContainer } from "../components/share-ui";

const NotFoundPage = ({ location }) => {
  // useEffect(()=>{
  //   navigate("/coupon/")
  // },[])

  return (
    <Layout location={location}>
      <Seo title="404 - Not Found" description="Seems like you are lost on Corgi Japser's website" />
      <section>
        <div tw="py-10 text-center bg-beige min-h-[calc(100vh - 120px)]">
          <MaxContainer>
            <div tw="flex flex-col md:(flex-row-reverse items-center)">
              <div tw="w-full text-center md:(w-1/2 text-left pl-16)">
                <h1 tw="text-5xl font-semibold text-green-700 leading-normal">404!</h1>
                <h2 tw="text-2xl text-green-700 mt-4">Looks like you are lost.</h2>
                <div tw="text-2xl text-green-700 leading-normal mt-2 mb-8">Let me help you to find your way to home page...</div>
                <InternalLinkBtn to="/">Homepage</InternalLinkBtn>
              </div>
            </div>
          </MaxContainer>
        </div>
      </section>
    </Layout>
  );
};
export default NotFoundPage;
