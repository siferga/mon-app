import React from "react";
import ProjectCard from "./ProjectCards.js";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import  portfolio from "../../assets/Projects/projetPortfolio.png";
import application from "../../assets/Projects/projetCampagnes.png";
import blog from "../../assets/Projects/siteMarseille.jpg";
import ScrollService from "../../utilities/ScrollService";
import Animations from '../../utilities/Animations';
import './Projects.css';

export default function Projects(props) {
    let fadeInScreenHandler = (screen)=>{
      if(screen.fadeInScreen !== props.id)
      return;
      Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = 
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='project-container' id={props.id || ""}>
      <div className="project-heading"> 
      <ScreenHeading title={'Projets'}/>
      </div>
      <div className="project-card-container">
        <div className="project-card">
          <ProjectCard
            imgPath={portfolio}
            isBlog={false}
            title="Portfolio"
            description=" Html, Bootstrap et JS"
            ghLink="https://majestic-sunshine-5523f2.netlify.app/"
            demoLink="https://majestic-sunshine-5523f2.netlify.app/"
            />
        </div>
          
        <div className="project-card">
          <ProjectCard
            imgPath={application}
            isBlog={false}
            title="Application de gestion"
            description=" Symfony 5 et Bootstrap 5"
            ghLink="https://github.com/siferga/Campagnes_Webmarketing"
            demoLink="https://google.com/"
          />
        </div>
      
        <div className="project-card">
          <ProjectCard
            imgPath={blog}
            isBlog={false}
            title="Site Marseille"
            description="Symfony"
            ghLink="https://github.com"
            demoLink="https://google.com/"              
          />
        </div>

      </div>
      <div className="project-card-container">
        <div className="project-card">
          <ProjectCard
            imgPath={portfolio}
            isBlog={false}
            title="Portfolio"
            description=" Html, Bootstrap et JS"
            ghLink="https://majestic-sunshine-5523f2.netlify.app/"
            demoLink="https://majestic-sunshine-5523f2.netlify.app/"
            />
        </div>
          
        <div className="project-card">
          <ProjectCard
            imgPath={application}
            isBlog={false}
            title="Application de gestion"
            description=" Symfony 5 et Bootstrap 5"
            ghLink="https://github.com/siferga/Campagnes_Webmarketing"
            demoLink="https://google.com/"
          />
        </div>
      
        <div className="project-card">
          <ProjectCard
            imgPath={blog}
            isBlog={false}
            title="Site Marseille"
            description="Symfony"
            ghLink="https://github.com"
            demoLink="https://google.com/"              
          />
        </div>

      </div>
      
    </div>
  );
}


