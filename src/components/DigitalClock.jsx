import React from "react";
import "../scss/digitalClock.scss";

function DigitalClock() {
  let time = new Date().toLocaleTimeString();
  const [clock, setClock] = React.useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setClock(time);
  };
  setInterval(updateTime, 1000);

  return (
    <div className="clock__div">
      <div className="clock__time">{clock}</div>
    </div>
  );
}

export default DigitalClock;
