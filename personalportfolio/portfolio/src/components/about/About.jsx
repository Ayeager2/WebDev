import React from "react";
import "./about.css";
import AboutMe from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={AboutMe} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>2+ Years Working </small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Large Company</h5>
                            <small>Complex Project</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Always Working</h5>
                            <small>View Projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ut in debitis possimus ipsum officiis, alias
                        praesentium error ipsam reiciendis odit optio minima
                        pariatur voluptate eius consequatur, laudantium dolor ea
                        ducimus?
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk{" "}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
