import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginElement() {

  return (
    <div className='login-container'>

        <h1 className='sso-text'>Sign In To FASCO</h1>

        <button className="sso-google">
        <img src="../img/google.png" alt="google"/>
        <h1>Sign Up With Google</h1>
        </button>

        <div className="input-container">
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        </div>

        <div className="button-container">
        <button className="login">Sign In</button>
        <button className="register"><Link to='/register'>Register Now</Link></button>
        </div>

        <h1 className="forgot-password"><Link to="/recover">Forgot Password?</Link></h1>

    </div>
  )
}
