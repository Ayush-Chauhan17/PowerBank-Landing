import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import ThreeDSection from './Components/3DSection' 
import Testimonial from './Components/Testimonial'
import FAQ from './Components/faq'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () =>{
  return(
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <ThreeDSection/>
        <Testimonial/>
        <FAQ/>
        <Contact/>
        <Footer/>
    </div>
  )
}
export default App