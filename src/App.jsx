import './App.css'
import { HeaderButtons } from "./components/header/jsx/headersBtn"
import { StartFarmingSection } from './components/button/startFarmingSection.jsx'

export default function App() {
    return (
        <>
            <StartFarmingSection />
            <div>
                <HeaderButtons />
            </div>
        </>
    )
}