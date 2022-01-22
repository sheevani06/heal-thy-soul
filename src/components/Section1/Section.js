import React from "react";
import { ImageContainer, Rectangle } from "../Header/HeaderElement";
import Heading from "../Heading";
import { SectionContent } from "./SectionElement";
import { SectionContainer } from "./SectionElement";
const Section = () => {
  const myStyle = {
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "29.96px",
  };
  return (
    <SectionContainer>
      <ImageContainer>
        <Rectangle />
      </ImageContainer>
      <SectionContent>
        <Heading heading="If You Ever Felt" />
        <ol>
          <li style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit.
            Viverra mauris malesuada <br></br>aliquam fames morbi risus
            porttitor.
          </li>
          <li style={myStyle}>
            Auctor aenean lobortis venenatis, mi eu <br></br> iaculis ut
            pulvinar. Cum id sed ipsum, velit,<br></br> commodo.
          </li>
          <li style={myStyle}>
            Auctor aenean lobortis venenatis, mi eu <br></br> iaculis ut
            pulvinar. Cum id sed ipsum, velit,<br></br> commodo.
          </li>
          <li style={myStyle}>
            Auctor aenean lobortis venenatis, mi eu <br></br> iaculis ut
            pulvinar. Cum id sed ipsum, velit,<br></br> commodo.
          </li>
        </ol>
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
