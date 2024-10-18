import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(60);
  const [hours, setHours] = useState(12);
  const [days, setDays] = useState(14);
  const [cartRotate, setCartRotate] = useState("");
  const handleTimeCountDown = () => {
    setCartRotate("");
    setSeconds(seconds - 1);
    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(60);
    }
    if (seconds === 0 && minutes === 0) {
      setHours(hours - 1);
      setSeconds(60);
      setMinutes(60);
    }
    if (seconds === 0 && minutes === 0 && hours === 0) {
      setDays(days - 1);
      setSeconds(60);
      setMinutes(60);
      setHours(12);
    }
    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      setSeconds(60);
      setMinutes(60);
      setHours(12);
      setDays(0);
    }
  };
  setTimeout(() => {
    handleTimeCountDown();
  }, 1000);

  useEffect(() => {
    setCartRotate(cartRotate === "rotate" && "");
  }, [seconds, minutes, hours, days]);
  return (
    <section className=" md:w-[60%] lg:w-[50%] xl:w-[45%] w-[90%] gap-8 uppercase text-main text-grayish-blue flex flex-row items-center justify-center">
      <div className="box-container">
        <div className={`clock-box ${cartRotate}`}>
          <div className="bg-transparent w-full h-[0.6rem] flex flex-row items-center justify-between absolute shadow-lg top-[3rem] shadow-blue-300">
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-r-xl"></span>
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-l-xl"></span>
          </div>
          <span className="text-[4.6rem] font-extrabold text-soft-red">
            {days < 10 ? `0${days}` : days}
          </span>
        </div>
        <p className="text-main">{days <= 1 ? "day" : "days"}</p>
      </div>
      <div className="box-container">
        <div className={`clock-box ${cartRotate}`}>
          <div className="bg-transparent w-full h-[0.6rem] flex flex-row items-center justify-between absolute shadow-lg top-[3rem] shadow-blue-300">
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-r-xl"></span>
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-l-xl"></span>
          </div>
          <span className="text-[4.6rem] font-extrabold text-soft-red">
            {hours < 10 ? `0${hours}` : hours}
          </span>
        </div>
        <p className="text-main">{hours <= 1 ? "hour" : "hours"}</p>
      </div>
      <div className="box-container">
        <div className={`clock-box ${cartRotate}`}>
          <div className="bg-transparent w-full h-[0.6rem] flex flex-row items-center justify-between absolute shadow-lg top-[3rem] shadow-blue-300">
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-r-xl"></span>
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-l-xl"></span>
          </div>
          <span className="text-[4.6rem] font-extrabold text-soft-red">
            {minutes < 10 ? `0${minutes}` : minutes}
          </span>
        </div>
        <p className="text-main">{minutes <= 1 ? "minute" : "minutes"}</p>
      </div>
      <div className="box-container">
        <div className={`clock-box ${cartRotate}`}>
          <div className="bg-transparent w-full h-[0.6rem] flex flex-row items-center justify-between absolute shadow-lg top-[3rem] shadow-blue-300">
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-r-xl"></span>
            <span className="bg-very-ddark-blue h-full w-[0.45rem] rounded-l-xl"></span>
          </div>
          <span className="text-[4.6rem] font-extrabold text-soft-red">
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
        <p className="text-main">{seconds <= 1 ? "second" : "seconds"}</p>
      </div>
    </section>
  );
};

export default CountDown;
