import React from "react";
import { ContactContent, ContactForm } from "./ContactUsElement";
const ContactUs = () => {
  const formStyle = {
    margin: "25px",
  };

  const inputStyleLeft = {
    borderRadius: "20px",
    marginTop: "10px",
    padding: "10px",
    border: "1px solid rgba(0,0,0,0.4)",
    height: "40px",
    width: "230px",
  };
  const MessageStyle = {
    borderRadius: "20px",
    marginTop: "10px",
    padding: "10px",
    border: "0px solid rgba(0,0,0,0.4)",
    height: "190px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    width: "230px",
  };
  const buttonfieldStyle = {
    marginTop: "50px",
    borderRadius: "20px",
    border: "0px",
    backgroundColor: "#878484",
    width: "290px",
    height: "60px",
    fontSize: "1rem",
    marginLeft: "120px",
    marginRight: "120px",
  };
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "30px",
          width: "900px",
          height: "400px",
          backgroundColor: "black",
        }}
      ></div>
      <ContactContent>
        <ContactForm>
          <h1>Contact Form</h1>
          <form style={formStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                  <br></br>
                  <input
                    style={inputStyleLeft}
                    type="text"
                    required
                    placeholder="Ritik Bhardwaj"
                    name="name"
                  ></input>
                </div>
                <br></br>
                <div>
                  <label htmlFor="email">Email</label>
                  <br></br>
                  <input
                    style={inputStyleLeft}
                    type="email"
                    required
                    placeholder="RitikBhardwaj@gmail.com"
                    name="email"
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br></br>
                <input type="text" name="message" style={MessageStyle}></input>
              </div>
            </div>
            <button style={buttonfieldStyle} type="submit">
              Send Message
            </button>
          </form>
        </ContactForm>
        <div
          style={{
            width: "300px",
            height: "500px",
            paddingTop: "120px",
            paddingBottom: "120px",
          }}
        >
          <h2>GET IN TOUCH!</h2>
          <p style={{ letterSpacing: "0.7px", opacity: "0.8" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            lacus facilisis tempus pellentesque. Luctus mi urna viverra
            consectetur in. Volutpat augue posuere eleifend adipiscing
            tincidunt. Vel vestibulum quam pellentesque vulputate gravida sem
            quam vitae.
          </p>
        </div>
      </ContactContent>
    </div>
  );
};

export default ContactUs;
