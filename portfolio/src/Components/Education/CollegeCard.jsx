import React from "react";
import "./CollegeCard.css";
import CardImage from "../../assets/Education/Plain_card.png";
import CollegeLogo from "../../assets/Education/Pgc_logo.png"; 

function CollegeCard() {
  return (
    <div className="college-card-wrapper">
      <img src={CardImage} alt="College ID Card" className="card-bg" height={450}/>
      <div className="card-info">
        <div className="card-header">
          <img src={CollegeLogo} alt="College Logo" className="edu-logo" />
          <h2 style={{fontSize:"10px",color:"#b3894f",marginBottom:"10px"}}>Punjab College for Women Campus 1, Gujranwala</h2>
        </div>
        <p><strong>Degree:</strong> Intermediate in Computer Science</p>
        <p><strong>Duration:</strong> 2022 – 2024</p>
        <p><strong>Grade:</strong> A+</p>
      </div>
    </div>
  );
}

export default CollegeCard;
