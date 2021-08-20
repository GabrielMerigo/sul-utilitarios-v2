import React from 'react';
import ReactDOM from 'react-dom';
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
          img: './assets/carro-do-pai.png',
          title: 'FORD ECOSPORT 2005 XLS',
          subtitle: '1.6 Ano 2004/2005 com gnv completa, financia, recebemos troca.'
        }, 
        {
          img: './assets/carro-do-pai.png',
          title: 'VW GOLF 1.6 GNV',
          subtitle: 'VW GOLF 1.6 GNV Completo.'
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);