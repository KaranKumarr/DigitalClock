import React, { useState } from "react";
import './Clock.css';

const Clock = () => {

  let time = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(time);

  setInterval(function updatingTime() {
    let newTime = new Date().toLocaleTimeString();
    setCTime(newTime);
  }, 1000);

  return <>
    <div className="content">
      <div className="box">
        <h1>{cTime}</h1>
      </div>
    </div>
  </>
};

export default Clock;
