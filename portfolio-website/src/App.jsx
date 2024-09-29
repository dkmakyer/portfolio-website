import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import About from "./pages/about-me/About";
import Portfolio from "./pages/portfolio/Portfolio";
import ContactMe from "./pages/contact-me/ContactMe";

const App = () => {
  return (
    <Router>
      <Header classname="header" />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Portfolio />}/>
        <Route path="/contact-me" element={<ContactMe />}/>
      </Routes>
    </Router>
  )
};

export default App;
