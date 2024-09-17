import React from "react";
import "./project-card.css";
import images from "../images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
  return (
    <>
    {/* modify it so that it looks like a bootstrap card component */}
        <div className="project-container">
            <div className="project-image">
                <img src={props.image} className={props.cssName} alt="app-image" />
            </div>
            <div className="project-info">
                <div className="info">
                    <h5>{props.name}</h5>
                    <p>{props.detail}</p>
                </div>
                <div className="project-links">
                    <button>View in Github <FontAwesomeIcon icon={faArrowRight} /></button>
                    <button>Interact with it <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProjectCard
