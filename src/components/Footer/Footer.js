import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  const myStyle = {
    color: "black",
    fontSize: "18px",
    padding: "18px 0px",
    textDecoration: "none",
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
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
        <div
          style={{
            margin: "30px 50px",
            display: "flex",
            flexDirection: "column",
            justifyItems: "left",
            alignItems: "left",
          }}
        >
          <span style={{ fontSize: "18px" }}>
            <FaInstagramSquare
              style={{ marginRight: "10px", color: "#4A4848" }}
            />
            Instagram
          </span>
          <span style={{ fontSize: "18px" }}>
            <FaTwitterSquare
              style={{ marginRight: "10px", color: "#4A4848" }}
            />
            Twitter
          </span>
          <span style={{ fontSize: "18px" }}>
            <FaFacebookSquare
              style={{ marginRight: "10px", color: "#4A4848" }}
            />
            Facebook
          </span>
          <span style={{ fontSize: "18px" }}>
            <FaLinkedinIn style={{ marginRight: "10px", color: "#4A4848" }} />
            LinkedIn
          </span>
        </div>
      </div>

      <div style={{ width: "100%", paddingTop: "60px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#878383",
            display: "flex ",
            fontSize: "80px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "clip",
            margin: "0",
            zIndex: "0",
          }}
        >
          WE’D LOVE TO HEAR FROM YOU. WE’D LOVE TO HEAR FROM YOU
        </h1>
      </div>
    </div>
  );
};

export default Footer;
