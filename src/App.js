import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './components/pages/Home'
import Neighborhoods from './components/pages/Neighborhoods'
import Livecams from './components/pages/Livecams'
import Credits from './components/pages/Credits'

import './css/main.min.css'

const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='neighborhoods' element={<Neighborhoods />} />
        <Route path='livecams' element={<Livecams />} />
        <Route path='credits' element={<Credits />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
