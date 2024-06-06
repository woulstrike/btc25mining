import { useEffect, useState } from "react";
import "./counter.css";
import coinImg from "../assets/coin.png";

const CounterComponent = () => {
  const [userData, setUserData] = useState({
    balance: 0,
    actualityFarmStat: null,
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const [counter, setCounter] = useState(userData.balance.toFixed(3));
  const [counterWork, setCounterWork] = useState(false);
  let intervalId;

  const turnOnCounter = () => {
    setCounterWork(true);
  };

  useEffect(() => {
    if (counterWork) {
      intervalId = setInterval(() => {
        setCounter((parseFloat(counter) + 0.002).toFixed(3));
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [counterWork, counter]);

  useEffect(() => {
    if (userData.actualityFarmStat) {
      const startTime = new Date(userData.actualityFarmStat.start).getTime();
      const currentTime = new Date().getTime();

      const timeDiff = currentTime - startTime;
      const secondPassed = Math.floor(timeDiff / 1000);

      const addedUnits = secondPassed * 0.002;
      setCounter((userData.balance + addedUnits).toFixed(3));
      setCounterWork(true);
    }
  }, [userData]);

  const formattedCounter = parseFloat(counter)
    .toLocaleString("de-DE", { minimumFractionDigits: 3 })
    .replace(".", "#")
    .replace(",", ".")
    .replace("#", ",");

  return (
    <>
      <div className="wrapper-farm">
        <div className="wrapper-counter">
          <div className="icon-container">
            <img
              src={coinImg}
              alt="Icon"
              className="icon"
              style={{ width: "75px", height: "75px" }}
            />
            <span className="icon-text">PROMO</span>
          </div>
          <div className="counterHome" style={{ color: "white" }}>
            {formattedCounter}
          </div>
        </div>
        <button className="btnfarm" onClick={turnOnCounter}>
          Start Farm
        </button>
      </div>
    </>
  );
};

export default CounterComponent;
