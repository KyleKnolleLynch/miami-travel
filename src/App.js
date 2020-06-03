import React, { Fragment } from 'react';
import NeighborhoodContextProvider from './context/NeighborhoodContext';
import Home from './components/pages/Home';

import './css/main.css';

const App = () => {
  return (
    <Fragment>
      <NeighborhoodContextProvider>
        <Home />
      </NeighborhoodContextProvider>
    </Fragment>
  );
};

export default App;
