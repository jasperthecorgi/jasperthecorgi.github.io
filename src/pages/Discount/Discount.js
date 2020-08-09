import * as React from "react";
import Logo from "../../static/newlogo.JPG";
import "./Discount.scss";
import { Footer } from "../../components/Footer/Footer";

export const Discount = () => {
  return (
    <div className="discount">
      <div className="maxWidthContainer">
        <div className="header">
          <img src={Logo} alt="@corgijjjasper" />
          <div>
            Use Jasper's code to save!
          </div>
        </div>
        <div className="discountList">
          {list.map(item => (
            <a href={item.link} target="_blank">
              <div className="discountBox">
                <div className="discountTitle">
                  {item.name}
                </div>
                <div className="discountCode">
                  CODE: <span>{item.code} </span>
                  ({item.discount} Off)
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const list = [
  {
    id: 1,
    name: "Hounds on Raw",
    link: "https://www.houndsonraw.com/",
    insName: "@hounds_on_raw",
    insLink: "https://www.instagram.com/hounds_on_raw/",
    discount: "10%",
    code: "CORGIJASPER",
  },
  {
    id: 2,
    name: "Corgiology",
    discount: "10%",
    link: "https://corgi-ology.com/",
    insName: "@corgiology",
    insLink: "https://www.instagram.com/corgiology/",
    code: "CORGIJASPER",
  },
  {
    id: 3,
    name: "Charmy Box",
    link: "https://charmyboxshop.com/",
    insName: "@charmypetbox",
    insLink: "https://www.instagram.com/charmypetbox/",
    discount: "15%",
    code: "CORGIJASPER15",
  },
];
