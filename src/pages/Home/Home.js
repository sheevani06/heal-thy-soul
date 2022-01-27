import React from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section1/Section";
import Section2 from "../../components/Section2/Section2";
import Benefits from "../../components/Benefits/Benefits";
import Doubts from "../../components/Doubts/Doubts";
import Testimonial from "../../components/Testimonials/Testimonial";

const Home = () => {
  const myStyle = {
    backgroundColor: "#C4C4C4",
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Section />
      </div>
      <div className="container">
        <Section2 />
      </div>
      <div className="container">
        <Benefits />
      </div>
      <div className="container" style={myStyle}>
        <Testimonial />
      </div>
      <div className="container">
        <Doubts />
      </div>
    </div>
  );
};

export default Home;
