import homeImg from '../../assets/home.png'
import './../css/homeButton.css'

export function HomeButton() {
  return (
    <button className="btn-image">
      <img src={homeImg} alt="Home" className="btn-image__icon" />
      <span className="btn-image__text">Home</span>
    </button>
  )
}



