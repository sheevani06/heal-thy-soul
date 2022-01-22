import React from "react";

const SubPoints = (props) => {
  const myStyle = {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "29px",
    letterSpacing: "0em",
    textAlign: "left",
  };
  return (
    <ol>
      <li style={myStyle}>{props.subpoints}</li>
    </ol>
  );
};

export default SubPoints;
