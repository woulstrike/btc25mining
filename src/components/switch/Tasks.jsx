import { useState, useEffect } from 'react';
import './css/Task.css';
import telegramImg from '../assets/telegram-icon.png';
import { MainSrcButton, ChannelSrcButton, GalxeSrcButton, TwitterSrcButton, TonkeeperSrcButton } from '../button/tasksButtonSection';

export function Tasks() {
  const initialCounter = parseFloat(localStorage.getItem('counter')) || 0;
  // eslint-disable-next-line no-unused-vars
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'counter') {
        setCounter(parseFloat(event.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleReward = () => {
    const newCounter = parseFloat(localStorage.getItem('counter'));
    setCounter(newCounter);
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
      <div className="task-container">
        <img src={telegramImg} alt="telegram" className="imgtg" />
        <span className="text">
          Join our Telegram channel and get coins<br />
          <span className='quantity' style={{color: '#00FFE0'}}>+0.001</span>
        </span>
        <div className="reward-button-container">
          <a href="https://t.me/btc25" target="_blank" rel="noopener noreferrer">
            <ChannelSrcButton onReward={handleReward} />
          </a>
          <span className="reward-button-text"></span>
        </div>
      </div>
      <div className="task-container">
        <img src={telegramImg} alt="telegram" className="imgtg" />
        <span className="text">
          Join our Telegram  chat and get coins<br />
          <span className='quantity' style={{color: '#00FFE0'}}>+0.001</span>
        </span>
        <div className="reward-button-container">
          <a href="https://t.me/TONBTC25" target="_blank" rel="noopener noreferrer">
            <MainSrcButton onReward={handleReward} />
          </a>
          <span className="reward-button-text"></span>
        </div>
      </div>
      <div className="task-container">
        <img src={telegramImg} alt="telegram" className="imgtg" />
        <span className="text">
          Join our X and get coins<br />
          <span className='quantity' style={{color: '#00FFE0'}}>+0.001</span>
        </span>
        <div className="reward-button-container">
          <a href="https://x.com/daoproxima" target="_blank" rel="noopener noreferrer">
            <TwitterSrcButton onReward={handleReward} />
          </a>
          <span className="reward-button-text"></span>
        </div>
      </div>
      <div className="task-container">
        <img src={telegramImg} alt="telegram" className="imgtg" />
        <span className="text">
          Join our Galxe and get coins<br />
          <span className='quantity' style={{color: '#00FFE0'}}>+0.001</span>
        </span>
        <div className="reward-button-container">
          <a href="https://app.galxe.com/quest/TonMiner" target="_blank" rel="noopener noreferrer">
            <GalxeSrcButton onReward={handleReward} />
          </a>
          <span className="reward-button-text"></span>
        </div>
      </div>
      <div className="task-container">
        <img src={telegramImg} alt="telegram" className="imgtg" />
        <span className="text">
          Download Tonkeeper and get coins<br />
          and then send the screenshot to the bot <br />
          <span className='quantity' style={{color: '#00FFE0'}}>+0.001</span>
        </span>
        <div className="reward-button-container">
          <a href="https://tonkeeper.com/" target="_blank" rel="noopener noreferrer">
            <TonkeeperSrcButton onReward={handleReward} />
          </a>
          <span className="reward-button-text"></span>
        </div>
      </div>
    </>
  );
}
