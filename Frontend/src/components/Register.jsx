import React from 'react'
import '../css/Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='body'>
      <div className="border">
        <div className="register-container-parent">
          <img src="../img/register.jpg" alt="fashion" className='RegisterImage'/>
          <div className="register-right-container">
            <h1 className='register-logo'>FASCO</h1>
            <div className='register-container'>

              <h1 className='reg-sso-text'>Create Account</h1>


              <button className="reg-sso-google">
                <img src="../img/google.png" alt="google"/>
                <h1>Sign Up With Google</h1>
              </button>

              <div className="reg-input-container">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="email" placeholder='Email Address' />
                <input type="number" placeholder='Phone Number' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
              </div>

              <button className="reg-create">Create Account</button>

              <h1 className="have-account">Already have an account? <span><Link to="/login">Login</Link></span></h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
