import { useState, useEffect } from 'react';
import locked from '../assets/success-task.png';
import unlock from '../assets/arrow-tasks.png';
import './css/IncrementButtonSection.css';
import PropTypes from 'prop-types';

export function RewardButton({ onReward }) {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem('isRewardButtonClicked') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isRewardButtonClicked', isClicked);
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

RewardButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};