import { Header } from "../../components/Header";
// import Banner from '../../assets/banner-black.png';
import { Footer } from "../../components/Footer";
import { Grid } from '@chakra-ui/react';
import {
  Img,
  CarList,
  Description,
  Local,
  Map
} from './styles';

// import ArrowRight from '../../assets/arrow-right.png';
// import ArrowLeft from '../../assets/arrow-left.png';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { LineTitle } from "../../components/LineTitle";
import { BoxItem } from "../../components/BoxItem";
import { ImSpinner2 } from "react-icons/im";
import { Spinner } from "../Storage/styles";
import firebase from "../../services/firebase";

export interface VehiclesTypes {
  img: string;
  title: string;
  subtitle: string;
  formattedPrice: number;
  id: number;
}

export function Home() {
  const [vehicles, setVehicles] = useState<VehiclesTypes[]>([]);
  const [loading, setLoading] = useState(false);
  console.log(firebase);

  useEffect(() => {
    setLoading(true)
    api.get('/vehicles')
      .then(async response => {
        const data = response.data.vehicles;
        setVehicles(data);
      })
      .catch(() => {
        console.log('erro ao carregamento de dados.');
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);


  return (
    <>
      <Header />
      <div>
        {/* <Img src={Banner} alt="Banner" /> */}
      </div>
      <LineTitle title="Adicionados Recentemente" />

      <CarList>
        {loading && vehicles.length > 0 ? (
          <Spinner>
            <ImSpinner2 className="loader" />
          </Spinner>
        ) : (
          <>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {vehicles.slice(0, 6).map(({ img, title, subtitle, formattedPrice }, index) => (
                <BoxItem
                  img={img}
                  title={title}
                  description={subtitle}
                  formattedPrice={formattedPrice}
                  isNew={true}
                  key={index}
                />
              ))}
            </Grid>
          </>
        )}
      </CarList>

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
              {/* <img src={ArrowLeft} alt="ArrowRight" />
              <img src={ArrowRight} alt="ArrowRight" /> */}
            </span>
            <h3>- João Tavares</h3>
          </div>
        </div>
      </Description>
      <Local>
        <div className="line-title">
          <div></div>
          <h2>Onde Estamos</h2>
        </div>

        <Map>
          <div>
            <iframe src="https://maps.google.com/maps?width=595&height=400&hl=en&q=Avenida%20sertorio,7140%20Porto%20Alegre+(Loja%20-%20Sul%20Ultilit%C3%A1rios)&t=&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>
          </div>
        </Map>
      </Local>
      <Footer marginTop="0" position="static" direction="0" />
    </>
  )
}