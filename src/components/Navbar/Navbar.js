import React from "react";
import Modal from "../../pages/authForm/Modal";
import {
  Nav,
  NavLink,
  NavBtn,
  NavBtnLink,
  Bars,
  NavMenu,
} from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink exact to="/">
          <h1>Logo Here</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/faqs">
            FAQs
          </NavLink>
          <NavLink activeClassName="active" to="/blogs">
            Blogs
          </NavLink>
          <NavLink activeClassName="active" to="/sign-up">
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
