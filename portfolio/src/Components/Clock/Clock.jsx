import React, { useEffect, useState } from "react";
import "./Clock.css";

import ClockFace from "../../assets/Clock/Clock.png";
import HourHand from "../../assets/Clock/Hour_hand.png";
import MinuteHand from "../../assets/Clock/Minute_hand.png";
import SecondHand from "../../assets/Clock/Second_hand.png";

function Clock() {

  const [time, setTime] = useState(new Date());

  // Update every second
  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);


  const seconds = time.getSeconds();
  const minutes = time.getMinutes();

  // 12-hour format
  const hours = time.getHours() % 12;


  // Calculate hand angles
  const secondAngle = seconds * 6;

  const minuteAngle =
    minutes * 6 + seconds * 0.1;

  const hourAngle =
    hours * 30 + minutes * 0.5;


  return (
    <div className="clock">

      {/* Clock Face */}
      <img
        src={ClockFace}
        className="clock-face"
        alt="Clock"
      />


      {/* Hour Hand */}
      <img
        src={HourHand}
        className="clock-hand clock-hour-hand"
        style={{
          transform: `rotate(${hourAngle}deg)`
        }}
        alt="Hour hand"
      />


      {/* Minute Hand */}
      <img
        src={MinuteHand}
        className="clock-hand clock-minute-hand"
        style={{
          transform: `rotate(${minuteAngle}deg)`
        }}
        alt="Minute hand"
      />


      {/* Second Hand */}
      <img
        src={SecondHand}
        className="clock-hand clock-second-hand"
        style={{
          transform: `rotate(${secondAngle}deg)`
        }}
        alt="Second hand"
      />

    </div>
  );
}

export default Clock;