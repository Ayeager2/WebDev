import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "active" : ""}
                tabIndex={0}
                aria-current={activeNav === "#home" ? "page" : undefined}
            >
                <span className="visually-hidden" aria-label="Home Link">
                    <AiOutlineHome aria-hidden="true" />
                </span>
            </a>
            <a
                href="#about"
                className={activeNav === "#about" ? "active" : ""}
                onClick={() => setActiveNav("#about")}
                aria-current={activeNav === "#about" ? "page" : undefined}
                tabIndex={0}
            >
                <span className="visually-hidden" aria-label="About Link">
                    <AiOutlineUser aria-hidden="true" />
                </span>
            </a>
            <a
                href="#experience"
                className={activeNav === "#experience" ? "active" : ""}
                onClick={() => setActiveNav("#experience")}
                aria-current={activeNav === "#experience" ? "page" : undefined}
                tabIndex={0}
            >
                <span className="visually-hidden" aria-label="Experience Link">
                    <BiBook aria-hidden="true" />
                </span>
            </a>
            <a
                href="#service"
                className={activeNav === "#service" ? "active" : ""}
                onClick={() => setActiveNav("#service")}
                aria-current={activeNav === "#service" ? "page" : undefined}
                tabIndex={0}
            >
                <span className="visually-hidden" aria-label="Services Link">
                    <RiServiceLine aria-hidden="true" />
                </span>
            </a>
            <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={() => setActiveNav("#contact")}
                aria-current={activeNav === "#contact" ? "page" : undefined}
                tabIndex={0}
            >
                <span className="visually-hidden" aria-label="Contact Link">
                    <BiMessageSquareDetail aria-hidden="true" />
                </span>
            </a>
        </nav>
    );
};

export default Nav;
