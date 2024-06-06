import { useState, useEffect, useCallback } from "react";

export function StartFarmingButton() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [startTime, setStartTime] = useState(() => localStorage.getItem("startTime"));

  const handleButtonClick = useCallback(() => {
    if (!isButtonDisabled) {
      const currentTime = new Date().getTime();
      setStartTime(currentTime.toString());
      localStorage.setItem("startTime", currentTime.toString());
      setIsButtonDisabled(true);
    }
  }, [isButtonDisabled]);

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
          const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
          const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

          const timeLeftString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTimeLeft(timeLeftString);
          if (timeRemaining <= 0) {
            clearInterval(timer);
            setIsButtonDisabled(false);
            localStorage.removeItem("startTime");
          }
        }, 1000);

        return () => {
          clearInterval(timer);
        };
      } else {
        setIsButtonDisabled(false);
        localStorage.removeItem("startTime");
      }
    }
  }, [startTime]);

  return (
    <button
      className={`centered-button ${isButtonDisabled? "disabled" : ""}`}
      onClick={handleButtonClick}
      disabled={isButtonDisabled}
    >
      {isButtonDisabled && timeLeft? `Wait ${timeLeft}` : "Start Farm"}
    </button>
  );
}