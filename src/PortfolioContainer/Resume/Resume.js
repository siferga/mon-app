import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Resume.css'

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
  
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : " "}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
  
    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];

  
    const projectsDetails = [
      {
        title: "Mon Portfolio",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "Un site Portfolio pour montrer mes details et projets.",
        subHeading: "React JS, Bootstrap",
      },
      {
        title: "Boutique e-commerce",
        duration: { fromDate: "2021", toDate: "2022" },
        description:
          "Une application de vente de produits en ligne avec systeme de payment",
        subHeading:
          "Symfony 5, Bootstrap 5",
      },
      {
        title: "Aplication ",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "Online ",
        subHeading:
          "Bootstrap 5",
      },
    ];
  
    const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"Titre Professionnel Développeur Web (DWWM)"}
          subHeading={"AFPA Territorial Digital"}
          fromDate={"2022"}
          toDate={"2023"}
        />
  
        <ResumeHeading
          heading={"Direction des Equipes de vente et Marketing"}
          subHeading={"Université Complutense de Madrid"}
          fromDate={"2010"}
          toDate={"2010"}
        />
        <ResumeHeading
          heading={"Licence en Tourisme"}
          subHeading={"Ecole de Tourisme CENP/UNED. Madrid"}
          fromDate={"1999"}
          toDate={"2002"}
        />
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"Agence e+p"}
            subHeading={"FULL STACK DEVELOPER"}
            fromDate={"2022"}
            toDate={"2022"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Currently working as MERN stack web and mobile developer and also an
              online instructor on udemy.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Developed an ecommerce website for client with the dashboard for
              managing the products, managing reviews, users, payment etc. .
            </span>
            <br />
            <span className="resume-description-text">
              - Integrated the web app with backend services to create new user
              onboarding application with dynamic form content.{" "}
            </span>
            <br />
            <span className="resume-description-text">
              - I stretch my mental capacity to develope UI as per the given
              designs.
            </span>
            <br />
          </div>
        </div>
      </div>,
      
  
      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Musique"
          description="Je joue la clarinette à l'école de musique de Saint Cannat."
        />
        <ResumeHeading
          heading="Music"
          description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
        />
        <ResumeHeading
          heading="Competitive Gaming"
          description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
        />
      </div>,
    ];
  
    const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };
  
    const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };
  
    const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
    useEffect(() => {
      return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);
  
    return (
      <div
        className="resume-container screen-container"
        id={props.id || ""}
      >
        <div className="resume-content">
          <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
  
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;
  