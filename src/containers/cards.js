import React, { Component } from "react";
import Card from "./card";

import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {  slides: 5 };
  }

  handleResize = (e) => {
     
    const windowSize = window.innerWidth;

    // const thumbWidth = (windowSize >= 480 && 100) || 75;
    // this.setState((prevState) => {
    //   return {
    //     windowSize,
    //     thumbWidth,
    //   };
    // });
    if (windowSize < 768) {
      this.setState({slides:2});
    }else if(windowSize >= 768 && windowSize <1024){
      this.setState({slides:4});
    }else if(windowSize > 1024){
      this.setState({slides:5});
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const lstCards = Object.keys(this.props.lstBooks).map((bookKey) => {
      return (
        <Card
          key={this.props.lstBooks[bookKey].id}
          background={this.props.background}
          image={this.props.lstBooks[bookKey].image}
          title={this.props.lstBooks[bookKey].title}
          author={this.props.lstBooks[bookKey].author}
          reviewedBy={this.props.lstBooks[bookKey].reviewedBy}
        />
      );
    });

    const styleTitle =
      this.props.background === "Black"
        ? "cards-title cards-title_focus"
        : "cards-title";
    return (
      <CarouselProvider
        className="carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={200}
        totalSlides={lstCards.length}
        visibleSlides={this.state.slides}
      >
        <div className={styleTitle}>
          <label>{this.props.title} </label>
       
        </div>
        <div className="cards-cont">
          <ButtonNext className="next">
            <img
              src={require("../../src/images/arrow1.png").default}
              alt="book"
            />
          </ButtonNext>
          <ButtonBack className="back">
            <img
              src={require("../../src/images/arrow2.png").default}
              alt="book"
            />
          </ButtonBack>
          <Slider>{lstCards}</Slider>
        </div>
      </CarouselProvider>
    );
  }
}
export default Cards;
