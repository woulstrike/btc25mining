import btcImg from "../../components/assets/btc25.png";
import "./css/Home.css";
import CounterComponent from "../counter/counter.jsx";
// import Btc25Img from "../imgComponents/btcimg.jsx";

export function Home() {
  return (
    <>
      <img src={btcImg} alt="Btc25" className="btc-img" />
      <div className="wrapper-icon">
        {/* <Btc25Img /> */}
        <CounterComponent />
      </div>
    </>
  );
}
