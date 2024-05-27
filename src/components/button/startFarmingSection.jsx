import { useState, useEffect, useRef } from 'react';
import './css/startFarmingSection.css';
import coinImg from '../assets/coin.png';

// Custom hook for setInterval
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function StartFarmingSection() {
  const [counter, setCounter] = useState(() => {
    const savedCounter = parseFloat(localStorage.getItem('counter')) || 0;
    return savedCounter;
  });
  const [isCounting, setIsCounting] = useState(() => {
    const savedStartTime = parseInt(localStorage.getItem('startTime'));
    return savedStartTime && (Date.now() - savedStartTime < 8 * 60 * 60 * 1000);
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(() => {
    const savedStartTime = parseInt(localStorage.getItem('startTime'));
    return savedStartTime && (Date.now() - savedStartTime < 8 * 60 * 60 * 1000);
  });

  const startTimeRef = useRef(parseInt(localStorage.getItem('startTime')) || null);
  const incrementPerSecond = 57 / (8 * 60 * 60 * 60); 

  useEffect(() => {
    const savedStartTime = parseInt(localStorage.getItem('startTime'));
    if (savedStartTime) {
      setIsCounting(true);
      setIsButtonDisabled(true);
      startTimeRef.current = savedStartTime;
    }
  }, []);

  useInterval(() => {
    if (isCounting) {
      const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
      const newCounter = (parseFloat(localStorage.getItem('initialCounter')) || 0) + elapsedTime * incrementPerSecond;
      setCounter(newCounter);
      localStorage.setItem('counter', newCounter);
    }
  }, isCounting ? 1000 : null);

  const handleClick = () => {
    if (!isCounting) {
      setIsCounting(true);
      setIsButtonDisabled(true);
      const startTime = Date.now();
      startTimeRef.current = startTime;
      localStorage.setItem('startTime', startTime);
      localStorage.setItem('initialCounter', counter);
    }
  };

  const formatCounter = (count) => {
    const paddedCount = count.toFixed(6).replace('.', '').padStart(9, '0');
    const formattedCount = `${paddedCount.slice(0, 1)}.${paddedCount.slice(1, 4)}.${paddedCount.slice(4, 7)}`;
    return formattedCount;
  };

  return (
    <div className="container" style={{ paddingBottom: '0' }}>
      <div className="content-wrapper">
        <div className="icon-container">
          <img src={coinImg} alt="Icon" className="icon" style={{ width: '75px', height: '75px' }} />
          <span className="icon-text">@BTC25</span>
        </div>
        <span className="counter">
          {formatCounter(counter)}
        </span>
      </div>
      <button className={`centered-button ${isCounting ? 'farming' : ''}`} onClick={handleClick} disabled={isButtonDisabled}>
        {isCounting ? 'Farming...' : 'Start Farm'}
      </button>
    </div>
  );
}
