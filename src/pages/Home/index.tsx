import { Header } from "../../components/Header";
import Banner from '../../assets/banner-black.png';
import { IoIosCar } from 'react-icons/io';
import { RiInformationLine } from 'react-icons/ri';
import {
  Img,
  HighlightedVehicles,
  CarList,
  Description,
  Local,
  Map,
  Footer
} from './styles';

import ArrowRight from '../../assets/arrow-right.png';
import ArrowLeft from '../../assets/arrow-left.png';
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
                      <span><h4><IoIosCar />{vehicle.title}</h4></span>
                      <span><p><RiInformationLine />{vehicle.subtitle}</p></span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </CarList>
      </HighlightedVehicles>
      <Description>
        <div>
          <div>
            <h2>Serviços</h2>
            <ul>
              <li>Compra</li>
              <li>Venda</li>
              <li>Financia</li>
              <li>Consultoria</li>
              <li>Indicação de Mecanicos e Peças</li>
            </ul>
          </div>
          <button>Saiba Mais</button>
        </div>

        <div>
          <h2>Depoimentos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates necessitatibus culpa, ratione deleniti magnam ullam vero consectetur voluptatibus incidunt est quos quidem, aperiam officiis repellendus, labore veniam possimus dolor!</p>
          <div>
            <span>
              <img src={ArrowLeft} alt="ArrowRight" />
              <img src={ArrowRight} alt="ArrowRight" />
            </span>
            <h3>- João Tavares</h3>
          </div>
        </div>
      </Description>
      <Local>
        <div className="line-title">
          <div></div>
          <h2>Onde Estamos?</h2>
        </div>

        <Map>
          <div>
            <iframe src="https://maps.google.com/maps?width=595&height=400&hl=en&q=Avenida%20sertorio,7140%20Porto%20Alegre+(Loja%20-%20Sul%20Ultilit%C3%A1rios)&t=&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>
          </div>
        </Map>
      </Local>
      <Footer>
        <p>Todos os direitos reservados, Sul Utilitários - Porto Alegre (RS)</p>
        <p>Desenvolvido por <span>Gabriel Merigo</span></p>
      </Footer>
    </>
  )
}