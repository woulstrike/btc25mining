
import PropTypes from 'prop-types'
import tasksImg from '../../assets/tasks.png'
import './../css/tasksButton.css'

export function TasksButton({ onClick }) {
    return (
      <button className="btn-image" onClick={onClick}>
        <img src={tasksImg} alt="Tasks" className="btn-image__icon" />
        <span className="btn-image__text">Tasks</span>
      </button>
    )
}


TasksButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}