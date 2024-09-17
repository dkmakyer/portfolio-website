import React from 'react'
import "./portfolio.css"
import images from '../../components/images'
import ProjectCard from '../../components/project-card/ProjectCard'

const Portfolio = () => {
    const {github, memeApp, socialApp, tenziesApp} = images;
    const information = [
        {key:"1z", name:"Book Connect App", cssName: "Book-Connect-App", details:"This application was developed while I was learning about routing in React.js. It highlighted areas where I need to improve, particularly in app responsiveness and JavaScript logic. Overall, it was a valuable learning experience", image:socialApp},
        {key:"2z", name:"Tenzies Game App", cssName: "Tenzies-Game-App", details:"This app was built while I was learning the fundamentals of React.js and how they differ from vanilla JavaScript, as outlined in the React documentation.", image:tenziesApp},
        {key:"3z", name:"Meme Generator App", cssName: "Meme-Generator-App", details:"This app was developed as part of my effort to understand working with APIs, and to explore the differences between the Fetch API and the Axios library. Check it out!", image:memeApp},
    ];
  return (
    <>
        <div className="portfolio-container">
            <div className="portfolio-heading">
                <h2>My Projects</h2>
                <button><img src={github} alt="github-image" /> Visit my Github</button>
            </div>
            <div className="projects">
                {information.map(project => {
                    return <ProjectCard key={project.key} name={project.name} className={project.cssName} detail={project.details} image={project.image}/>
                })}
            </div>
        </div>
    </>
  )
}

export default Portfolio
