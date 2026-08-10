import React, { useEffect, useState } from "react";
import "./Hero.css";
import note from "../../assets/Hero/stickyNote.png"

const Hero = () => {
  const roles = ["Web Developer", "CS Student"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [chalkPos, setChalkPos] = useState(0); // chalk position

  useEffect(() => {
    let charIndex = 0;
    let currentRole = roles[roleIndex];
    let interval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setChalkPos(charIndex * 20); // move chalk as letters appear
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          let eraseIndex = currentRole.length;
          let eraseInterval = setInterval(() => {
            if (eraseIndex > 0) {
              setDisplayText(currentRole.substring(0, eraseIndex - 1));
              setChalkPos((eraseIndex - 1) * 20); // move chalk back as letters erase
              eraseIndex--;
            } else {
              clearInterval(eraseInterval);
              setRoleIndex((roleIndex + 1) % roles.length);
            }
          }, 100);
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
        <div
            className="chalk-stick"
            style={{ transform: `translateX(${chalkPos}px) rotate(13deg)` }}
        ></div>
        <p className="chalk-tagline">
        Computer Science student with a passion for clean code, good design, and building things that work
        </p>
    </div>

    <div className="chalkboard-right">
        <img src={note} alt="Sticky Note" className="sticky-note1" />
        <p className="p1">Home</p>
        <img src={note} alt="Sticky Note" className="sticky-note2" />
        <p className="p2">About</p>
        <img src={note} alt="Sticky Note" className="sticky-note3" />
        <p className="p3">Skills</p>
        <img src={note} alt="Sticky Note" className="sticky-note4" />
        <p className="p4">Education</p>
        <img src={note} alt="Sticky Note" className="sticky-note5" />
        <p className="p5">Projects</p>
        <img src={note} alt="Sticky Note" className="sticky-note6" />
        <p className="p6">Contact</p>
    </div>
    </div>
  );
};

export default Hero;
