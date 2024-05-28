import { useState, useEffect } from 'react';
import locked from '../assets/success-task.png';
import unlock from '../assets/arrow-tasks.png';
import './css/IncrementButtonSection.css';
import PropTypes from 'prop-types';

export function ChannelSrcButton({ onReward }) {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem('isChannelBtnClicked') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isChannelBtnClicked', isClicked);
  }, [isClicked]);

  const handleClick = () => {
    const rewardAmount = 1000;
    const currentCounter = parseFloat(localStorage.getItem('counter')) || 0;
    const newCounter = currentCounter + rewardAmount;
    localStorage.setItem('counter', newCounter);

    onReward();
    setIsClicked(true);
  };

  return (
    <button
      className="reward-button"
      onClick={handleClick}
      disabled={isClicked}
    >
      <img
        src={isClicked ? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}


export function MainSrcButton({ onReward }) {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem('isMainChatBtnClicked') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isMainChatBtnClicked', isClicked);
  }, [isClicked]);

  const handleClick = () => {
    const rewardAmount = 1000;
    const currentCounter = parseFloat(localStorage.getItem('counter')) || 0;
    const newCounter = currentCounter + rewardAmount;
    localStorage.setItem('counter', newCounter);

    onReward();
    setIsClicked(true);
  };

  return (
    <button
      className="reward-button"
      onClick={handleClick}
      disabled={isClicked}
    >
      <img
        src={isClicked ? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function TwitterSrcButton({ onReward }) {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem('isTwitterBtnClicked') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isTwitterBtnClicked', isClicked);
  }, [isClicked]);

  const handleClick = () => {
    const rewardAmount = 1000;
    const currentCounter = parseFloat(localStorage.getItem('counter')) || 0;
    const newCounter = currentCounter + rewardAmount;
    localStorage.setItem('counter', newCounter);

    onReward();
    setIsClicked(true);
  };

  return (
    <button
      className="reward-button"
      onClick={handleClick}
      disabled={isClicked}
    >
      <img
        src={isClicked ? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function GalxeSrcButton({ onReward }) {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem('isGalxeBtnClicked') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isGalxeBtnClicked', isClicked);
  }, [isClicked]);

  const handleClick = () => {
    const rewardAmount = 1000;
    const currentCounter = parseFloat(localStorage.getItem('counter')) || 0;
    const newCounter = currentCounter + rewardAmount;
    localStorage.setItem('counter', newCounter);

    onReward();
    setIsClicked(true);
  };

  return (
    <button
      className="reward-button"
      onClick={handleClick}
      disabled={isClicked}
    >
      <img
        src={isClicked ? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function TonkeeperSrcButton({ onReward }) {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem('isTonkeeperBtnClicked') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isTonkeeperBtnClicked', isClicked);
  }, [isClicked]);

  const handleClick = () => {
    const rewardAmount = 1000;
    const currentCounter = parseFloat(localStorage.getItem('counter')) || 0;
    const newCounter = currentCounter + rewardAmount;
    localStorage.setItem('counter', newCounter);

    onReward();
    setIsClicked(true);
  };

  return (
    <button
      className="reward-button"
      onClick={handleClick}
      disabled={isClicked}
    >
      <img
        src={isClicked ? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

TonkeeperSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};
GalxeSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};

TwitterSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};


MainSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};

ChannelSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};