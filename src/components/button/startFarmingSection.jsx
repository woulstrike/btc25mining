import { useState, useEffect } from 'react'
import './css/startFarmingSection.css'
import coinImg from '../assets/coin.png'

export function StartFarmingSection() {
  const initialCounter = parseInt(localStorage.getItem('counter')) || 0
  const [counter, setCounter] = useState(initialCounter)
  const [isCounting, setIsCounting] = useState(false)
  const incrementValue = 40000
  const duration = 8 * 60 * 60
  const incrementPerSecond = incrementValue / duration

  useEffect(() => {
    if (isCounting) {
      const endTime = Date.now() + duration * 1000
      localStorage.setItem('counter', counter)
      localStorage.setItem('endTime', endTime)

      const timer = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter + incrementPerSecond
          localStorage.setItem('counter', newCounter)

          if (newCounter >= initialCounter + incrementValue) {
            clearInterval(timer)
            setIsCounting(false)
            localStorage.removeItem('endTime')
            return initialCounter + incrementValue
          }

          return newCounter
        });
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isCounting])

  useEffect(() => {
    const savedEndTime = parseInt(localStorage.getItem('endTime'))
    if (savedEndTime && Date.now() < savedEndTime) {
      setIsCounting(true)
    }
  }, []);

  const handleClick = () => {
    setCounter(initialCounter)
    setIsCounting(true)
  };

  return (
    <div className="container">
      <div className="counter-display">
        <img src={coinImg} alt="Icon" className="icon" />
        <span>{Math.floor(counter)}</span>
      </div>
      <button className={`centered-button ${isCounting ? 'farming' : ''}`} onClick={handleClick} disabled={isCounting}>
        {isCounting ? 'Farming...' : 'Start Farm'}
      </button>
    </div>
  );
}
