import React from "react";
import "./CategorySelector.scss";

export const CategorySelector = ({ categoryList }) => {
  return (
    <div className="CategorySelector">
      <div className="maxWidthContainer">
        <div className="CategorySelector__Content">
          {categoryList.map(item => (
            <div key={item.id} className="CategorySelector__SingleCategory">
              <div className="CategorySelector__ImageBg">
                <img src={item.categoryBackground} alt={item.categoryName}/>
              </div>
              <div className="CategorySelector__ImageOverlay" />
              <div>{item.categoryName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
