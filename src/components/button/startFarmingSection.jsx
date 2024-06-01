import './css/startFarmingSection.css';
import coinImg from '../assets/coin.png';

export function StartFarmingSection() {
  return (
    <div className="container" style={{ paddingBottom: '0' }}>
      <div className="content-wrapper">
        <div className="icon-container">
          <img src={coinImg} alt="Icon" className="icon" style={{ width: '75px', height: '75px' }} />
          <span className="icon-text">@BTC25</span>
        </div>
        <span className="counter">
          0.000.000
        </span>
      </div>
      <button className="centered-button">
        Start Farm
      </button>
    </div>
  );
}
