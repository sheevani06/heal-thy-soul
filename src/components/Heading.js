import React from "react";

const Heading = ({ heading }) => {
  const myStyle = {
    active: {
      marginLeft: "350px",
    },
    inactive: {
      marginLeft: "0",
    },
    fontSize: "50px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "78px",
    letterSpacing: "0em",
    textAlign: "left",
    textTransform: "uppercase",
  };
  return <h1 style={myStyle}>{heading}</h1>;
};

export default Heading;
