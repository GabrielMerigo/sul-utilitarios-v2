import { Header } from "../../components/Header";
import Banner from '../../assets/banner-black.png';
import { Img, HighlightedVehicles } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Img src={Banner} alt="Banner" />
      <HighlightedVehicles>
        <div className="line-titulo">
          <div className="ln1"></div>
          <h2>Veículos a Venda</h2>
        </div>
        

      </HighlightedVehicles>
    </>
  )
}