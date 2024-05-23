
import PropTypes from 'prop-types'
import homeImg from '../../assets/home.png'
import './../css/homeButton.css'

export function HomeButton({ onClick }) {
  return (
    <button className="btn-image" onClick={onClick}>
      <img src={homeImg} alt="Home" className="btn-image__icon" />
      <span className="btn-image__text">Home</span>
    </button>
  )
}


HomeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}
