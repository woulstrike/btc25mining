import { StartFarmingSection } from '../../components/button/startFarmingSection.jsx'
import { ClickableIcon } from '../../components/button/withdrawnSection.jsx'
import btcImg from '../../components/assets/btc25.png'



export function Home() {
    return (
      <>
      
      
      <ClickableIcon />
      <img src={btcImg} alt="Btc25" className='btc-img'/>
      <StartFarmingSection />
      </>
    );
  }