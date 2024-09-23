import React from 'react'
import "./portfolio.css"
import images from '../../components/images'
import ProjectCard from '../../components/project-card/ProjectCard'

const Portfolio = () => {
    const {github, memeApp, socialApp, tenziesApp} = images;
    const projects = [
        {key:"1z", name:"Book Connect App",id: "Book-Connect-App", details:"This application was developed while I was learning about routing in React.js. It highlighted areas where I need to improve, particularly in app responsiveness and JavaScript logic. Overall, it was a valuable learning experience", image:socialApp, github: "book-connect-github", vercel: "book-connect-vercel"},
        {key:"2z", name:"Tenzies Game App",id: "Tenzies-Game-App", details:"This app was built while I was learning the fundamentals of React.js and how they differ from vanilla JavaScript, as outlined in the React documentation.", image:tenziesApp, github: "tenzies-github", vercel: "tenzies-vercel"},
        {key:"3z", name:"Meme Generator App",id: "Meme-Generator-App", details:"This app was developed as part of my effort to understand working with APIs, and to explore the differences between the Fetch API and the Axios library. Check it out!", image:memeApp, github: "meme-app-github", vercel: "meme-app-vercel"},
    ];
    function openGitHub(){
        window.open("https://github.com/dkmakyer", "_blank");
    }
  return (
    <>
        <div className="portfolio-container">
            <div className="portfolio-heading">
                <h2>My Projects</h2>
                <button onClick={openGitHub}><img src={github} alt="github-image" /> Visit my Github</button>
            </div>
            <div className="projects">
                {projects.map(project => {
                    return <ProjectCard className="individual-project" key={project.key} name={project.name} id={project.id} detail={project.details} image={project.image} githubButton={project.github} vercelButton={project.vercel}/>
                })}
            </div>
        </div>
    </>
  )
}

export default Portfolio