import React from "react";
import "./UniversityCard.css";
import UniCardImage from "../../assets/Education/Plain_card.png";
import UniLogo from "../../assets/Education/Pugc_logo.png"; // add your logo here

function UniversityCard() {
  return (
    <div className="uni-card-wrapper">
      <img src={UniCardImage} alt="University ID Card" className="card-bg" height={450}/>
      <div className="card-info">
        <div className="card-header">
          <img src={UniLogo} alt="University Logo" className="uni-logo" />
          <h2 style={{fontSize:"10px",color:"#b3894f"}}>University of the Punjab, Gujranwala Campus</h2>
          <p style={{fontSize:"8px",color:"#b3894f"}}>Class of 2028</p>
        </div>
        <p><strong>Degree:</strong> Bachelor of Computer Science</p>
        <p><strong>Duration:</strong> 2024 – 2028</p>
        <p><strong>Semester:</strong> 4th</p>
        <p><strong>CGPA:</strong> 3.88 / 4.0</p>
      </div>
    </div>
  );
}

export default UniversityCard;
