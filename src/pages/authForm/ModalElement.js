import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalWrapper = styled.div`
  background-color: #c4c4c4;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  width: 900px;
  height: 550px;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 0;
`;

export const ModalLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 20px 30px;
`;

export const ModalRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  background-color: white;
`;
export const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 40px;
  width: 70px;
  height: 32px;
  padding: 0;
  z-index: 10;
  background-color: transparent;
  border: 0;
`;
