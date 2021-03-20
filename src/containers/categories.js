import React from "react";
import Category from "./category";

const Categories = (props) => {
  let lstReviews = Object.keys(props.lstReviews).map((reviewKey) => {
    return (
      <Category
        key={reviewKey}
        image={props.lstReviews[reviewKey].image}
        title={props.lstReviews[reviewKey].title}
        description={props.lstReviews[reviewKey].description}
      />
    );
  });
  return (
    <div className="categories">
      <div className="categories-section__caption">
        <b>Browse</b> Our Most Popular Categories
      </div>
      {lstReviews}
    </div>
  );
};
export default Categories;
