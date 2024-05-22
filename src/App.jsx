import './App.css'
import { HeaderButtons } from "./components/header/jsx/headersBtn"
// const tg = window.Telegram.WebApp
import { StartFarmingSection } from './components/button/startFarmingSection.jsx'

export default function App() {
  
  
  
  return (
    <>
      <StartFarmingSection />
      <div className="background">
        <HeaderButtons />
      </div>
      
    </>
  )
}


