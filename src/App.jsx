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
    <>
    <header>
      <Navbar />
    </header>
      <main className=''>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bookanappointment' element={<BookAppointment />} />

        </Routes>

      </main>
      <Footer />

    </>
  )
}

export default App
