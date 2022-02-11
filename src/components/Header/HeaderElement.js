import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  height: 708px;
`;
export const Content = styled.section`
  display: block;
  justify-items: baseline;
  margin-right: 120px;
`;

export const Title = styled.h1`
  height: 211px;
  width: 800px;
  font-size: 64px;
  font-style: normal;
  font-weight: 2000;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-blue);
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
  display: block;
  justify-content: center;
  align-items: flex-end;
`;
export const Rectangle = styled.div`
  position: absolute;
  z-index: 0;
  height: 550px;
  width: 400px;
  border: 1px solid #d65142;
  background-color: transparent;
`;

export const Image = styled.image`
  height: 672px;
  width: 482px;
  left: 942px;
  top: 281px;
  border-radius: 0px;
  z-index: 10;
`;
