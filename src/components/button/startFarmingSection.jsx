import "./css/startFarmingSection.css";
import coinImg from "../assets/coin.png";
import { useState, useEffect } from "react";

export function StartFarmingSection() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [counter, setCounter] = useState(0);
  const [counterDisplay, setCounterDisplay] = useState("0,000.000");

  useEffect(() => {
    let counterString = counter.toFixed(3).replace(".", ",");
    counterString = counterString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setCounterDisplay(counterString);
  }, [counter]);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      const startTime = new Date().getTime();
      const endTime = startTime + 8 * 60 * 60 * 1000;

      let counterInterval = null;
      let timer = setInterval(() => {
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
          clearInterval(counterInterval);
          setIsButtonDisabled(false);
        }
      }, 1000);

      counterInterval = setInterval(() => {
        setCounter((counter) => counter + 200);
      }, 1000);
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
        <span className="counter">{counterDisplay}</span>
      </div>
      <button
        className={`centered-button ${isButtonDisabled ? "disabled" : ""}`}
        onClick={handleButtonClick}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? `Wait ${timeLeft}` : "Start Farm"}
      </button>
    </div>
  );
}
