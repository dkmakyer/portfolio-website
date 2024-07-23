import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/portfolio">My-Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact-Me</Link>
      </li>
    </ul>
  );
};

export default Header;
