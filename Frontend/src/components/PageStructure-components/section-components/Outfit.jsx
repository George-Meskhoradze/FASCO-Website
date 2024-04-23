import React from 'react'

export default function Outfit() {
  return (
    <div className='one-outfit-container'>

        <img src="../img/woman-outfit.png" alt="woman" />
        <div className="about-outfit">

            <h1 className="name-clothe">Shiny Dress</h1>
            <p className='clothe-description-one'>AI Karam</p>
            <p className='clothe-description-two'>(4.1k) Customer Reviews</p>

            <div className="clothe-price">
                <h1 className="price">$95.50</h1>
                <h1 className="items-available">Sold Out</h1>
            </div>

        </div>
    </div>
  )
}
