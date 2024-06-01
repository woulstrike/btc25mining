// import locked from '../assets/success-task.png';
import unlock from '../assets/arrow-tasks.png';
import './css/IncrementButtonSection.css';
import PropTypes from 'prop-types';

export function ChannelSrcButton({ onReward }) {
  return (
    <button
      className="reward-button"
      onClick={onReward}
    >
      <img
        src={unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function MainSrcButton({ onReward }) {
  return (
    <button
      className="reward-button"
      onClick={onReward}
    >
      <img
        src={unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function TwitterSrcButton({ onReward }) {
  return (
    <button
      className="reward-button"
      onClick={onReward}
    >
      <img
        src={unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function GalxeSrcButton({ onReward }) {
  return (
    <button
      className="reward-button"
      onClick={onReward}
    >
      <img
        src={unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

export function TonkeeperSrcButton({ onReward }) {
  return (
    <button
      className="reward-button"
      onClick={onReward}
    >
      <img
        src={unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}
export function StonFiSrcButton({ onReward }) {
  return (
    <button
      className="reward-button"
      onClick={onReward}
    >
      <img
        src={unlock}
        alt="Reward Icon"
        className="reward-icon"
      />
    </button>
  );
}

StonFiSrcButton.propTypes = {
  onReward: PropTypes.func.isRequired,
};
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
