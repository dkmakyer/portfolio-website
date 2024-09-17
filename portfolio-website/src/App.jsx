import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import About from "./pages/about-me/About";
import Portfolio from "./pages/portfolio/Portfolio";

const App = () => {
  return (
    <Router>
      <Header classname="header" />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Portfolio />}/>
      </Routes>
    </Router>
  );
};

export default App;
