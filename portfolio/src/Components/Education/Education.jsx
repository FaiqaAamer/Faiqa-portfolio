import "./Education.css";
import SchoolCard from "./SchoolCard";
import CollegeCard from "./CollegeCard";
import UniversityCard from "./UniversityCard";
import FrameImage from "../../assets/Education/Frame (2).png";

function Education() {
  return (
    <section className="education-frame">

      <div className="frame-container">

        <img src={FrameImage} alt="Frame" className="frame-bg" />

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