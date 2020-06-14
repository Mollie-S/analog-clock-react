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

  return (
    <div className="hands">
      <div className="hand hour-hand"></div>
      <div className="hand minute-hand"></div>
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
