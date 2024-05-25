import { HomeButton } from './homeSection';
import { TasksButton } from './tasksSection';
import { InviteButton } from './inviteSection';
import './../css/headersBtn.css';


export function HeaderButtons() {
  return (
    <>
      <div className="button-container">
        <HomeButton />
        <TasksButton />
        <InviteButton />
      </div>
    </>
  )
}