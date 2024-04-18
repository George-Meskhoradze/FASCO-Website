import React from 'react'
import '../../css/NewPassword.css'

export default function RecoverCode() {
  return (
    <div className='newPassword-container'>

        <h1 className='newPassword-sso-text'>Enter Your New Password</h1>

        <div className="newPassword-input-container">
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
        </div>

        <button className="newPassword-confirmation">Submit</button>

    </div>
  )
}
