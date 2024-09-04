import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import About from "./pages/about-me/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";

const App = () => {
  return (
    <Router>
      <Header classname="header" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
};

export default App;
