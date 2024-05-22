import { useState, useEffect } from 'react'
import './css/startFarmingSection.css'
import coinImg from '../assets/coin.png'

export function StartFarmingSection() {
  const initialCounter = parseInt(localStorage.getItem('counter')) || 0
  const [counter, setCounter] = useState(initialCounter)
  const [isCounting, setIsCounting] = useState(false)
  const duration = 8 * 60 * 60 * 1000
  const incrementPerSecond = 1

  useEffect(() => {
    if (isCounting) {
      const startTime = Date.now()
      localStorage.setItem('counter', counter)
      localStorage.setItem('startTime', startTime)

      const timer = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter + incrementPerSecond
          localStorage.setItem('counter', newCounter)
          return newCounter;
        })
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [isCounting])

  useEffect(() => {
    const savedStartTime = parseInt(localStorage.getItem('startTime'))
    if (savedStartTime && Date.now() - savedStartTime < duration) {
      setIsCounting(true)
    }
  }, [])

  const handleClick = () => {
    setCounter(initialCounter)
    setIsCounting(true)
  };

  return (
    <div className="container">
      <div className="counter-display">
        <div className="icon-container">
          <img src={coinImg} alt="Icon" className="icon" />
          <span className="icon-text">BTC25</span>
        </div>
        <span className="counter" style={{ color: isCounting ? 'white' : 'black', fontSize: '40px', paddingBottom: '50px', paddingLeft: '60px'}}>
          {counter.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: true })}
        </span>
      </div>
      <button className={`centered-button ${isCounting ? 'farming' : ''}`} onClick={handleClick} disabled={isCounting}>
        {isCounting ? 'Farming...' : 'Start Farm'}
      </button>
    </div>
  );
}
