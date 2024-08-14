import React from "react";
import "./project-card.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import images from "../images";

const ProjectCard = (props) => {
  const {react} = images;

  return (
    <Card className="project-card" >
      <Card.Img className="project-img" variant="top" src={react} />
      <Card.Body className="project-body">
        <Card.Title className="project-title">{props.name}</Card.Title>
        <Card.Text className="project-text">
            {props.info}
        </Card.Text>
        <Button variant="primary">Explore</Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard

// style={{ width: '80rem', display: "flex", flexDirection: "row"}}
