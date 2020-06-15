import React, { useState, useEffect } from "react";

function Hands() {
  const [date, setDate] = useState(new Date());

  console.log(date);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentSecondsDegree = (date.getSeconds() / 60) * 360;
  const currentMinutesDegree =
    ((date.getMinutes() + date.getSeconds() * 60) / 60) * 360;
  const currentHoursDegree =
    ((date.getHours() + date.getMinutes() * 60) / 12) * 360;

  return (
    <div className="hands">
      <div
        className="hand hour-hand"
        style={{
          transform: `translateX(-50%) rotate(${currentHoursDegree}deg)`,
        }}
      ></div>
      <div
        className="hand minute-hand"
        style={{
          transform: `translateX(-50%) rotate(${currentMinutesDegree}deg)`,
        }}
      ></div>
      <div
        className="hand second-hand"
        style={{
          transform: `translateX(-50%) rotate(${currentSecondsDegree}deg)`,
        }}
      ></div>
    </div>
  );
}

export default Hands;
