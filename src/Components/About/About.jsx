import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSIY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente magnam exercitationem ad quibusdam assumenda omnis eaque saepe nesciunt ratione cupiditate iure amet, aliquam voluptatem cum qui nostrum asperiores facilis.</p>
        <p>lorem 34 ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente magnam exercitationem ad quibusdam assumenda omnis eaque saepe nesciunt ratione cupiditate iure amet, aliquam voluptatem cum qui nostrum asperiores facilis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente magnam exercitationem ad quibusdam assumenda omnis eaque saepe nesciunt ratione cupiditate iure amet, aliquam voluptatem cum qui nostrum asperiores facilis.);
        </p>
      </div>
    </div>
  )
}

export default About
