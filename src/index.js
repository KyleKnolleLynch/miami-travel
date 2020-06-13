import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NeighborhoodContextProvider from './context/NeighborhoodContext';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <NeighborhoodContextProvider>
      <App />
    </NeighborhoodContextProvider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
