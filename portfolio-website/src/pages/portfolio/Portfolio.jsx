import React from 'react'
import "./portfolio.css"
import images from '../../components/images'
import ProjectCard from '../../components/project-card/ProjectCard'

const Portfolio = () => {
    const {github, memeApp, socialApp, tenziesApp, responsiveApp, ecommerceApp, shoppingSpree} = images;
    const projects = [
        {key:"1z", name:"Agbogbloshie-Ecommerce-App",id: "Agbogbloshie-Ecommerce-App", details:"This application was developed to showcase products available in our shop, and make business transactions online easier, faster and seamless.", image:ecommerceApp, github: "ecommerce-github", vercel: "ecommerce-vercel"},
        {key:"2z", name:"A responsive product list with shopping cart functionality",id: "Responsive-Product-List", details:"This app was developed as an assignment to showcase my skills in HTML, CSS, and JavaScript. This project emphasizes responsive design, dynamic content updates, and user interaction. Check it out!", image:shoppingSpree, github: "shopping-list-github", vercel: "shopping-list-vercel"},
        {key:"3z", name: "Responsive Design Tester", id: "Responsive-Design-Tester", details:"This app helps users test the responsiveness of their web applications across various predefined viewports or screen sizes", image: responsiveApp, github: "responsive-design-tester-github", vercel: "responsive-design-tester-vercel" }, 
        {key:"4z", name:"Tenzies Game App",id: "Tenzies-Game-App", details:"This app was built while I was learning the fundamentals of React.js and how they differ from vanilla JavaScript, as outlined in the React documentation.", image:tenziesApp, github: "tenzies-github", vercel: "tenzies-vercel"},
        {key:"5z", name:"Book Connect App",id: "Book-Connect-App", details:"This application was developed while I was learning about routing in React.js. It highlighted areas where I need to improve, particularly in app responsiveness and JavaScript logic. Overall, it was a valuable learning experience", image:socialApp, github: "book-connect-github", vercel: "book-connect-vercel"},
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
