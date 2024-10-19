import React from "react";
import "./project-card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {

    function addLink(event){
        const targetButton = event.target.id;
        let projectUrl = null;
        switch(targetButton){
            case "book-connect-github" : 
                projectUrl = "https://github.com/dkmakyer/Social-networking-app-react";
                break;
            case "book-connect-vercel" : 
                projectUrl = "https://social-networking-app-react.vercel.app/";
                break;            
            case "tenzies-github" : 
                projectUrl = "https://github.com/dkmakyer/tenzies-game-react";
                break;           
            case "tenzies-vercel" : 
                projectUrl = "https://tenzies-game-react-two.vercel.app/";
                break;            
            case "meme-app-github" : 
                projectUrl = "https://github.com/dkmakyer/meme-generator-react";
                break;           
            case "meme-app-vercel" : 
                projectUrl = "https://meme-generator-react-nine.vercel.app/";
                break;
            case "responsive-design-tester-github" : 
                projectUrl = "https://github.com/dkmakyer/responsive-design-tester-React";
                break;           
            case "responsive-design-tester-vercel" : 
                projectUrl = "https://responsive-design-tester-react.vercel.app/";
                break;                
            default: 
                return;
        }

        if(projectUrl){
            window.open(projectUrl, "_blank");
        }
    }

    return (
        <>
        <div className="project-container" id={props.id} >
                <div className="project-image">
                    <img src={props.image} alt="app-image" />
                </div>
                <div className="project-info">
                    <div className="info">
                        <h5>{props.name}</h5>
                        <p>{props.detail}</p>
                    </div>
                    <div className="project-links">
                        <button id={props.githubButton} onClick={addLink}>View in Github <FontAwesomeIcon icon={faArrowRight} /></button>
                        <button id={props.vercelButton} onClick={addLink}>Interact with it <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard
