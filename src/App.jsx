import React, { useEffect } from 'react'
import  Navbar  from './components/utils/Navbar'
import Home from './components/home/Home' 
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/utils/Footer'
import Service from './components/service/service'

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
