import React, { useEffect } from 'react'
import  Navbar  from './components/utils/Navbar'
import Home from './components/home/Home' 
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/utils/Footer'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
