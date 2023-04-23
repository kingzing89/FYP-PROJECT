import React, { useState } from 'react'
import "./Card.css"
import  download from "./download.png"

function Card(props) {
 
  return (
       
    <div className='Card'>
       
      <div className='upper-container'>
        <div className='image-container'>
        <img src={download} />;
        </div>
      </div>
      <div className='lower-container'>
        
      </div>
      <div className='lower-text-container'>
        <h3>{props.name}</h3>
        <h4>{props.Address}</h4>
        <p>{props.about}</p>
        <button>Visit Profile</button>

      </div>
    </div>
  )
}

export default Card;