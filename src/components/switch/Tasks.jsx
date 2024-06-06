import "./css/Task.css";
import galxeImg from "../assets/galxe.png";
import telegramImg from "../assets/telegram-icon.png";
import twitterImg from "../assets/twitter.png";
import tonkeeperImg from "../assets/tonkeeper.png";
import stonfiImg from "../assets/stonfi.png";
import checkedImg from "../assets/success-task.png";
import {
  MainSrcButton,
  ChannelSrcButton,
  GalxeSrcButton,
  TwitterSrcButton,
  TonkeeperSrcButton,
  StonFiSrcButton,
} from "../button/tasksButtonSection";

import { useState } from "react";

export function Tasks() {
  const [telegramReward, setTelegramReward] = useState(false);
  const [mainReward, setMainReward] = useState(false);
  const [twitterReward, setTwitterReward] = useState(false);
  const [galxeReward, setGalxeReward] = useState(false);
  const [tonkeeperReward, setTonkeeperReward] = useState(false);
  const [stonfiReward, setStonfiReward] = useState(false);

  const handleTelegramClick = () => {
    if (!telegramReward) {
      setTelegramReward(true);
    }
  };

  const handleMainClick = () => {
    if (!mainReward) {
      setMainReward(true);
    }
  };

  const handleTwitterClick = () => {
    if (!twitterReward) {
      setTwitterReward(true);
    }
  };

  const handleGalxeClick = () => {
    if (!galxeReward) {
      setGalxeReward(true);
    }
  };

  const handleTonkeeperClick = () => {
    if (!tonkeeperReward) {
      setTonkeeperReward(true);
    }
  };

  const handleStonfiClick = () => {
    if (!stonfiReward) {
      setStonfiReward(true);
    }
  };

  return (
    <>
      <div className="page">
        <span className="inscription">
          <h1 style={{ color: "white" }}>TASKS</h1>
          <p style={{ color: "#00FFE0" }}>
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
              <span className="quantity" style={{ color: "#00FFE0" }}>
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
              <span className="quantity" style={{ color: "#00FFE0" }}>
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
              <span className="quantity" style={{ color: "#00FFE0" }}>
                +1.000
              </span>
            </span>
            <div className="reward-button-container">
              {twitterReward ? (
                
                <img src={checkedImg} alt="checked" className="checked" />
              ) : (
                <a
                  href="https://x.com/daoproxima"
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
            <img src={galxeImg} alt="galxe" className="galxeimg" />
            <span className="text">
              Join our Galxe and get coins
              <br />
              <span className="quantity" style={{ color: "#00FFE0" }}>
                +1.000
              </span>
            </span>
            <div className="reward-button-container">
              {galxeReward ? (
                <img src={checkedImg} alt="checked" className="checked" />
              ) : (
                <a
                  href="https://app.galxe.com/quest/TonMiner"
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
            <img src={tonkeeperImg} alt="tonkeeper" className="imgtonkep" />
            <span className="text">
              Download Tonkeeper and get coins
              <br />
              <span className="quantity" style={{ color: "#00FFE0" }}>
                +1.000
              </span>
            </span>
            <div className="reward-button-container">
              {tonkeeperReward ? (
                <img src={checkedImg} alt="checked" className="checked" />
              ) : (
                <a
                  href="https://tonkeeper.com/"
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
            <img src={stonfiImg} alt="tonkeeper" className="imgtonkep" />
            <span className="text">
              Visit STON.fi and get coins
              <br />
              <span className="quantity" style={{ color: "#00FFE0" }}>
                +1.000
              </span>
            </span>
            <div className="reward-button-container">
              {stonfiReward ? (
                <img src={checkedImg} alt="checked" className="checked" />
              ) : (
                <a
                  href="https://app.ston.fi/swap?chartVisible=true&ft=TON&tt=EQC7rnHHtMVBKyhiGnAbtYIlzGxS0dfi3ZbHExFX0LYi9cAH&chartInterval=1w"
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
    </>
  );
}
