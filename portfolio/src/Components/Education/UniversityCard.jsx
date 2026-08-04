import React from "react";
import "./UniversityCard.css";

import RibbonImage from "../../assets/Education/Ribbon.png";
import CardImage from "../../assets/Education/Plain_card.png";
import UniLogo from "../../assets/Education/Pugc_logo.png";

function UniversityCard() {
  return (
    <div className="uni-card-wrapper">

      <img
        src={RibbonImage}
        alt="Ribbon"
        className="ribbon"
      />

      <div className="uni-card">

        <img
          src={CardImage}
          alt="University Card"
          className="uni-card-bg"
        />

        <div className="uni-card-info">

          <div className="uni-card-header">

            <img
              src={UniLogo}
              alt="University Logo"
              className="uni-logo"
            />

            <h2>
              University of the Punjab,
              Gujranwala Campus
            </h2>

          </div>

          <p>
            <strong>Degree:</strong> Bachelor of Computer Science
          </p>

          <p>
            <strong>Duration:</strong> 2024 – 2028
          </p>

          <p>
            <strong>CGPA:</strong> 3.88 / 4.0
          </p>

        </div>

      </div>

    </div>
  );
}

export default UniversityCard;