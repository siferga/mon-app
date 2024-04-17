import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/silviafernandezgarcia1/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://www.instagram.com/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://github.com/siferga'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            <h1>Silvia Fernandez Garcia 
                            </h1>
                            <span className='highlighted-text'></span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h2>Développeuse Web Full Stack 
                            </h2>
                            <h1>💻 ⚛️ </h1>
                            <span className="profile-role-tagline">
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <a href="CV Silvia portfolio.pdf" download="CV Silvia Fernandez.pdf">
                            <button className="btn highlighted-btn">Mon CV</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}