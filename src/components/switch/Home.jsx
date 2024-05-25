import { HeaderButtons } from "../../components/header/jsx/headersBtn"
import btcImg from '../../components/assets/btc25.png'
import { ClickableIcon } from '../../components/button/withdrawnSection.jsx'
import { StartFarmingSection } from '../../components/button/startFarmingSection.jsx'


export function Home() {
    return (
      <>

        <ClickableIcon />
        <img src={btcImg} alt="Btc25" className='btc-img'/>
        <StartFarmingSection />

        <HeaderButtons />      
      </>
    );
  }