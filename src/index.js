import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';

document.title = "Столовая";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

