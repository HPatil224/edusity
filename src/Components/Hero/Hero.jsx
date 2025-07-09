import React from 'react'
import './Hero.css'
import heroImage from '../../assets/hero.png'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
            We ensure better education for a better world
        </h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ut eaque eius, soluta a distinctio assumenda reiciendis, rem iure recusandae neque voluptates, temporibus quasi sit dolor velit perspiciatis quibusdam cumque.
        </p>
        <button className='btn'>Explore more <img src= {dark_arrow} alt= "" /></button>
      </div>
    </div>
  )
}

export default Hero
