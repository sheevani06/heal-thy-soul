import React from "react";
import { NavBtnLink, NavBtn } from "../Navbar/NavbarElement";
// import myImage from "./Header.png";
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
          Lorem ipsum dolor <br></br>sit amet, consectetur<br></br> adipiscing
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
          <NavBtnLink to="/form">Sign Up</NavBtnLink>
        </NavBtn>
      </Content>
      <ImageContainer>
        <Rectangle />
        {/* <Image src={myImage}></Image> */}
      </ImageContainer>
    </HeaderContainer>
  );
};

export default Header;
