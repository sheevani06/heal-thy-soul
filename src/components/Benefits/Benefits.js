import React from "react";
import { ImageContainer, Rectangle } from "../Header/HeaderElement";
import Heading from "../Heading";
import { BenefitsContainer, BenefitsContent } from "./BenefitsElement";
const Benefits = () => {
  const myStyle = {
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "29.96px",
    width: "300px",
  };
  return (
    <BenefitsContainer>
      <ImageContainer>
        <Rectangle />
      </ImageContainer>
      <BenefitsContent>
        <Heading heading="Benefits" />
        <ol>
          <li style={myStyle}>
            Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.
            Adipiscing mauris at in tincidunt vestibulum.
          </li>
          <li style={myStyle}>
            Amet, turpis nunc posuere orci lacus turpis ut convallis. Lectus
            gravida et
          </li>
          <li style={myStyle}>
            in quisque. Tempus vehicula ullamcorper sagittis at ac pharetra.
          </li>
          <li style={myStyle}>Lobortis maecenas metus risus mattis.</li>
          <li style={myStyle}>
            Mi eget ipsum etiam sit velit. Pulvinar a neque nibh duis interdum
            interdum.
          </li>
          <li style={myStyle}>Eget et elit at nibh.</li>
        </ol>
      </BenefitsContent>
    </BenefitsContainer>
  );
};

export default Benefits;
