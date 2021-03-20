import React from "react";
import { Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const Card = (props) => {
  const styleAuth =
    props.background === "Black"
      ? "card_author card_author_focus"
      : "card_author";
  const styleReviewedBy =
    props.background === "Black"
      ? "card_reviewed-by card_reviewed-by_focus"
      : "card_reviewed-by";
  const styleCardDescription =
    props.background === "Black"
      ? "card_description card_description_focus"
      : "card_description";
  return (
    <Slide key={props.key} index={props.key}>
      <div className="card">
        <img
          className="card_img"
          src={require(`../../src${props.image}`).default}
          alt="book"
        />
        <div className={styleCardDescription}>{props.title} </div>
        <div className={styleAuth}>BY {props.author}</div>
        <div className={styleReviewedBy}> Reviewed By {props.reviewedBy}</div>
      </div>
    </Slide>
  );
};
export default Card;
