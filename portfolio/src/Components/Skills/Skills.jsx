import React, { useState, useEffect } from "react";
import "./Skills.css";
import ComputerImg from "../../assets/Skills/Computer.png"; 
import DemoVideo from "../../assets/Skills/demo.mp4";
import { Power } from "lucide-react";

function Skills() {
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState("--:--");
  const [date, setDate] = useState("");

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
      setDate(
        now.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    }
    updateClock();
    const interval = setInterval(updateClock, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={`desk ${isOn ? "on" : ""}`}>
        <img className="photo" src={ComputerImg} alt="Computer Desk" />

        <div className="screen">
          <div className="screen-content">
            {isOn ? (
              <video 
                src={DemoVideo} 
                autoPlay 
                muted 
                loop 
                className="video-player"
              />
            ) : (
              <>
                <div className="boot-logo"></div>
                <div className="clock-text">{time}</div>
                <div className="date-text">{date}</div>
              </>
            )}
          </div>
        </div>

        <div className="power-led"></div>
        <button
            type="button"
            className="power-btn"
            aria-label="Power button"
            onClick={() => setIsOn(!isOn)}
        >
            <Power size={10} color={isOn ? "#167b02" : "#8e0202"} />
        </button>


      </div>
    </div>
  );
}

export default Skills;
