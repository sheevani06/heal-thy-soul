import React from "react";
import {
  ModalRight,
  ModalWrapper,
  ModalLeft,
  Background,
  CloseModalButton,
} from "./ModalElement";
import { FaGoogle, FaTimesCircle } from "react-icons/fa";

const Modal = ({ modal, handleToggle }) => {
  return (
    <>
      {modal ? (
        <Background>
          <ModalWrapper>
            <ModalLeft>
              <h1 style={{ fontSize: "25px" }}>
                Welcome <br></br>message !
              </h1>
              <p style={{ fontSize: "15px" }}>
                Nulla vestibulum vitae velit <br></br>
                vitae ut pellentesque maecenas <br></br>
                pellentesque ?
              </p>
            </ModalLeft>
            <ModalRight>
              <CloseModalButton onClick={() => handleToggle((prev) => !prev)}>
                <span>
                  <FaTimesCircle style={{ marginRight: "10px" }} />
                  CLOSE
                </span>
              </CloseModalButton>

              <div
                style={{
                  backgroundColor: "#C4C4C4",
                  padding: "10px 50px",
                  marginTop: "40px",
                  marginBottom: "30px",
                }}
              >
                <h1
                  style={{
                    margin: "0",
                    paddingTop: "0",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    textTransform: "uppercase",
                  }}
                >
                  Logo Here
                </h1>
              </div>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                <input
                  type="email"
                  placeholder="EMAIL"
                  required
                  style={{
                    padding: "5px",
                    marginBottom: "20px",
                    borderBottom: "1px solid black",
                    borderTop: "0",
                    borderLeft: "0",
                    borderRight: "0",
                    outline: "none",
                  }}
                ></input>
                <input
                  type="password"
                  placeholder="PASSWORD"
                  required
                  style={{
                    padding: "5px",
                    marginBottom: "10px",
                    borderBottom: "1px solid black",
                    borderTop: "0",
                    borderLeft: "0",
                    borderRight: "0",
                    outline: "none",
                  }}
                ></input>
                <p
                  style={{
                    cursor: "pointer",
                    paddingLeft: "65%",
                    fontSize: "11px",
                    marginTop: "0",
                    opacity: "0.8",
                  }}
                >
                  FORGOT PASSWORD?
                </p>
                <button
                  type="submit"
                  style={{
                    marginTop: "20px",
                    padding: "10px 18px",
                    borderRadius: "20px",
                    borderColor: "transparent",
                    backgroundColor: "#C4C4C4",
                  }}
                >
                  LOGIN
                </button>
              </form>
              <div>
                <hr></hr>
                <span style={{ fontSize: "11px", opacity: "0.8" }}>
                  OR CONNECT USING
                </span>
                <hr></hr>
              </div>
              <button
                style={{
                  width: "80%",
                  marginTop: "20px",
                  padding: "10px 18px",
                  borderRadius: "20px",
                  borderColor: "transparent",
                  backgroundColor: "#C4C4C4",
                }}
              >
                <FaGoogle style={{ marginRight: "10px" }} />
                SIGN WITH GOOGLE
              </button>
              <p style={{ fontSize: "11px", opacity: "0.8" }}>
                DON'T HAVE AN ACCOUNT?
              </p>
              <button
                style={{
                  width: "80%",
                  marginTop: "20px",
                  padding: "10px 18px",
                  borderRadius: "20px",
                  borderColor: "transparent",
                  backgroundColor: "#C4C4C4",
                }}
              >
                SIGNUP
              </button>
            </ModalRight>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
export default Modal;
