import React, { useState, useEffect } from "react";

function VirtualDomTimer() {
  const initialTime = new Date(Date.now()).toLocaleTimeString();
  const [time, setTime] = useState(initialTime);

  const getTime = () => {
    const newTime = new Date(Date.now()).toLocaleTimeString();
    return newTime;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      //   const updatedTime = getTime();
      setTime(getTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="time-container">
      <p>
        Check the DOM onlt the{" "}
        <em>
          <b>time</b>
        </em>{" "}
        div is repainting.
      </p>
      <p>
        But if we check the same code in normal JS code whole container will
        <b>
          <u> repaint</u>
        </b>{" "}
        every second
      </p>
      <div className="timer-class">{time}</div>
    </div>
  );
}

export default VirtualDomTimer;
