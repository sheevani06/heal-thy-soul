import React from "react";
import { ImageContainer } from "../Header/HeaderElement";
import Heading from "../Heading";
import { DoubtContainer, DoubtContent } from "./DoubtsElement";
import image from "../../images/Doubts.png";
const Doubts = () => {
  const buttonfield = {
    padding: "15px 45px",
    borderRadius: "50px",
    borderColor: "black",
    marginBottom: "0 30px 20px",
    fontSize: "1.2em",
    backgroundColor: "transparent",
  };

  return (
    <DoubtContainer>
      <ImageContainer>
        <img src={image} alt="flowee"></img>
      </ImageContainer>
      <DoubtContent>
        <Heading heading="Still having Doubts?" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue
          sollicitudin nullam enim lacus, feugiat. Aliquam suscipit donec at
          risus, fringilla egestas. Nisi dignissim laoreet viverra aliquet
          condimentum. Enim semper sapien ut facilisi ullamcorper venenatis
          vitae quis. Eu purus malesuada eget sit.
        </p>

        <button style={buttonfield} type="submit">
          Contact Us
        </button>
      </DoubtContent>
    </DoubtContainer>
  );
};

export default Doubts;
