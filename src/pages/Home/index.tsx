import { Header } from "../../components/Header";
import Banner from '../../assets/banner-black.png';
import { IoIosCar } from 'react-icons/io';
import { RiInformationLine } from 'react-icons/ri';
import { Img, HighlightedVehicles, CarList } from './styles'
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

        <CarList>
          {!loading && (
            <ul> {
              vehicles.map(vehicle => {
                return (
                  <li key={vehicle.id}>
                      <img src={vehicle.img} alt={vehicle.title} />
                    <div>
                      <span><h4><IoIosCar/>{vehicle.title}</h4></span>
                      <span><p><RiInformationLine/>{vehicle.subtitle}</p></span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </CarList>
      </HighlightedVehicles>
    </>
  )
}