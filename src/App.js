import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/pages/Home';
import Neighborhoods from './components/pages/Neighborhoods';

import './css/main.css';

const App = () => {
  const location = useLocation();

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home} />
          <Route exact path='/neighborhoods' component={Neighborhoods} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
