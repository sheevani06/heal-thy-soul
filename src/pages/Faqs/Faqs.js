import React from "react";
import Comments from "./Comments/Comments";
import FaqDropdown from "./FaqDropdown";
import Review from "./Reviews/Review";

const Faqs = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{ fontSize: "4rem", marginBottom: "5px", marginTop: "60px" }}
        >
          <span style={{ color: "#c4c4c4" }}>FREQUENTLY </span>ASKED QUESTIONS
        </h1>
        <h4 style={{ marginTop: "5px" }}>
          we hope you find your answers here.
        </h4>
      </div>
      <FaqDropdown />
      <Comments />
      <Review />
    </div>
  );
};

export default Faqs;
