import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/services/Services'
import Project from './Components/Project/Project'
import Contacts from "./Components/Contact/Contact"
import { ToastContainer, toast } from "react-toastify";
import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      delay: 100,            
      offset: 100
    });
  }, [])
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Project />
      <Contacts />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />


    </div>
  )
}

export default App