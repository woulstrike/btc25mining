import { useState } from 'react';
import { HomeButton } from './homeSection';
import { TasksButton } from './tasksSection';
import { InviteButton } from './inviteSection';
import './../css/headersBtn.css';
import {Home} from '../../switch/Home.jsx'
import {Invite} from '../../switch/Invite.jsx'
import {Tasks} from '../../switch/Tasks.jsx'



export function HeaderButtons() {
  const [activeWindow, setActiveWindow] = useState('home')
  
  const renderWindow = () =>{
    switch(activeWindow){
      case'home':
      return <Home />
      case 'tasks':
        return <Tasks />
      case 'invite':
        return <Invite />
      default:
        return <Home />
    }
  }

  return (
    <div className="app-container">
      <div className="content">
        {renderWindow()}
      </div>
      <div className="button-container">
        <HomeButton onClick={() => setActiveWindow('home')} />
        <TasksButton onClick={() => setActiveWindow('tasks')} />
        <InviteButton onClick={() => setActiveWindow('invite')} />
      </div>
    </div>
  );
}