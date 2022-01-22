import React from "react";
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
        <NavLink to="/">
          <h1>Logo Here</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/sign-up">Login/ SignUp</NavLink>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
