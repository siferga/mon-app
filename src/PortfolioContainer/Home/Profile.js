import React from "react";
import Typical from "react-typical";
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
                            <a href='https://discord.com/'>
                                <i className='fa fa-discord'></i>
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
                            Hello, I'm  <span className='highlighted-text'>Silvia</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {" "}
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Dev 🛑", 
                                        1000,
                                        "React Developer ⚛️", 
                                        1000,
                                        "Enthusiastic Developer", 
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                I am courious and looking for a place into the web insdustry.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="CV Silvia portfolio.pdf" download="CV Silvia Fernandez.pdf">
                            <button className="btn highlighted-btn">Get CV</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                    </div>
                </div>
            </div>
        </div>
    )
}