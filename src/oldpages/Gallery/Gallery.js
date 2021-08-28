import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { CategorySelector } from "../../components/CategorySelector/CategorySelector";
import categoryList from "../../data/gallery-category.json";

export const Gallery = () => {
  return (
    <div className="Gallery">
      <Navbar />
      <CategorySelector categoryList={categoryList} />
    </div>
  );
};
