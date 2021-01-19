import React, { Fragment, lazy, Suspense } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/utils/Loader'
import Home from './components/pages/Home'
// import Neighborhoods from './components/pages/Neighborhoods';
// import Livecams from './components/pages/Livecams';
// import Credits from './components/pages/Credits';

import './css/main.css'

const Neighborhoods = lazy(() => import('./components/pages/Neighborhoods'))
const Livecams = lazy(() => import('./components/pages/Livecams'))
const Credits = lazy(() => import('./components/pages/Credits'))

const App = () => {
  const location = useLocation()

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<Loader />}>
          <Switch location={location} key={location.key}>
            <Route exact path='/' component={Home} />
            <Route exact path='/neighborhoods' component={Neighborhoods} />
            <Route exact path='/livecams' component={Livecams} />
            <Route exact path='/credits' component={Credits} />
          </Switch>
        </Suspense>
      </AnimatePresence>
    </Fragment>
  )
}

export default App
