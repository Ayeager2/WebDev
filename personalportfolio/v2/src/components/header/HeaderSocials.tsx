import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Midjourney from "../../assets/midjourney.png";
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
            <a
                href="https://www.midjourney.com/app/users/0f9e2802-d6ca-4299-8d89-340c7179ff93/"
                target="_blank"
                rel="midjourney"
            >
                <img
                    src={Midjourney}
                    alt="midjourney"
                    className="midjourneyIcon"
                />
            </a>
        </div>
    );
};

export default HeaderSocials;
