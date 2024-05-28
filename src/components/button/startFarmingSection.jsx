import { useState, useEffect, useRef } from 'react';
import './css/startFarmingSection.css';
import coinImg from '../assets/coin.png';

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
  const [isCounting, setIsCounting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const startTimeRef = useRef(parseInt(localStorage.getItem('startTime')) || null);
  const incrementPerSecond = 57000 / (8 * 60 * 60 * 60 * 60 * 4); 

  useEffect(() => {
    const savedStartTime = parseInt(localStorage.getItem('startTime'));
    if (savedStartTime && Date.now() - savedStartTime < 8 * 60 * 60 * 1000) {
      setIsCounting(true);
      setIsButtonDisabled(true);
      startTimeRef.current = savedStartTime;
    } else if (savedStartTime) {
      localStorage.removeItem('startTime');
      localStorage.removeItem('initialCounter');
    }
  }, []);

  useEffect(() => {
    function handleStorageChange(event) {
      if (event.key === 'counter') {
        setCounter(parseFloat(event.newValue));
      }
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useInterval(() => {
    if (isCounting) {
      const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
      const newCounter = (parseFloat(localStorage.getItem('initialCounter')) || 0) + elapsedTime * incrementPerSecond;
      setCounter(newCounter);
      localStorage.setItem('counter', newCounter);
    }
  }, isCounting ? 1500 : null);

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

  useEffect(() => {
    if (isCounting) {
      const timeout = setTimeout(() => {
        setIsCounting(false);
        setIsButtonDisabled(false);
      }, 8 * 60 * 60 * 1000); 

      return () => clearTimeout(timeout);
    }
  }, [isCounting]);

  const formatCounter = (count) => {
    const paddedCount = count.toFixed(6).replace('.', '').padStart(9, '0');
    const formattedCount = `${paddedCount.slice(0, 1)}.${paddedCount.slice(1, 4)}.${paddedCount.slice(4, 7)}`;
    return formattedCount;
  };

  return (
    <div className="container" style={{ paddingBottom: '0' }}>
      <div className="content-wrapper">
        <div className="icon-container" style={{margin: '0', marginTop: '6.25em'}}>
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
