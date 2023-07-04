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
            paragraphe1: [
                "Après une formation et un stage en entreprise, j’ai obtenu le titre professionnel de Développeur Web et Web Mobile, me donnant l’opportunité de continuer à apprendre dans un secteur qui m’a toujours attiré.",
            ],
            paragraphe2: [
                "Mes différentes expériences professionnelles dans les secteurs du Tourisme et du Commerce, en Espagne, Angleterre et France, m’ont aidé à développer ma capacité d'adaptation, la pratique de langues et à mieux connaitre le besoin client. Parmis mes postes, chargée de la conception de voyages dans une agence en France, le respect des échéances était clef, avec les clients et les fournisseurs, ce qui m'a permis de développer mon sens de l’organisation et de la rigueur.",
            ],
           
            paragraphe3: [
                "Je cherche un contrat comme développeuse web junior ou un contrat en alternance pour continuer à me former et atteindre le titre professionnel de 'Concepteur Développeur d'Applications Web.",
            ],
            
        },

        highlights: {
            bullets: [
                    "Musique, je joue la clarinette",
                    "Sport, je fais du tennis",
                    "Permit de conduire, j'ai une voiture",
            ],
            heading: "",
        },
    };


  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'A propos de moi'}/>
            <div className='about-me-card'>
                <div className='about-me-details'>
                    <div className='about-me-description'>
                        <div className='description-paragraphe1'>
                            <span> {SCREEN_CONSTSANTS.description.paragraphe1}</span>    
                        </div>
                        <div className='description-paragraphe2'>
                            <span> {SCREEN_CONSTSANTS.description.paragraphe2}</span>    
                        </div>
                        <div className='description-paragraphe3'>
                            <span> {SCREEN_CONSTSANTS.description.paragraphe3}</span>    
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  );
}
