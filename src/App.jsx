import './App.css'
import { HeaderButtons } from "./components/header/jsx/headersBtn"
import { StartFarmingSection } from './components/button/startFarmingSection.jsx'
import { ClickableIcon } from './components/button/withdrawnSection.jsx'

export default function App() {
    return (
        <>
            <ClickableIcon />
            <StartFarmingSection />
            <div>
                <HeaderButtons />
            </div>
        </>
    )
}