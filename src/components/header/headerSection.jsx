import homeImg from '../assets/home.png'
import './headerButtons.css'

export function HeaderButtons() {
  return (
    <div className="button-container">
      <button className="btn-image">
        <img src={homeImg} alt="Home" className="btn-image__icon" />
        <span className="btn-image__text">Home</span>
      </button>
    </div>
  )
}