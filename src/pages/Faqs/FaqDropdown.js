import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Container, FaqSection, Wrap, DropDown } from "./FaqsElement";
import { Data } from "./Data";

const FaqDropdown = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider
      value={{ color: "#00FF89", size: "25px", marginBottom: "30px" }}
    >
      <FaqSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>
                    {clicked === index ? (
                      <FaAngleDown style={{ color: "var(--color-white)" }} />
                    ) : (
                      <FaAngleUp style={{ color: "var(--color-white)" }} />
                    )}
                  </span>
                </Wrap>
                {clicked === index ? (
                  <DropDown>
                    <p>{item.answer}</p>
                  </DropDown>
                ) : null}
              </>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default FaqDropdown;
