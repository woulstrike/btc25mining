import unlock from '../assets/arrow-tasks.png';
import locked from '../assets/success-task.png';
import './css/IncrementButtonSection.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function ChannelSrcButton({ onReward }) {
  const [isLocked, setIsLocked] = useState(false);

  const handleReward = () => {
    if (!isLocked) {
      onReward();
      setIsLocked(true);
    }
  };

  return (
    <button
      className="reward-button"
      onClick={handleReward}
      disabled={isLocked}
    >
      <img
        src={isLocked? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function MainSrcButton({ onReward }) {
  const [isLocked, setIsLocked] = useState(false);

  const handleReward = () => {
    if (!isLocked) {
      onReward();
      setIsLocked(true);
    }
  };

  return (
    <button
      className="reward-button"
      onClick={handleReward}
      disabled={isLocked}
    >
      <img
        src={isLocked? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function TwitterSrcButton({ onReward }) {
  const [isLocked, setIsLocked] = useState(false);

  const handleReward = () => {
    if (!isLocked) {
      onReward();
      setIsLocked(true);
    }
  };

  return (
    <button
      className="reward-button"
      onClick={handleReward}
      disabled={isLocked}
    >
      <img
        src={isLocked? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function GalxeSrcButton({ onReward }) {
  const [isLocked, setIsLocked] = useState(false);

  const handleReward = () => {
    if (!isLocked) {
      onReward();
      setIsLocked(true);
    }
  };

  return (
    <button
      className="reward-button"
      onClick={handleReward}
      disabled={isLocked}
    >
      <img
        src={isLocked? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function TonkeeperSrcButton({ onReward }) {
  const [isLocked, setIsLocked] = useState(false);

  const handleReward = () => {
    if (!isLocked) {
      onReward();
      setIsLocked(true);
    }
  };

  return (
    <button
      className="reward-button"
      onClick={handleReward}
      disabled={isLocked}
    >
      <img
        src={isLocked? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function StonFiSrcButton({ onReward }) {
  const [isLocked, setIsLocked] = useState(false);

  const handleReward = () => {
    if (!isLocked) {
      onReward();
      setIsLocked(true);
    }
  };

  return (
    <button
      className="reward-button"
      onClick={handleReward}
      disabled={isLocked}
    >
      <img
        src={isLocked? locked : unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

ChannelSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};
MainSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};
TwitterSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};
GalxeSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};
TonkeeperSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};
StonFiSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};