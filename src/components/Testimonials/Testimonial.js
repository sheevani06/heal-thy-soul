/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Heading from "../Heading";
import { Left } from "./TestimonialElement";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import background from "../../images/Dark Gradient 04 (1).png";
import bigquotes from "../../images/bigquotes.png";

const Testimonial = () => {
  const carousel = {
    width: "600px",
  };
  const myStyle = {
    padding: "0 100px 0px",
    width: "100%",
    backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={myStyle}>
      <div style={{ display: "flex" }}>
        <div>
          <Heading heading="Testimonials" />
          <Left>
            <Carousel style={carousel}>
              <Card />
              <Card />
              <Card />
            </Carousel>
          </Left>
        </div>
        <img
          src={bigquotes}
          style={{ width: "280px", height: "270px", marginLeft: "250px" }}
        ></img>
      </div>
    </div>
  );
};

export default Testimonial;
