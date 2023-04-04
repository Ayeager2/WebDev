import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/annanyeager/"
                target="_blank"
                rel="linkedin"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/Ayeager2" target="_blank" rel="github">
                <FaGithub />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="linkedin">
                <FaDribbble />
            </a>
        </div>
    );
};

export default HeaderSocials;
