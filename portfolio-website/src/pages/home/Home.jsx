import React, { useCallback } from "react";
import "./home.css";
import { Link } from "react-router-dom";
// import {useInterval} from "react-use";
import Typing from "react-typing-effect";
import images from "../../components/images.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Example brand icon

// import ProjectCard from '../../components/project-card/ProjectCard';

const Home = () => {
  // const {
  //   html,
  //   css,
  //   js,
  //   react,
  //   bootstrap,
  //   git,
  //   aws,
  //   tailwindcss,
  //   svelte,
  //   myPic,
  // } = images;

  // const projectInfo = [
  //   {key: 1, name: "Social Networking App for book enthusiats" , info: "This was created as a way to connect individuals who are reading freaks of nature. It is interesting how like-minded people click, and this app takes that into account."},
  //   {key: 2, name: "A Tenzies Game App" , info: "Why don't you try playing this boring game I made. Who knows, you might find it interesting."},
  //   {key: 3, name: "A Random Meme Generator App " , info: "A beginner's task, I know! I still learned to make API calls with this one."},
  // ];

  // const introduction = [
  //   {key: "1a", text: "I am actually a Chemical Engineering graduate who transitioned into tech at the last quarter of 2023. I find the field fascinating—maybe due to environmental influences—and have dedicated a year towards becoming competent in it."},
  //   {key: "2a", text: "I started out as a Production Technician, taking inventory of production stock, making stock reservations, and analyzing production consumption to help predict the flow of profits and losses. Through this, I gained analytical and problem-solving skills required to thrive in any work environment."},
  //   {key: "3a", text: "I first delved into frontend development because, unlike my graduating field, it was far from boring. It keeps me active every day with something new to learn and play with: new programming languages, new shortcuts to doing things. The overall process of interacting with a computer like your friend to make it do something for you is mesmerizing to me, and I have been dedicated to this goal ever since."},
  //   {key: "4a", text: "I tend to take up leadership roles to help get the job done, as many people tend to shun such roles, not wanting to bear more responsibility than necessary. I also believe in the power of collaboration. Two heads are better than one in achieving any goal, so imagine what three or more can do together!"},
  //   {key: "5a", text: "I hope this little spiel gave you a fair idea of who you'd be working with. Oh, and I'm also here for the money, but that's for later, when I become competent enough to earn my keep. For now, the goal is to become indispensable due to my competence. Therefore, the learning and application of what I've learned continues."}
  // ];

  // const imagesBlock = [
  //   { key: "1b", source: html , alternative: "HTML", text: "HTML" },
  //   { key: "2b", source: css, alternative:"CSS" , text: "CSS"},
  //   { key: "3b", source: js, alternative: "JavaScript", text: "JavaScript"},
  //   { key: "4b", source: react, alternative: "React", text: "React"},
  //   { key: "5b", source: bootstrap, alternative: "Bootstrap", text: "Bootstrap"},
  //   { key: "7b", source: aws, alternative: "AWS", text: "AWS"},
  //   { key: "8b", source: tailwindcss, alternative: "TailwindCss", text: "TailwindCss"},
  //   { key: "9b", source: svelte, alternative: "Svelte", text: "Svelte"}
  // ];
  const [job, setJob] = React.useState("");
  const professions = React.useMemo(() => (["A Frontend Developer", "An AWS Certified Cloud Practitioner", "A Chemical Engineer"]), []);
  // const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0);
  // const [currentJob, setCurrentJob] = React.useState(professions[0]);
  // const [transitioning, setTransitioning] = React.useState(false);

  // const loopInterval = useInterval(()=>{
  //     if(!transitioning){
  //       const currentJobArray = currentJob.split("");
  //       const currentLetter = currentJobArray[currentLetterIndex];
  //       if(job.length === currentJob.length){
  //         setTransitioning(true);
  //         setTimeout(()=>{
  //           setJob("");
  //           setCurrentJob(professions[(professions.indexOf(job) + 1) % professions.length]);
  //           setCurrentLetterIndex(0);
  //           setTransitioning(false);
  //         }, 1000);
  //       }else{
  //         job === "" ? setJob(currentLetter) : setJob(prevJob => prevJob + currentLetter);
  //         setCurrentLetterIndex((currentLetterIndex + 1) % currentJobArray.length);
  //       }  
  //     }
  //   }, 100);

  // React.useEffect(()=>{
  //   return clearInterval(loopInterval);
  // }, []);

  const goToSite = React.useCallback((event) => {
    const tagId = event.target.id;
    let linkHref = null;
    let downloadFile = null;

    switch (tagId) {
      case "download":
        linkHref = "https://drive.google.com/file/d/1-cre1Pntc0uAErKKh8XLwmWQFK_33-Zj/view?usp=sharing";
        downloadFile = "DAVID_AKYER_RESUME.pdf";
        const link = document.createElement("a");
        link.href = linkHref;
        link.download = downloadFile;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      case "github":
        linkHref = "https://github.com/dkmakyer";
        break;
      case "linkedIn":
        linkHref = "https://www.linkedin.com/in/david-akyer/";
        break;
      default:
        return;
    }

    if(linkHref){
      window.open(linkHref, "_blank");
    }
  }, []);



  return (
    <>
      <div className="home-container">
        <header />
        <main>
          <div className="introduction">
            <h1>
              Hello, I am <span className="my-name">David</span>.
            </h1>
            <h2>
              <Typing
                speed={50}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
                cursorRenderer={cursor => <span>{cursor}</span>}
                text={professions}
              />
            </h2>
            <p>
              I enjoy transforming UI designs into visually appealing and
              functional websites. I am passionate about crafting user-friendly
              interfaces and dedicated to delivering high-quality work.
              Currently, I am expanding my skills to become a full-stack
              developer. Explore my portfolio to see my journey and projects!
            </p>
            <div className="socials">
              <FontAwesomeIcon icon={faGithub} id="github" onClick={goToSite} />
              <FontAwesomeIcon icon={faLinkedin} id="linkedIn" onClick={goToSite} />
            </div>
            <div className="buttons">
              <Link to="/projects">Projects</Link>
              <button onClick={goToSite} id="download">Download Resume</button>
            </div>
          </div>
          <div className="intro-img">
            <p className="intro-img-container"></p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
