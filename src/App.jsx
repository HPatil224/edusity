import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle= 'OUR PROGRAM' title = 'What we offer'/>
      <Programs />
      <About />
      <Title subTitle= 'Gallery' title = 'Campus Photos'/>
      <Campus />
      <Title subTitle = "TESTIMONIALS" title = "What Students Say"/>
      <Testimonials /> 
      <Title subTitle = "CONTACT US" title = "Get in Touch"/>
      <Contact />
      <Footer />
      </div>

    </div>
  )
}

export default App

