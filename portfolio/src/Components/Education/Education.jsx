import React from "react";
import "./Education.css";
import SchoolCard from "./SchoolCard";
import CollegeCard from "./CollegeCard";
import UniversityCard from "./UniversityCard";
import FrameImage from "../../assets/Education/Frame.png"; 

function Education() {
  return (
    <section className="education-frame">
      <div className="frame-container">
        <img src={FrameImage} alt="Wooden Frame" className="frame-bg" />
        <div className="edu-content">
          <div className="edu-cards">
            <SchoolCard />
            <CollegeCard />
            <UniversityCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
