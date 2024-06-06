import { useState } from 'react';
import { HomeButton } from './components/header/jsx/homeSection';
import { TasksButton } from './components/header/jsx/tasksSection';
import { InviteButton } from './components/header/jsx/inviteSection';
import { Home } from './components/switch/Home';
import { Invite } from './components/switch/Invite';
import  Tasks  from './components/switch/Tasks';
import './App.css';
import './components/header/css/headersBtn.css';
// import { EmailAccess } from './components/switch/confirm'
// import { LoadingPage } from './components/switch/loading'
import { useEffect } from "react";
import axios from "axios";
window.Telegram.WebApp;



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

  useEffect(() => {
    if (window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
      axios.get("http://localhost:3000/users", { userId }).then((response) => {
        const userDataJson = JSON.stringify(response.data);
        localStorage.setItem("userData", userDataJson);
      });
    }
  }, []);

  return (
    <>
    {/* <LoadingPage /> */}
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