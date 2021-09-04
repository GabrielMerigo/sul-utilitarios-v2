import { useEffect, useState } from 'react';
import { CarList, Spinner } from './styles';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LineHeaderRed } from "../../components/LineHeaderRed";
import { VehiclesTypes } from "../Home";
import { api } from "../../services/api";
import { RiInformationLine } from "react-icons/ri";
import { IoIosCar } from "react-icons/io";
import { ImSpinner2 } from "react-icons/im";
import { LineTitle } from '../../components/LineTitle';

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

      {loading ? (
        <Spinner>
          <ImSpinner2 className="loader" />
        </Spinner>
      ) : (
        <>
          <LineTitle title="Carros" />
          <CarList>
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
          </CarList>

          <LineTitle title="Caminhões" />
          <CarList>
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
          </CarList>
        </>
      )}

      <Footer marginTop="2" position="static" direction="0" />
    </>
  )
}