import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Modal from "./pages/authForm/Modal";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Faqs from "./pages/Faqs/Faqs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { GlobalStyles } from "./components/GlobalStyles";
import ReadBlog from "./pages/Blogs/ReadBlog";
function App() {
  const myStyle = {
    backgroundColor: "#C4C4C4",
  };

  const [modal, setModal] = useState(false);
  const handleToggle = () => {
    setModal((modal) => !modal);
  };
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar handleToggle={handleToggle} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/more" element={<ReadBlog />}></Route>
        <Route
          path="/sign-up"
          element={<Modal modal={modal} handleToggle={setModal} />}
        ></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
      <div className="container" style={myStyle}>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
