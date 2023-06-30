import React,{ useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description: {
            paragraphes: [
                    "Après une formation et un stage de 2 mois en entreprise, j’ai obtenu le titre professionnel de Développeur Web et Web Mobile, ce qui me donne l’opportunité de continuer à aprendre dans un secteur qui m’a toujours attiré.",
                    "Mon parcours, effectué dans des différentes secteurs, pays et entreprises, m’a aidé à développer ma capacité d'adaptation, et m’a donné l’opportunité d’être en contact avec les clients, et apprendre à mieux connaitre leurs besoins.",
                    "Je cherche un contrat en alternance pour continuer à me former et atteindre le titre professionnel de 'Concepteur Développeur d'Applications Web",
                    "Expérience dans les secteur Tourisme et Commerce",
                    "En charge de la conception de voyages dans une agence receptive en France, j'ai du respecter les échéances établies avec les clients et les fournisseurs, permis de développer mon sens de l’organisation et de la rigueur",
            ],
            
        },

        highlights: {
            bullets: [
                    "Html/CSS",
                    "En charge les de développer mon sens de l’organisation et de la rigueur",
            ],
            heading: "Here are a Few Highlights",
        },
    };

/*Paragraphes*/
    const renderParagraphes = () => {
        return SCREEN_CONSTSANTS.description.paragraphes.map((value, i) => (
            <div className="paragraphes">
                <span>{value}</span>
            </div>
        ));
    };

/*bulets*/ 
    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'A propos de moi'}/>
            <div className='about-me-card'>
                <div className='about-me-details'>
                    <div className='about-me-description'>
                        <div className='description-paragraphe'>
                            <span> {SCREEN_CONSTSANTS.description.paragraphes}</span>    
                        </div>
                        {renderParagraphes()}
                    </div>
                   
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                        </div>
                        {renderHighlight()}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
