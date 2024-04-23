import React from 'react'
import '../../../css/SectionTwo.css'

export default function SectiobTwoClothes(props) {

    const {colorOne} = props.colorOne
    const {colorTwo} = props.colorTwo


  return (
    <div className='specific-clothe'>
        <img src={props.img} alt="#" />
        <h1>{props.name}</h1>
        <p>{props.price}</p>
        <div className='specific-color'>
            <div style={{backgroundColor: colorOne}}></div>
            <div style={{backgroundColor: colorTwo}}></div>
        </div>
    </div>
  )
}
