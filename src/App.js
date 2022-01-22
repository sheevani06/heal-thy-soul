import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Faqs from "./pages/Faqs";
import Form from "./pages/Form";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header/Header";
import Section from "./components/Section1/Section";
import Section2 from "./components/Section2/Section2";
import Benefits from "./components/Benefits/Benefits";
import Doubts from "./components/Doubts/Doubts";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";

function App() {
  const myStyle = {
    backgroundColor: "#C4C4C4",
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/sign-up" element={<Form />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
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
      <div className="container" style={myStyle}>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
