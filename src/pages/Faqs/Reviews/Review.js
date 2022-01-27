import React from "react";
import { ReviewSection } from "./ReviewElement";
const Review = () => {
  const inputStyle = {
    margin: "50px 20px",
    border: "none",
    width: "60%",
    fontSize: "1.2em",
    borderBottom: " 2px solid black",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "200",
    color: "#4A4848",
    lineHeight: "29px",
    letterSpacing: "0em",
    textAlign: "left",
  };
  const inputFieldStyle = {
    margin: "50px 20px",
    border: "none",
    width: "60%",
    fontSize: "1.2em",
    borderBottom: " 2px solid black",
    marginTop: "100px",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "200",
    color: "#4A4848",
    lineHeight: "29px",
    letterSpacing: "0em",
    textAlign: "left",
  };
  const buttonFieldStyle = {
    marginTop: "30px",
    marginLeft: "20px",
    width: "150px",
    height: "50px",
    borderRadius: "20px",
    border: " 1px solid black",
    fontSize: "1rem",
  };
  return (
    <ReviewSection>
      <div>
        <h1>Add a Review</h1>
        <form>
          <input
            style={inputStyle}
            type="text"
            placeholder="Your Name"
            required
          ></input>
          <input
            style={inputStyle}
            type="email"
            placeholder="Your Email"
            required
          ></input>
          <input
            style={inputStyle}
            type="number"
            placeholder="Your Contact No "
            required
          ></input>
          <input
            style={inputFieldStyle}
            type="text"
            placeholder="Your review for us"
            required
          ></input>
          <button style={buttonFieldStyle} type="submit">
            Submit
          </button>
        </form>
      </div>
    </ReviewSection>
  );
};

export default Review;
