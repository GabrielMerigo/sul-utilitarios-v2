import { Header } from "../../components/Header";
import Banner from '../../assets/banner-black.png';
// import Truck from '../../assets/banner-black.png';
import { Img, HighlightedVehicles } from './styles'
import { api } from "../../services/api";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const data = api.get('/vehicles').then(response => {
      console.log(response)
    })
    console.log(data)
  }, [])


  return (
    <>
      <Header />
      <Img src={Banner} alt="Banner" />
      <HighlightedVehicles>
        <div className="line-title">
          <div className="ln1"></div>
          <h2>Veículos a Venda</h2>
        </div>

        <div className="container">
          <div className="vitrine-destaque">
           
          </div>
        </div>

      </HighlightedVehicles>
    </>
  )
}