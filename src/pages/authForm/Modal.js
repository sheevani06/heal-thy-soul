import React from "react";
import {
  ModalRight,
  ModalWrapper,
  ModalLeft,
  Background,
  CloseModalButton,
} from "./ModalElement";
import { FaGoogle, FaTimesCircle } from "react-icons/fa";

const Modal = (showModal, setModal) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalLeft>
              <h1 style={{ fontSize: "20px" }}>
                Welcome <br></br>message !
              </h1>
              <p style={{ fontSize: "15px" }}>
                Nulla vestibulum vitae velit <br></br>
                vitae ut pellentesque maecenas <br></br>
                pellentesque ?
              </p>
            </ModalLeft>
            <ModalRight>
              <CloseModalButton
                aria-label="close modal"
                onClick={() => setModal((prev) => !prev)}
              >
                <span>
                  <FaTimesCircle style={{ marginRight: "10px" }} />
                  CLOSE
                </span>
              </CloseModalButton>
              <div
                style={{
                  backgroundColor: "#C4C4C4",
                  padding: "10px 50px",
                  marginTop: "0",
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
                  }}
                ></input>
                <p
                  style={{
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "11px", opacity: "0.8" }}>
                  <hr></hr>OR CONNECT USING <hr></hr>
                </p>
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
                GOOGLE
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
