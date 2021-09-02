import React  from "react";
import tw from "twin.macro";
import { MaxContainer } from "../share-ui";
import IconHong from "../../images/social/icon-hong.png";
import IconIG from "../../images/social/icon-ig.png";
import IconTikTok from "../../images/social/icon-tiktok.png";
import IconYoutube from "../../images/social/icon-youtube.png";

const Logo = tw.img`w-8 h-8`;

const FollowMe = () => (
  <div tw="py-8">
    <MaxContainer>
      <h3 tw="font-bold text-center text-xl">Follow me on social media!</h3>
      <div tw="flex justify-around items-center py-6">
        <a href="https://www.instagram.com/corgijjjasper/" target="_blank">
          <Logo src={IconIG} alt="Instagram - Corgijjjasper" />
        </a>
        <a href="https://www.tiktok.com/@corgijjjasper" target="_blank">
          <Logo src={IconTikTok} alt="Tiktok - Corgijjjasper" />
        </a>
        <a href="https://www.youtube.com/channel/UCFmpIp4TjvrWs-FQqUNC9HQ" target="_blank">
          <Logo src={IconYoutube} alt="Youtube - Jasper the corgi" />
        </a>
        <a href="https://www.xiaohongshu.com/user/profile/5c72fc8b000000001101969a" target="_blank">
          <Logo src={IconHong} alt="xiaohongshu" />
        </a>
      </div>
      <div tw="text-center text-sm">
        We appreciate your follows and likes!
        <br />
        Let's keep connected!
      </div>
    </MaxContainer>
  </div>
);
export default FollowMe;
