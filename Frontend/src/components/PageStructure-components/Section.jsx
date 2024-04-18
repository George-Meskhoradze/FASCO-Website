import React from 'react'
import '../../css/Section.css'
import {Link} from 'react-router-dom'

export default function Section() {
  return (
    <section className='section-container'>

        <div className="box-container">

            <div className="box-one">
                <img src="../img/black-person.png" alt="person" />
            </div>

            <div className="box-two">
                <div className="box-first">
                    <img src="../img/girls.png" alt="girls" />
                </div>
                <div className="box-second">
                    <h1 className='second-h1'>ULTIMATE</h1>
                    <h1 className='second-h1-two'>SALE</h1>
                    <h1 className='second-h1-three'>NEW COLLECTION</h1>
                    <Link className='shop-button-main'>Shop Now</Link>
                </div>
                <div className="box-third"></div>
            </div>

            <div className="box-three">
                <img src="../img/curly.png" alt="person" />
            </div>

        </div>

    </section>
  )
}
