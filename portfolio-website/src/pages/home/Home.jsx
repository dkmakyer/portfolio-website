import React, { useCallback } from "react";
import "./home.css";
import { Link} from "react-router-dom";
import Typing from "react-typing-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const Home = () => {

  // const [job, setJob] = React.useState("");
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
