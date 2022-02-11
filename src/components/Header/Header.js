import React from "react";
import { NavBtnLink, NavBtn } from "../Navbar/NavbarElement";
import myImage from "../../images/header.png";
import {
  HeaderContainer,
  Content,
  ImageContainer,
  Title,
  Rectangle,
  Paragraph,
} from "./HeaderElement";
const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <Title>
          Lorem ipsum dolor sit<br></br> amet, consectetur<br></br> adipiscing
          elit.
        </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius et
          <br></br>
          convallis nibh enim quis lectus id. Nulla tortor non sagittis vitae
          <br></br>
          non consectetur sed.
        </Paragraph>
        <NavBtn>
          <NavBtnLink to="/form">Join a Group</NavBtnLink>
        </NavBtn>
      </Content>
      <ImageContainer>
        <Rectangle />
        <img src={myImage} alt="header"></img>
      </ImageContainer>
    </HeaderContainer>
  );
};

export default Header;
