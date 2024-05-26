import { useState, useEffect } from 'react';
import './css/startFarmingSection.css';
import coinImg from '../assets/coin.png';

export function StartFarmingSection() {
  const initialCounter = parseFloat(localStorage.getItem('counter')) || 0;
  const [counter, setCounter] = useState(initialCounter);
  const [isCounting, setIsCounting] = useState(false);
  const duration = 8 * 60 * 60 * 1000; // 8 часов в миллисекундах
  const totalIncrement = 57;
  const incrementPerSecond = totalIncrement / (8 * 60 * 60); // Увеличение на каждую секунду

  useEffect(() => {
    if (isCounting) {
      const startTime = parseInt(localStorage.getItem('startTime')) || Date.now();
      localStorage.setItem('startTime', startTime);

      const timer = setInterval(() => {
        const elapsedTime = (Date.now() - startTime) / 1000; // прошедшее время в секундах
        const newCounter = initialCounter + elapsedTime * incrementPerSecond;
        setCounter(newCounter);
        localStorage.setItem('counter', newCounter);
      }, 1000); // Обновление каждую секунду

      return () => clearInterval(timer);
    }
  }, [isCounting, initialCounter]);

  useEffect(() => {
    const savedStartTime = parseInt(localStorage.getItem('startTime'));
    if (savedStartTime && Date.now() - savedStartTime < duration) {
      setIsCounting(true);
    }
  }, []);

  const handleClick = () => {
    const startTime = Date.now();
    localStorage.setItem('startTime', startTime);
    setCounter(initialCounter);
    setIsCounting(true);
  };

  const formatCounter = (count) => {
    const paddedCount = count.toFixed(9).replace('.', '');
    const formattedCount = `${paddedCount.slice(0, 3)}.${paddedCount.slice(3, 6)}.${paddedCount.slice(6, 9)}`;
    return formattedCount;
  };

  return (
    <div className="container" style={{ paddingBottom: '0' }}>
      <div className="content-wrapper">
        <div className="icon-container">
          <img src={coinImg} alt="Icon" className="icon" />
          <span className="icon-text">@BTC25</span>
        </div>
        <span className="counter">
          {formatCounter(counter)}
        </span>
      </div>
      <button className={`centered-button ${isCounting ? 'farming' : ''}`} onClick={handleClick} disabled={isCounting}>
        {isCounting ? 'Farming...' : 'Start Farm'}
      </button>
    </div>
  );
}