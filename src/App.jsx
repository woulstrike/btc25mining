import { useState } from 'react'
import { HomeButton } from './components/header/jsx/homeSection'
import { TasksButton } from './components/header/jsx/tasksSection'
import { InviteButton } from './components/header/jsx/inviteSection'
import { Home } from './components/switch/Home'
import { Invite } from './components/switch/Invite'
import { Tasks } from './components/switch/Tasks'
import './App.css';
import './components/header/css/headersBtn.css'
// import { EmailAccess } from './components/switch/confirm'







export default function App() {
  
  const [activeWindow, setActiveWindow] = useState('home');

  const renderWindow = () => {
    switch (activeWindow) {
      case 'home':
        return <Home />;
      case 'tasks':
        return <Tasks />;
      case 'invite':
        return <Invite />;
      default:
        return <Home />;
    }
  };

  return (
    <>
    {/* <EmailAccess /> */}
      <div className="app-container">
       <div className="button-container">
         <HomeButton onClick={() => setActiveWindow('home')} />
         <TasksButton onClick={() => setActiveWindow('tasks')} />
         <InviteButton onClick={() => setActiveWindow('invite')} />
       </div>
       <div className="content">
         {renderWindow()}
       </div>
     </div>
     </>
  );
}