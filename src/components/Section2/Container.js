/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import vector from "./Vector.png";
const Container = (props) => {
  const myStyle = {
    fontSize: "25px",
    fontStyle: "bold",
    fontWeight: " 700",
    lineHeight: "44px",
    letteSrpacing: " 0em",
    textAlign: "left",
    marginBottom: "20px",
  };
  const hr1 = {
    textAlign: "left",
    height: "3px",
    border: "none",
    background: "black",
    width: "500px",
    marginTop: "20px",
    marginBottom: " 15px",
  };
  const hr2 = {
    marginLeft: "5px",
    textAlign: "left",
    height: "3px",
    border: "none",
    background: "black",
    width: "50px",
  };
  return (
    <div style={{ marginBottom: "120px" }}>
      <h1 style={myStyle}>{props.container}</h1>
      <img src={vector}></img>
      <hr style={hr1}></hr>
      <hr style={hr2}></hr>
    </div>
  );
};

export default Container;
