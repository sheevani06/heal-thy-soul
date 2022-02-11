import React from "react";
import Heading from "../Heading";
import Container from "./Container";
import { Left } from "./Section2Element";
import { Right } from "./Section2Element";
import { Box } from "./Section2Element";
const Section2 = () => {
  const myStyle = {
    backgroundImage: `url("../../images/Dark Gradient 04.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "0 100px 0px",
  };
  return (
    <div style={myStyle}>
      <Heading heading="Be a Part of" />
      <Box>
        <Left>
          <Container container="Connect With Us" />
          <Container container="Heal Together" />
        </Left>
        <Right>
          <Container container="Find Your People" />
        </Right>
      </Box>
    </div>
  );
};

export default Section2;
