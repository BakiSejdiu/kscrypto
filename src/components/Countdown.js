import React, { useState, useEffect } from "react";
import '../styles/Countdown.css'

function Countdown() {
  const [secondsTime, setSecondsTime] = useState();
  const [minutesTime, setMinutesTime] = useState();
  const [hoursTime, setHoursTime] = useState();
  const [daysTime, setDaysTime] = useState();


  async function setCountdown() {

    const now = new Date();
    const end = new Date("December 30,2022")

    const nowTime = now.getTime();
    const endTime = end.getTime();

    const countdown = endTime - nowTime;

      let seconds = Math.floor(countdown  / 1000);
      let minutes = Math.floor(seconds /  60 );
      let hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      seconds = seconds % 60;
      minutes = minutes % 60;
      hours = hours % 24;

      seconds = seconds < 10 ? "0" + seconds :seconds;
      minutes = minutes < 10 ? "0" + minutes :minutes;
      hours = hours < 10 ? "0" + hours : hours;

        setSecondsTime(seconds);
        setMinutesTime(minutes);
        setHoursTime(hours);
        setDaysTime(days); 

 setTimeout(setCountdown, 1000)
  };

  useEffect(() => {
    setCountdown();
    return () => {
        setSecondsTime();
      };
  },[]);

  return (

        <section className="clock">
            <span className="infoTime">{daysTime}
            <small>Days</small></span>
            <span className="infoTime">{hoursTime}
            <small>Hours</small></span>
            <span className="infoTime">{minutesTime}
            <small>Minutes</small></span>
            <span className="infoTime">{secondsTime}
            <small>Seconds</small></span>

        </section>

  );
}

export default Countdown;
