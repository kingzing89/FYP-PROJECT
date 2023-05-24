import React, { useState } from 'react'
import "./Card.css"
import  download from "./download.png"

function Card(props) {
 console.log(props.image)
  return (
       
    <div className='Card-profile '>
       
      <div className='upper-container'>
        <div className='image-container'>
        <img src={props.image} />;
        </div>
      </div>
      <div className='lower-container'>
        
      </div>
      <div className='lower-text-container'>
        <h3>{props.name}</h3>
        <h4>{props.Address}</h4>
        <p>{props.about}</p>
        

      </div>
    </div>
  )
}

export default Card;