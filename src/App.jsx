import btcImg from './components/assets/btc25.png'
import './App.css'
import { HeaderButtons } from "./components/header/jsx/headersBtn"
import { StartFarmingSection } from './components/button/startFarmingSection.jsx'
import { ClickableIcon } from './components/button/withdrawnSection.jsx'

export default function App() {
    return (
        <>
            <ClickableIcon />
            <img src={btcImg} alt="Btc25" className='btc-img'/>
            
            <StartFarmingSection />
            <div>
                <HeaderButtons />
            </div>
        </>
    )
}