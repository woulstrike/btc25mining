import { StartFarmingSection } from '../../components/button/startFarmingSection.jsx'
import btcImg from '../../components/assets/btc25.png'
import './css/Home.css'


export function Home() {
    return (
      <>
      
      <img src={btcImg} alt="Btc25" className='btc-img'/>
      <StartFarmingSection />
      </>
    );
}