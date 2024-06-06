import coinImg from '../assets/coin.png';
import './btc25Img.css'



export default function Btc25Img() {
    return(
        <>
            <div className="icon-container">
            <img
              src={coinImg}
              alt="Icon"
              className="icon"
              style={{ width: "75px", height: "75px" }}
            />
            <span className="icon-text">@BTC25</span>
          </div>
        </>
    )
}
  
