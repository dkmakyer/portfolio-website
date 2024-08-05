import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css';
import images from "../../components/images.js";


const Home = () => {
  const { html, css, js, react, bootstrap, git, aws, tailwindcss, svelte } = images;

  return (
    <div className="home-page">
      <div className="intro">
        <Card className="card-container">
          <Card.Body>
            <Card.Text>
              <div className="top">
                <span className="greeting">Hello, I am</span>
                <span className="name">DAVID KWASI MENSAH AKYER</span>
                <span className="job">
                  Frontend Developer & AWS Certified Cloud Practitioner
                </span>
              </div>
              <div className="self-intro">
                Hi! I’m David Akyer, a frontend developer who loves
                transforming UI designs into visually appealing and
                functional websites. I am passionate about crafting
                user-friendly interfaces and dedicated to delivering
                high-quality work. Currently, I am expanding my skills to
                become a full-stack developer. Explore my portfolio to see
                my journey and projects!
              </div>
            </Card.Text>
            <div className="card-buttons">
              <Button className="button first">Hire me</Button>
              <Button className="button second">
                Download Resume
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="skills">
        <Card>
          <Card.Body>
            <Card.Text>
              <div className='images'>
                <span className='img-block'><img src={html} />HTML</span>
                <span className='img-block'><img src={css} />CSS</span>
                <span className='img-block'><img src={js} />JavaScript</span>
                <span className='img-block'><img src={react} />React</span>
                <span className='img-block'><img src={aws} />AWS</span>
                <span className='img-block'><img src={bootstrap} />Bootstrap</span>
                <span className='img-block'><img className='gitImage' src={git} />Git</span>
                <span className='img-block'><img src={svelte} />Svelte</span>
                <span className='img-block'><img src={tailwindcss} />TailwindCSS</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
