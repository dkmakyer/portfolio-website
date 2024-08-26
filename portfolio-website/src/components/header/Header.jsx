import {useState} from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {id: "1", endPoint:"/",  name:"Home"},
    {id: "2", endPoint:"/about",  name:"About-me"},
    {id: "3", endPoint:"/projects",  name:"Projects"},
    {id: "4", endPoint:"/contact-me",  name:"Contact-me"}
  ];

  const [active, setActive] =  useState(null);
  function addActiveClass(id){
    setActive(id);
  } 

  return (
   <>
    <div className="header-container">
      <NavLink to="/" className="my-name">Kwasi <span>Mensah</span></NavLink>      
      <nav className="navigation">
        {links.map(link => (
          <NavLink key={link.id} className={active === link.id ? "active" : null} to={link.endPoint} onClick={addActiveClass}>{link.name}</NavLink>
        ))}
      </nav>      
    </div>
   </>
  );
};

export default Header;
