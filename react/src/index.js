import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 

import { HashRouter } from 'react-router-dom'; // BrowserRouter: refresh, return 404
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
 
serviceWorker.unregister();