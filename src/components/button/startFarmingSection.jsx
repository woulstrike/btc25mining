import "./css/startFarmingSection.css";
import coinImg from "../assets/coin.png";
import { useState, useEffect } from "react";

export function StartFarmingSection() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [startTime, setStartTime] = useState(localStorage.getItem("startTime"));

  useEffect(() => {
    if (startTime) {
      const currentTime = new Date().getTime();
      const endTime = parseInt(startTime) + 8 * 60 * 60 * 1000;
      const timeRemaining = endTime - currentTime;
      if (timeRemaining > 0) {
        setIsButtonDisabled(true);
        const timer = setInterval(() => {
          const currentTime = new Date().getTime();
          const timeRemaining = endTime - currentTime;
          const hours = Math.floor(timeRemaining / (60 * 60 * 1000));
          const minutes = Math.floor(
            (timeRemaining % (60 * 60 * 1000)) / (60 * 1000)
          );
          const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

          setTimeLeft(
            `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );

          if (timeRemaining <= 0) {
            clearInterval(timer);
            setIsButtonDisabled(false);
            localStorage.removeItem("startTime");
          }
        }, 1000);
      } else {
        setIsButtonDisabled(false);
        localStorage.removeItem("startTime");
      }
    }
  }, [startTime]);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      const currentTime = new Date().getTime();
      setStartTime(currentTime.toString());
      localStorage.setItem("startTime", currentTime.toString());
      setIsButtonDisabled(true);
    }
  };

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="icon-container">
          <img
            src={coinImg}
            alt="Icon"
            className="icon"
            style={{ width: "75px", height: "75px" }}
          />
          <span className="icon-text">@BTC25</span>
        </div>
        <span className="counter">0,000.000</span> {/* ЗДЕСЬ НУЖНО сделать правильный счетчик, чтобы каждую секунду прибавляло +2(0,000.002) (чтобы в итоге получить 0,057.000)*/}
      </div>
      <button
        className={`centered-button ${isButtonDisabled ? "disabled" : ""}`}
        onClick={handleButtonClick}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled && timeLeft ? `Wait ${timeLeft}` : "Start Farm"}
      </button>
    </div>
  );
}
