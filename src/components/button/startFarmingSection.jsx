import "./css/startFarmingSection.css";
import coinImg from "../assets/coin.png";
import { useState, useEffect } from "react";

export function StartFarmingSection() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [startTime, setStartTime] = useState(localStorage.getItem("startTime"));
  const [counter, setCounter] = useState(
    localStorage.getItem("counter")
      ? parseFloat(localStorage.getItem("counter"))
      : 0
  );
  const [counterDisplay, setCounterDisplay] = useState(
    localStorage.getItem("counterDisplay")
      ? localStorage.getItem("counterDisplay")
      : "0,000.000"
  );

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("counterDisplay", counterDisplay);
  }, [counterDisplay]);

  useEffect(() => {
    let counterString = counter.toFixed(3).replace(".", ",");
    counterString = counterString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setCounterDisplay(counterString);
  }, [counter]);

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

  useEffect(() => {
    // Получаем значение startTime из localStorage
    const storedStartTime = localStorage.getItem("startTime");
    if (storedStartTime) {
      setStartTime(storedStartTime);
    }
  }, []);

  useEffect(() => {
    // Если startTime установлен, то запускаем интервал для обновления счетчика
    if (startTime) {
      const counterInterval = setInterval(() => {
        setCounter((counter) => counter + 0.002);
      }, 1000);
      return () => clearInterval(counterInterval); // Очищаем интервал при размонтировании компонента
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
          <span className="icon-text">@Promo</span>
        </div>
        <span className="counter">{counterDisplay}</span>
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
