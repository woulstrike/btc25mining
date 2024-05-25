import { useState, useEffect } from 'react';
import './css/Task.css'
import telegramImg from '../assets/telegram-icon.png'
import { RewardButton } from '../button/tasksButtonSection';


export function Tasks() {
  const initialCounter = parseInt(localStorage.getItem('counter')) || 0;
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  const handleReward = () => {
    const newCounter = counter + 10000;
    setCounter(newCounter);
    localStorage.setItem('counter', newCounter);
  };

  return (
    <>
      <span className="inscription">
        <h1 style={{ color: 'white' }}>TASKS</h1>
        <p style={{ color: '#00FFE0' }}>
          We’ll reward you immediately <br />
          with points after each task completion
        </p>
      </span>
      <div className="container" style={{border: 'none'}}>
        <img src={telegramImg} alt="telegram" className="imgtg" />
        <span className="text">Join our Russian community and get coins</span>
      </div>
      <RewardButton onReward={handleReward} />
    </>
  );
}