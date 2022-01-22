import React from "react";
import { ImageContainer, Rectangle } from "../Header/HeaderElement";
import Heading from "../Heading";
import { DoubtContainer, DoubtContent } from "./DoubtsElement";

const Doubts = () => {
  const inputfield = {
    margin: "100px 20px 50px",
    border: "none",
    width: "60%",
    fontSize: "1.2em",
    borderBottom: " 2px solid black",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "200",
    color: "#4A4848",
    lineHeight: "29px",
    letterSpacing: "0em",
    textAlign: "left",
  };
  const inputStyle = {
    margin: "50px 20px",
    border: "none",
    width: "60%",
    fontSize: "1.2em",
    borderBottom: " 2px solid black",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "200",
    color: "#4A4848",
    lineHeight: "29px",
    letterSpacing: "0em",
    textAlign: "left",
  };
  const buttonfield = {
    padding: "15px 45px",
    borderRadius: "50px",
    borderColor: "black",
    marginBottom: "0 30px 20px",
    fontSize: "1.2em",
    backgroundColor: "transparent",
  };

  const formStyle = {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <DoubtContainer>
      <ImageContainer>
        <Rectangle />
      </ImageContainer>
      <DoubtContent>
        <Heading heading="Still having Doubts?" />
        <form style={formStyle}>
          <input
            style={inputStyle}
            placeholder="Your Name"
            required
            type="text"
          ></input>

          <input
            style={inputStyle}
            placeholder="Your Email"
            required
            type="email"
          ></input>

          <input
            style={inputStyle}
            placeholder="Your Contact No"
            required
            type="number"
          ></input>

          <input
            style={inputfield}
            placeholder="Message to us"
            required
            type="text"
          ></input>

          <button style={buttonfield} type="submit">
            Submit
          </button>
        </form>
      </DoubtContent>
    </DoubtContainer>
  );
};

export default Doubts;
