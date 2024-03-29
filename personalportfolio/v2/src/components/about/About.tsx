import React from "react";
import "./about.css";
import AboutMe from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
    return (
        <section id="about" aria-labelledby="about-heading">
            <h2 id="about-heading">About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img
                            src={AboutMe}
                            alt="Generated photo of the author"
                        />
                    </div>
                </div>

                <div className="about__content">
                    <h3>Get to Know</h3>
                    <div className="about__cards">
                        <article className="about__card">
                            <h4>Experience</h4>
                            <p>2+ Years Working </p>
                            <div aria-hidden="true">
                                <FaAward
                                    className="about__icon"
                                    aria-hidden="true"
                                />
                            </div>
                        </article>

                        <article className="about__card">
                            <h4>Large Company</h4>
                            <p>Complex Project</p>
                            <div aria-hidden="true">
                                <FiUsers
                                    className="about__icon"
                                    aria-hidden="true"
                                />
                            </div>
                        </article>

                        <article className="about__card">
                            <h4>Always Working</h4>
                            <p>View Projects</p>
                            <div aria-hidden="true">
                                <VscFolderLibrary
                                    className="about__icon"
                                    aria-hidden="true"
                                />
                            </div>
                        </article>
                    </div>

                    <div>
                        <h3 className="visually-hidden">Introduction</h3>
                        <p>
                            I am a software engineer from Columbus, Ohio. In my
                            2+ years on the job I have completed a wide variety
                            of tasks within my company including creating and
                            debugging webpages and API calls for our legacy code
                            in .Net Framework 4.5. I was then given the task of
                            learning about our in-house SignalR client and
                            working towards re-writing the existing structure in
                            a separate .Net 6 API because it was overloading our
                            systems. This went hand in hand in working in our
                            Keystone Android application and learning about java
                            and android development. Most recently I was given
                            the task to lead the development of a brand new
                            project to re-write our legacy Keystone Delivery
                            application for the web. I was chosen for this
                            project because I have spent my nights learning
                            React working on side projects. I'm always looking
                            for new opportunities to work on new projects and
                            learn new things.
                        </p>
                    </div>

                    <div>
                        <h3 className="visually-hidden">Contact Me</h3>
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            aria-label="Link to contact section"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
