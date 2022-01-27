import React from "react";
import image from "./Rectangle 39.png";
import quotes from "./quotes.png";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
const CommentWrap = () => {
  const myStyle = {
    width: "80%",
    height: "150px",
    background: "white",
    marginBottom: "20px",
    marginLeft: "50px",
    padding: "20px 40px",
    borderRadius: "10px",
  };
  return (
    <div style={myStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="rectangle"
          style={{ width: "70px", height: "70px" }}
        ></img>
        <div style={{ width: "550px", marginLeft: "20px" }}>
          <h4 style={{ marginBottom: "10px" }}>Blah blahjuh</h4>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              fontWeight: "100",
              fontStyle: "normal",
            }}
          >
            Aliquet volutpat aliquet et nisl iaculis risus semper sed. Nec nunc
            cras maecenas lobortis quis turpis sed at. Turpis ullamcorper enim,
            tincidunt magna sed.
          </p>
        </div>
        <img src={quotes} alt="quotes"></img>
        <div
          style={{
            margin: "40px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "end",
            width: "80px",
            height: "10px",
          }}
        >
          <FaThumbsUp />
          <FaThumbsDown />
        </div>
      </div>
    </div>
  );
};

export default CommentWrap;
