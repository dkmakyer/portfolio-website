import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css';
import images from "../../components/images.js";

const Home = () => {
  const { html, css, js, react, bootstrap, git, aws, tailwindcss, svelte, myPic } = images;

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
                Hi! I’m David Akyer, a frontend developer who loves transforming UI designs into visually appealing and functional websites. I am passionate about crafting user-friendly interfaces and dedicated to delivering high-quality work. Currently, I am expanding my skills to become a full-stack developer. Explore my portfolio to see my journey and projects!
              </div>
            </Card.Text>
            <div className="card-buttons">
              <Button className="button first">Hire me</Button>
              <Button className="button second">Download Resume</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="my-pic">
        <img className='me' src={myPic} alt='A picture of me' />
      </div>
      <div className='detailed-intro'>
        <Card>
          <Card.Body>
            <Card.Text>
              <div className="mySelf">
                <h1>Here is Something Interesting About My Journey</h1>
                <p className='paragraph'>
                  I am actually a Chemical Engineering graduate who transitioned into tech at the last quarter of 2023. I find the field fascinating—maybe due to environmental influences—and have dedicated a year towards becoming competent in it.
                </p>
                <p className='paragraph'>
                  I started out as a Production Technician, taking inventory of production stock, making stock reservations, and analyzing production consumption to help predict the flow of profits and losses. Through this, I gained analytical and problem-solving skills required to thrive in any work environment.
                </p>
                <p className='paragraph'>
                  I first delved into frontend development because, unlike my graduating field, it was far from boring. It keeps me active every day with something new to learn and play with: new programming languages, new shortcuts to doing things. The overall process of interacting with a computer like your friend to make it do something for you is mesmerizing to me, and I have been dedicated to this goal ever since.
                </p>
                <p className='paragraph'>
                  I tend to take up leadership roles to help get the job done, as many people tend to shun such roles, not wanting to bear more responsibility than necessary. I also believe in the power of collaboration. Two heads are better than one in achieving any goal, so imagine what three or more can do together!
                </p>
                <p className='paragraph'>
                  I hope this little spiel gave you a fair idea of who you'd be working with. Oh, and I'm also here for the money, but that's for later, when I become competent enough to earn my keep. For now, the goal is to become indispensable due to my competence. Therefore, the learning and application of what I've learned continues.
                </p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="skills">
        <Card className='skills-container'>
          <Card.Body>
            <Card.Text>
              <div>
                <h2 className="my-skills">MY SKILLS</h2>
                <div className='images'>
                  <span className='img-block'><img src={html} alt='HTML' />HTML</span>
                  <span className='img-block'><img src={css} alt='CSS' />CSS</span>
                  <span className='img-block'><img src={js} alt='JavaScript' />JavaScript</span>
                  <span className='img-block'><img src={react} alt='React' />React</span>
                  <span className='img-block'><img src={aws} alt='AWS' />AWS</span>
                  <span className='img-block'><img src={bootstrap} alt='Bootstrap' />Bootstrap</span>
                  <span className='img-block'><img className='gitImage' src={git} alt='Git' />Git</span>
                  <span className='img-block'><img src={svelte} alt='Svelte' />Svelte</span>
                  <span className='img-block'><img src={tailwindcss} alt='TailwindCSS' />TailwindCSS</span>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
