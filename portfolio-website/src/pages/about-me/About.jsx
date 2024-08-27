import React from 'react'
import "./about.css";
import {NavLink, Outlet} from "react-router-dom";

const About = () => {

    return (
        <>
            <div className="about-me-header">
                    <NavLink to="/about/skills" className={({isActive}) => (isActive ? "is-active" : null)} >Skills</NavLink>
                    <NavLink to="/about/education" className={({isActive}) => (isActive ? "is-active" : null)} >Education</NavLink>
            </div>
            <Outlet/>
        </>
  )
}

export default About