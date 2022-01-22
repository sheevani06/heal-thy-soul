import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const myStyle = {
    color: "black",
    fontSize: "18px",
    padding: "18px 0px",
    textDecoration: "none",
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "30px 50px" }}>
          <NavLink style={myStyle} to="/">
            Home
          </NavLink>
          <br></br>
          <NavLink style={myStyle} to="/about">
            About us
          </NavLink>
          <br></br>
          <NavLink style={myStyle} to="/">
            Our Work
          </NavLink>
          <br></br>
        </div>
        <div style={{ margin: " 30px 50px" }}>
          <NavLink style={myStyle} to="/blogs">
            Blogs
          </NavLink>
          <br></br>
          <NavLink style={myStyle} to="/faqs">
            Faqs
          </NavLink>
          <br></br>
          <NavLink style={myStyle} to="/reviews">
            Reviews
          </NavLink>
          <br></br>
        </div>
        <div style={{ margin: " 30px 50px" }}>
          <NavLink style={myStyle} to="/">
            Privacy
          </NavLink>
          <br></br>
          <NavLink style={myStyle} to="/">
            Terms and Conditions
          </NavLink>
          <br></br>
        </div>
      </div>
      <div style={{ width: "100%", paddingTop: "60px" }}>
        <h1
          style={{
            textAlign: "center",
            opacity: "0.5",
            display: "flex ",
            fontSize: "80px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "clip",
            margin: "0",
          }}
        >
          WE’D LOVE TO HEAR FROM YOU. WE’D LOVE TO HEAR FROM YOU
        </h1>
      </div>
    </div>
  );
};

export default Footer;
