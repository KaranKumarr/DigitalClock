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
    <section className="main-content">
      <div className="box">
        <h1>{cTime}</h1>
      </div>
    </section>

  </>
};

export default Clock;
