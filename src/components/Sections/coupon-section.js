import React from "react";
import "twin.macro";
import { ExternalLinkBtn, InternalLinkBtn, MaxContainer } from "../share-ui";
import IconCoupon from "../../images/ic-coupon.svg"
import IconAmazon from "../../images/ic-amazon.svg"

const CouponHome = () => (
  <div tw="py-10 bg-beige text-green-700 md:py-20">
    <MaxContainer>
      <div tw="md:(flex items-stretch)">
        <div tw="mb-4 md:(flex flex-col items-center px-8 mb-0)">
          <div tw="flex items-center">
            <img src={IconCoupon} alt="Coupon" tw="w-5 h-5 mr-2"/>
            <h3 tw="text-sm text-mainBlack font-medium md:(text-lg)">Coupons</h3>
          </div>
          <div tw="text-3xl font-semibold pt-4 md:(text-4xl pt-6)">Save with Jasper!</div>
          <div tw="py-4 text-mainBlack text-sm md:(text-lg py-8)">
            <p tw="my-2">We love to buy great merchandise for Jasper.</p>
            <p tw="my-2">And we are honored to collaborate with these awesome brands!</p>
            <p tw="my-2">Welcome to use Jasper's coupons to save if you like those products too!</p>
          </div>
          <InternalLinkBtn to="/coupon">View Coupons</InternalLinkBtn>
        </div>
        <div tw="w-3/4 h-0.5 bg-green-700 md:(w-0.5 h-auto my-[7%])"/>
        <div tw="mt-8 md:(mt-0 px-8 flex flex-col items-center justify-between)">
          <div tw="md:(flex flex-col items-center)">
            <div tw="flex items-center">
              <img src={IconAmazon} alt="Coupon" tw="w-5 h-5 mr-2"/>
              <h3 tw="text-sm text-mainBlack font-medium md:(text-lg)">Amazon</h3>
            </div>
            <div tw="text-3xl font-semibold pt-4 md:(text-4xl pt-6)">Shop with Jasper!</div>
            <div tw="py-4 text-mainBlack text-sm md:(text-lg py-8)">
              <p tw="my-2">Check out what we pick for Jasper from Amazon.</p>
              <p tw="my-2">We only recommend products we have used and truly love!</p>
            </div>
          </div>
          <ExternalLinkBtn href="https://www.amazon.ca/shop/corgijjjasper">
            Amazon Storefront
          </ExternalLinkBtn>
        </div>
      </div>
    </MaxContainer>
  </div>
);
export default CouponHome;
