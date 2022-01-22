import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem calc((100vw-1000px) / 2);
  height: 708px;
`;
export const Content = styled.section`
  display: block;
  justify-items: baseline;
  margin-right: 120px;
`;

export const Title = styled.h1`
  height: 211px;
  width: 720px;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
  left: 100px;
  top: 282px;
  padding-bottom: 100px;
`;
export const Paragraph = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 57px;
  margin-bottom: 37px;
`;

export const ImageContainer = styled.div`
  margin-left: 80px;
  display: block;
  justify-content: center;
  align-items: center;
`;
export const Rectangle = styled.div`
  height: 550px;
  width: 400px;
  border-radius: 0px;
  background-color: #4a4848; ;
`;

export const Image = styled.image`
  height: 672px;
  width: 482px;
  left: 942px;
  top: 281px;
  border-radius: 0px;
  z-index: 10;
`;
