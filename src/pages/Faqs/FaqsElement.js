import styled from "styled-components";

export const FaqSection = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background-color: #fff;
`;
export const Container = styled.div`
  position: absolute;
  top: 30px;
  width: 80%;
`;

export const Wrap = styled.div`
  background: var(--color-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  text-align: center;
  cursor: pointer;
  padding: 0 10px;
  margin-bottom: 30px;
  h1 {
    padding: 1.5rem;
    font-weight: 500;
    font-style: normal;
    font-size: 1.3rem;
    color: var(--color-white);
  }
`;

export const DropDown = styled.div`
  background: #c4c4c4;
  p {
    padding-left: 30px;
    padding-right: 280px;
    width: 100%;
    font-style: normal;
    font-weight: 200;
    font-size: 1rem;
  }
`;
