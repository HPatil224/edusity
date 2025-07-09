import React from 'react'
import './Title.css'
const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
      <h1>
        <p>{subTitle}</p>
        <h2>{title}</h2>
      </h1>
    </div>
  )
}

export default Title
