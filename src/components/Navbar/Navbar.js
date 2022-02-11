import React from "react";
import logo from "./logo.png";
import {
  Nav,
  NavLink,
  NavBtn,
  NavBtnLink,
  Bars,
  NavMenu,
} from "./NavbarElement";

const Navbar = ({ handleToggle }) => {
  const handleClick = () => {
    handleToggle();
  };
  return (
    <>
      <Nav>
        <NavLink exact="true" to="/">
          <img
            style={{ transform: "scale(0.8,0.8)" }}
            src={logo}
            alt="logo"
          ></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink activeclassname="active" to="/about">
            About
          </NavLink>
          <NavLink activeclassname="active" to="/faqs">
            FAQs
          </NavLink>
          <NavLink activeclassname="active" to="/blogs">
            Blogs
          </NavLink>
          <NavLink to="/sign-up" onClick={handleClick}>
            Login/Signin
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
