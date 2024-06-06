import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Task.css';
import galxeImg from '../assets/galxe.png';
import telegramImg from '../assets/telegram-icon.png';
import twitterImg from '../assets/twitter.png';
import tonkeeperImg from '../assets/tonkeeper.png';
import stonfiImg from '../assets/stonfi.png';
import checkedImg from '../assets/success-task.png';
import {
  MainSrcButton,
  ChannelSrcButton,
  GalxeSrcButton,
  TwitterSrcButton,
  TonkeeperSrcButton,
  StonFiSrcButton,
} from '../button/tasksButtonSection';

const Tasks = () => {
  const [telegramReward, setTelegramReward] = useState(false);
  const [mainReward, setMainReward] = useState(false);
  const [twitterReward, setTwitterReward] = useState(false);
  const [galxeReward, setGalxeReward] = useState(false);
  const [tonkeeperReward, setTonkeeperReward] = useState(false);
  const [stonfiReward, setStonfiReward] = useState(false);

  const userId = windows.Telegram.WebApp.initDataUnsafe.user.id;
  const [userTasksData, setUserTasksData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/tasks", { userId })
    .then((res) => { setUserTasksData(res.data); });
  }, [userId])

  const handleTelegramClick = () => {
    if (!telegramReward) {
      setTelegramReward(true);
      axios.post('http://localhost:3000/tasks', { id: 1, userId });
    }
  };

  const handleMainClick = () => {
    if (!mainReward) {
      setMainReward(true);
      axios.post('http://localhost:3000/tasks', { id: 2, userId });
    }
  };

  const handleTwitterClick = () => {
    if (!twitterReward) {
      setTwitterReward(true);
      axios.post('http://localhost:3000/tasks', { id: 3, userId });
    }
  };

  const handleGalxeClick = () => {
    if (!galxeReward) {
      setGalxeReward(true);
      axios.post('http://localhost:3000/tasks', { id: 4, userId });
    }
  };

  const handleTonkeeperClick = () => {
    if (!tonkeeperReward) {
      setTonkeeperReward(true);
      axios.post('http://localhost:3000/tasks', { id: 5, userId });
    }
  };

  const handleStonfiClick = () => {
    if (!stonfiReward) {
      setStonfiReward(true);
      axios.post('http://localhost:3000/tasks', { id: 6, userId });
    }
  };

  return (
    <div className="page">
      <span className="inscription">
        <h1 style={{ color: 'white' }}>TASKS</h1>
        <p style={{ color: '#00FFE0' }}>
          We’ll reward you immediately <br />
          with points after each task completion
        </p>
      </span>
      <div className="task-container">
        <div className="task-container">
          <img src={telegramImg} alt="telegram" className="imgtg" />
          <span className="text">
            Join our Telegram channel and get coins
            <br />
            <span className="quantity" style={{ color: '#00FFE0' }}>
              +1.000
            </span>
          </span>
          <div className="reward-button-container">
            {telegramReward ? (
              <img src={checkedImg} alt="checked" className="checked" />
            ) : (
              <a
                href="https://t.me/btc25"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTelegramClick}
              >
                <ChannelSrcButton />
              </a>
            )}
          </div>
        </div>
        <div className="task-container">
          <img src={telegramImg} alt="telegram" className="imgtg" />
          <span className="text">
            Join our Telegram chat and get coins
            <br />
            <span className="quantity" style={{ color: '#00FFE0' }}>
              +1.000
            </span>
          </span>
          <div className="reward-button-container">
            {mainReward ? (
              <img src={checkedImg} alt="checked" className="checked" />
            ) : (
              <a
                href="https://t.me/TONBTC25"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMainClick}
              >
                <MainSrcButton />
              </a>
            )}
          </div>
        </div>
        <div className="task-container">
          <img src={twitterImg} alt="twitter" className="imgtw" />
          <span className="text">
            Join our X and get coins
            <br />
            <span className="quantity" style={{ color:'#00FFE0' }}>
              +1.000
            </span>
          </span>
          <div className="reward-button-container">
            {twitterReward? (
              <img src={checkedImg} alt="checked" className="checked" />
            ) : (
              <a
                href="https://twitter.com/btc25"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTwitterClick}
              >
                <TwitterSrcButton />
              </a>
            )}
          </div>
        </div>
        <div className="task-container">
          <img src={galxeImg} alt="galxe" className="imggalxe" />
          <span className="text">
            Join our Galxe and get coins
            <br />
            <span className="quantity" style={{ color: '#00FFE0' }}>
              +1.000
            </span>
          </span>
          <div className="reward-button-container">
            {galxeReward? (
              <img src={checkedImg} alt="checked" className="checked" />
            ) : (
              <a
                href="https://galxe.com/btc25"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGalxeClick}
              >
                <GalxeSrcButton />
              </a>
            )}
          </div>
        </div>
        <div className="task-container">
          <img src={tonkeeperImg} alt="tonkeeper" className="imgtonkeeper" />
          <span className="text">
            Join our Tonkeeper and get coins
            <br />
            <span className="quantity" style={{ color: '#00FFE0' }}>
              +1.000
            </span>
          </span>
          <div className="reward-button-container">
            {tonkeeperReward? (
              <img src={checkedImg} alt="checked" className="checked" />
            ) : (
              <a
                href="https://tonkeeper.com/btc25"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTonkeeperClick}
              >
                <TonkeeperSrcButton />
              </a>
            )}
          </div>
        </div>
        <div className="task-container">
          <img src={stonfiImg} alt="stonfi" className="imgstonfi" />
          <span className="text">
            Join our StonFi and get coins
            <br />
            <span className="quantity" style={{ color: '#00FFE0' }}>
              +1.000
            </span>
          </span>
          <div className="reward-button-container">
            {stonfiReward? (
              <img src={checkedImg} alt="checked" className="checked" />
            ) : (
              <a
                href="https://stonfi.com/btc25"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStonfiClick}
              >
                <StonFiSrcButton />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;