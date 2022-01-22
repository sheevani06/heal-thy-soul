/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import smallquotes from "./smallquote.png";
import circle from "./circle.png";
import { Top, Right } from "./TestimonialElement";
const Card = () => {
  const card = {
    width: "400px",
    height: "330px",
    backgroundColor: "#fff",
    color: "#fff",
    fontSize: "30px",
    margin: "0 20px",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={card}>
      <Top>
        <img src={smallquotes} style={{ width: "20px" }} />
        <h6 style={{ margin: "20px 0", fontSize: "18px", color: "black" }}>
          lorem impsum
        </h6>
        <p
          style={{
            fontSize: "12px",
            color: "black",
            textOverflow: "visible",
            width: "250px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra purus
          sit vestibulum amet amet vestibulum nisl. Orci, orci massa quam ut.
          Lacinia iaculis nisi, ac pharetra volutpat vel dictum. Id orci purus
          vitae orci. Cras urna ac id magnis dolor vitae quam. Urna, eget massa
          ullamcorper in orn
        </p>
      </Top>
      <Right>
        <img src={circle} style={{ width: "80px", paddingRight: "20px" }} />
      </Right>
    </div>
  );
};

export default Card;
