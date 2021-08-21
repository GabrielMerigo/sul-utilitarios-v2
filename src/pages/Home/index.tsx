import { Header } from "../../components/Header";
import Banner from '../../assets/banner-black.png';
// import Truck from '../../assets/banner-black.png';
import { Img, HighlightedVehicles } from './styles'
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface VehiclesTypes {
  img: string;
  title: string;
  subtitle: string;
  id: number;
}

export function Home() {
  const [vehicles, setVehicles] = useState<VehiclesTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/vehicles')
      .then(async response => {
        const data = response.data.vehicles;
        setVehicles(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
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
            {!loading && (
              <ul> {
                vehicles.map(vehicle => {
                  return (
                    <li key={vehicle.id}>
                      <div className="info-car">
                        <img src={vehicle.img} alt={vehicle.title} />
                        <h2>{vehicle.title}</h2>
                        <p>{vehicle.subtitle}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>

      </HighlightedVehicles>
    </>
  )
}