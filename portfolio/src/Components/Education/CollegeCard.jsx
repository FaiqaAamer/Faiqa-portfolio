import React from "react";
import "./CollegeCard.css";

import RibbonImage from "../../assets/Education/Ribbon.png";
import CardImage from "../../assets/Education/Plain_card.png";
import CollegeLogo from "../../assets/Education/Pgc_logo.png";

function CollegeCard() {
  return (
    <div className="college-card-wrapper">

      <img
        src={RibbonImage}
        alt="Ribbon"
        className="ribbon"
      />

      <div className="college-card">

        <img
          src={CardImage}
          alt="College Card"
          className="college-card-bg"
        />

        <div className="college-card-info">

          <div className="college-card-header">

            <img
              src={CollegeLogo}
              alt="College Logo"
              className="college-logo"
            />

            <h2>
              Punjab College for Women Campus 1,
              Gujranwala
            </h2>

          </div>

          <p>
            <strong>Degree:</strong> Intermediate in Computer Science
          </p>

          <p>
            <strong>Duration:</strong> 2022 – 2024
          </p>

          <p>
            <strong>Grade:</strong> A+
          </p>

        </div>

      </div>

    </div>
  );
}

export default CollegeCard;