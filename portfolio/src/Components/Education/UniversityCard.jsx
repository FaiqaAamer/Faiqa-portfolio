import React from "react";
import "./UniversityCard.css";

import RibbonImage from "../../assets/Education/Ribbon.png";
import CardImage from "../../assets/Education/Plain_card.png";
import UniLogo from "../../assets/Education/Pugc_logo.png";

function UniversityCard() {

    const handleClick = (e) => {
        const hanger = e.currentTarget.parentElement;

        hanger.classList.remove("uni-swing");

        // Restart animation
        void hanger.offsetWidth;

        hanger.classList.add("uni-swing");
    };

    return (
        <div className="uni-card-wrapper">

            <div className="uni-hanger">

                <img
                    src={RibbonImage}
                    className="uni-ribbon"
                    alt="Ribbon"
                    onClick={handleClick}
                />

                <div className="uni-card">

                    <img
                        src={CardImage}
                        className="uni-card-bg"
                        alt="University Card"
                    />

                    <div className="uni-card-info">

                        <div className="uni-card-header">

                            <img
                                src={UniLogo}
                                className="uni-logo"
                                alt="University Logo"
                            />

                            <h2>
                                University of the Punjab,
                                Gujranwala Campus
                            </h2>

                        </div>

                        <p>
                            <strong>Degree:</strong>{" "}
                            Bachelor of Computer Science
                        </p>

                        <p>
                            <strong>Duration:</strong>{" "}
                            2024 – 2028
                        </p>

                        <p>
                            <strong>CGPA:</strong>{" "}
                            3.88 / 4.0
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default UniversityCard;