import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Header.css'

export default function Header() {
  return (
    <div className='header-head'>
        <header>
            <h1 className="logo">FASCO</h1>
            <nav>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Shop</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Pages</Link></li>
                </ul>

                <div className="btn-container">
                    <Link to='/login' className='signin-btn'>Sign In</Link>
                    <Link to='/register' className='signup-btn'>Sign Up</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}
