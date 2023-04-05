import React from "react";
import CV from "../../assets/cv.pdf";
const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn" tabIndex={0}>
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary" tabIndex={0}>
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
