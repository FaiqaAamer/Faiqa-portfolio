import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const roles = ["Web Developer", "CS Student"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let currentRole = roles[roleIndex];
    let interval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          // erase letter by letter
          let eraseIndex = currentRole.length;
          let eraseInterval = setInterval(() => {
            if (eraseIndex > 0) {
              setDisplayText(currentRole.substring(0, eraseIndex - 1));
              eraseIndex--;
            } else {
              clearInterval(eraseInterval);
              setRoleIndex((roleIndex + 1) % roles.length);
            }
          }, 80);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <div className="chalkboard-container">
    <div className="chalkboard-left">
        <p className="chalk-text">Hi, I am <span className="name">Faiqa Aamer</span></p>
        <p className="chalk-role">{displayText}</p>
        <div className="chalk-stick"></div>
    </div>
    <div className="chalkboard-right"></div>
    </div>
  );
};

export default Hero;
