import React from "react";
import "twin.macro";
import { InternalLinkBtn, MaxContainer } from "../share-ui";
import IconCoupon from "../../images/ic-coupon.svg"

const CouponHome = () => (
  <div tw="py-10 bg-beige text-green-700">
    <MaxContainer>
      <div tw="flex items-center">
        <img src={IconCoupon} alt="Coupon" tw="w-5 h-5 mr-1"/>
        <h3 tw="text-sm text-mainBlack font-medium">Coupons</h3>
      </div>
      <div tw="text-3xl font-semibold pt-4">Save with Jasper!</div>
      <p tw="py-4 text-mainBlack text-sm">
        <p tw="my-2">We love to buy great merchandise for Jasper.</p>
        <p tw="my-2">And we are honored to collaborate with these awesome brands!</p>
        <p tw="my-2">Welcome to use Jasper's coupons to save if you like those products too!</p>
      </p>
      <InternalLinkBtn to="/coupon">View Coupons</InternalLinkBtn>
    </MaxContainer>
  </div>
);
export default CouponHome;
