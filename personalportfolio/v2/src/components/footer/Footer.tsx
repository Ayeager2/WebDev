import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                ANY
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/Ayeager2">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/annanyeager/">
                    <AiFillLinkedin />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Anna N Yeager </small>
            </div>
        </footer>
    );
};

export default Footer;
