import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="web-dev">
          <h4>Web development with:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Svelte</li>
          </ul>
        </div>
        <div className="cloud-computing">
          <h4>AWS Cloud Computing with:</h4>
          <ul>
            <li>Amazon EC2</li>
            <li>Amazon S3</li>
            <li>Amazon VPC</li>
            <li>CloudFormation</li>
            <li>DynamoDB</li>
            <li>IAM</li>
          </ul>
        </div>
        <div className="database">
          <h4>Database Management with:</h4>
          <ul>
            <li>SQL</li>
            <li>Prisma ORM</li>
          </ul>
        </div>
        <div className="linux">
          <h4>Linux systems operations and scripting with:</h4>
          <ul>
            <li>Bash</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="version-control">
          <h4>Version Control with:</h4>
          <ul>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
