import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";
import CardText from "react-bootstrap/esm/CardText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faHtml5, faCss3Alt} from '@fortawesome/free-solid-svg-icons';
library.add(faDownload, faHtml5, faCss3Alt);

const Home = () => {
  return (
    <div>
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
                  <p>
                    Hi! I’m David Akyer, a frontend developer who loves
                    transforming UI designs into visually appealing and
                    functional websites. I am passionate about crafting
                    user-friendly interfaces and dedicated to delivering
                    high-quality work. Currently, I am expanding my skills to
                    become a full-stack developer. Explore my portfolio to see
                    my journey and projects!
                  </p>
                </div>
                <p></p>
              </Card.Text>
              <div className="card-buttons">
                <Button className="button first">Hire me</Button>
                <Button className="button second">Download Resume<FontAwesomeIcon className="font-icon" icon="fa-download" /></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="skills">
          <Card>
            <CardText>
              <p>
                <span><FontAwesomeIcon className="font-icon" icon="fa-html5" />HTML</span>
                <span><FontAwesomeIcon className="font-icon" icon="fa-css3-alt" />CSS</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />Javascript</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />React</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />Tailwind CSS</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />Bootstrap</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />Svelte</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />Sveltekit</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />Git</span>
                <span><FontAwesomeIcon className="font-icon" icon="coffee" />AWS</span>
              </p>
            </CardText>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
