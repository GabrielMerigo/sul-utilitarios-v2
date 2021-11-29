import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

const vehicles = 'vehicles';
const url = '/vehicles';

createServer({
  models: {
    vehicles: Model
  },

  seeds(server){
    server.db.loadData({
      vehicles: [
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
          title: 'FORD ECOSPORT 2005 XLS',
          subtitle: '1.6 Ano 2004/2005 com gnv completa, financia, recebemos troca.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/4.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Completo 0KM. Perfeita condições. Vale a pena comprar.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'Audi 8000 - 1.6',
          subtitle: 'Financiado único dono. Sem gravame.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
          title: 'FORD ECOSPORT 2005 XLS',
          subtitle: '1.6 Ano 2004/2005 com gnv completa, financia, recebemos troca.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/4.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Unico dono e Novas rodas. 0KM rodado. Esse tá bom hein!'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Porshe KN a diesel e 100 mil KM rodado. Bem baratinho.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Porshe KN a diesel e 100 mil KM rodado. Bem baratinho.'
        },
        {
          img: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'Porshe KN a diesel e 100 mil KM rodado. Bem baratinho.'
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/vehicles', () => {
      return this.schema.all(vehicles);
    })

    this.post(url, (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create(vehicles, data)
    })
  }
})

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);