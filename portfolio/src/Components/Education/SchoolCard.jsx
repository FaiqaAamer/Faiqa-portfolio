import React from "react";
import "./SchoolCard.css";

import RibbonImage from "../../assets/Education/Ribbon.png";
import CardImage from "../../assets/Education/Plain_card.png";
import SchoolLogo from "../../assets/Education/Jtb_logo.png";

function SchoolCard() {

  const handleClick = () => {
    const hanger = document.querySelector(".hanger");

    hanger.classList.remove("swing");
    void hanger.offsetWidth; // Restart animation
    hanger.classList.add("swing");
  };

  return (
    <div className="school-card-wrapper">

      <div className="hanger">

        <img
          src={RibbonImage}
          className="ribbon"
          alt="Ribbon"
          onClick={handleClick}
        />

        <div className="school-card">
          <img src={CardImage} className="school-card-bg" alt="Card" />

          <div className="school-card-info">
            <div className="school-card-header">
              <img
                src={SchoolLogo}
                alt="School Logo"
                className="school-logo"
              />

              <h2>
                Jamia-tul-Binat Higher Secondary School,
                Gujranwala
              </h2>
            </div>

            <p>
              <strong>Degree:</strong> Matriculation in Science
            </p>

            <p>
              <strong>Duration:</strong> 2020 – 2022
            </p>

            <p>
              <strong>Grade:</strong> A+
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default SchoolCard;