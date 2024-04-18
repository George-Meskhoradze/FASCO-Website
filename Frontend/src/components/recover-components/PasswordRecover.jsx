import React from 'react'
import '../../css/Recover.css'
import { Link } from 'react-router-dom'

export default function Recover() {
  return (
    <div className='recover-container'>

        <h1 className='recover-sso-text'>Forget Password</h1>

        <div className="recover-input-container">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="email" placeholder='Email Address' />
        <input type="number" placeholder='Phone Number' />
        </div>

        <button className="recover-confirmation">Send Confirmation Code</button>

        <h1 className="recover-account">Already have an account? <span><Link to='/login'>Login</Link></span></h1>

    </div>
  )
}

