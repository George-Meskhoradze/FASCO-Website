import React from 'react'
import '../../css/SectionTwo.css'
import SectionTwoClothes from './section-components/SectionTwoClothes'
import Clothe from '../../../public/img/clotheImage.png'

export default function SectionTwo() {
  return (
    <div className='clothe-Page'>

        <div className="div-clothe-page-header">
            <h1>Fashion</h1>
            <h2>Home &gt; Fashion</h2>
        </div>

        <div className="clothe-section-filter">
            <div className="filter-section">

                <h1 className="filter-section-header">Filters</h1>

                <div className="filter-section-box-one">
                    <h1>Size</h1>
                    <div className='clothes-size'>
                        <div>S</div>
                        <div>L</div>
                        <div>M</div>
                        <div>XL</div>
                    </div>
                </div>

                <div className="filter-section-box-two">
                    <h1>Colors</h1>
                    <div className='clothes-color'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="filter-section-box-three">
                    <h1>Prices</h1>
                    <div className='clothes-price'>
                        <h1>$0-$50</h1>
                        <h1>$50-$100</h1>
                        <h1>$100-$150</h1>
                        <h1>$150-$200</h1>
                        <h1>$200-$250</h1>
                    </div>
                </div>

                <div className="filter-section-box-four">
                    <h1>Brands</h1>
                    <div className='clothes-brands'>
                        <h1>Minimog</h1>
                        <h1>Retrolie</h1>
                        <h1>Brook</h1>
                        <h1>Learts</h1>
                        <h1>Vagabond</h1>
                        <h1>Abby</h1>
                    </div>
                </div>

                <div className="filter-section-box-five">
                    <h1>Collections</h1>
                    <div className='clothes-collection'>
                        <h1>All Products</h1>
                        <h1>Best Sellers</h1>
                        <h1>New Arrivals</h1>
                        <h1>Accessories</h1>
                    </div>
                </div>

                <div className="filter-section-box-six">
                    <h1>Tags</h1>
                    <div className='clothes-tags'>
                        <h1>Fashion</h1>
                        <h1>Hats</h1>
                        <h1>Sandal</h1>
                        <h1>Belt</h1>
                        <h1>Bag</h1>
                        <h1>Snacker</h1>
                        <h1>Denim</h1>
                        <h1>Minimog</h1>
                        <h1>Vagabond</h1>
                        <h1>Sunglasses</h1>
                        <h1>Beachwear</h1>
                    </div>
                </div>

            </div>


            <div className="filtered-clothes">
                <SectionTwoClothes img={Clothe} name='Rounded Red Hat' price='$8.00' colorOne="#FFD700" colorTwo='#000' />
                <SectionTwoClothes img={Clothe} name='Rounded Red Hat' price='$8.00' colorOne="#FFD700" colorTwo='#000' />
                <SectionTwoClothes img={Clothe} name='Rounded Red Hat' price='$8.00' colorOne="#FFD700" colorTwo='#000' />
                <SectionTwoClothes img={Clothe} name='Rounded Red Hat' price='$8.00' colorOne="#FFD700" colorTwo='#000' />

            </div>
        </div>

    </div>
  )
}
