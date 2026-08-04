import React from "react";
import "./SchoolCard.css";
import CardImage from "../../assets/Education/Plain_card.png";
import SchoolLogo from "../../assets/Education/Jtb_logo.png"; 

function SchoolCard() {
  return (
    <div className="school-card-wrapper">
      <img src={CardImage} alt="School ID Card" className="card-bg" height={450}/>
      <div className="card-info">
        <div className="card-header">
          <img src={SchoolLogo} alt="School Logo" className="edu-logo" />
          <h2 style={{fontSize:"10px",color:"#b3894f",marginBottom:"10px"}}>Jamia-tul-Binat Higher Secondary School, Gujranwala</h2>
        </div>
        <p><strong>Degree:</strong> Matriculation in Science</p>
        <p><strong>Duration:</strong> 2020 – 2022</p>
        <p><strong>Grade:</strong> A+</p>
      </div>
    </div>
  );
}

export default SchoolCard;
