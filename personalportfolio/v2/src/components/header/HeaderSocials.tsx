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
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                tabIndex={0}
            >
                <BsLinkedin role="img" aria-hidden="true" />
            </a>
            <a
                href="https://github.com/Ayeager2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                tabIndex={0}
            >
                <FaGithub role="img" aria-hidden="true" />
            </a>
            <a
                href="https://www.midjourney.com/app/users/0f9e2802-d6ca-4299-8d89-340c7179ff93/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Midjourney profile"
                tabIndex={0}
            >
                <img
                    src={Midjourney}
                    alt="Midjourney logo"
                    className="midjourneyIcon"
                    tabIndex={0}
                    aria-label="Midjourney logo"
                />
            </a>
        </div>
    );
};

export default HeaderSocials;
