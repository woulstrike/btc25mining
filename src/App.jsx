import './App.css'
import { HeaderButtons } from "./components/header/jsx/headersBtn"
// const tg = window.Telegram.WebApp
import './components/button/startFarmingSection'
import { StartFaming } from './components/button/startFarmingSection'

export default function App() {
  return (
    <>
      <StartFaming />
      <div className="background">
        <HeaderButtons />
      </div>
      
    </>
  )
}


