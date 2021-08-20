import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

const transaction = 'transaction';
const url = '/transactions';

createServer({
  models: {
    transactions: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          img: './assets/carro-do-pai.png',
          title: 'FORD ECOSPORT 2005 XLS',
          subtitle: '1.6 Ano 2004/2005 com gnv completa, financia, recebemos troca.'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);