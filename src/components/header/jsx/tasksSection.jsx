import tasksImg from '../../assets/tasks.png'
import './../css/tasksButton.css'

export function TasksButton() {
    return (
      <button className="btn-image">
        <img src={tasksImg} alt="Tasks" className="btn-image__icon" />
        <span className="btn-image__text">Tasks</span>
      </button>
    )
  }