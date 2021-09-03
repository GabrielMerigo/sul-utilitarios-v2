import { useEffect, useState } from 'react';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LineHeaderRed } from "../../components/LineHeaderRed";
import { VehiclesTypes } from "../Home";
import { api } from "../../services/api";
import { RiInformationLine } from "react-icons/ri";
import { IoIosCar } from "react-icons/io";


export function Storage() {
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
      <LineHeaderRed />
      <div>
          {!loading && (
            <ul> {
              vehicles.map(vehicle => {
                return (
                  <li key={vehicle.id}>
                    <img src={vehicle.img} alt={vehicle.title} />
                    <div>
                      <span><h4><IoIosCar />{vehicle.title}</h4></span>
                      <span><p><RiInformationLine />{vehicle.subtitle}</p></span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      <Footer position="static" direction="0"/>
    </>
  )
}