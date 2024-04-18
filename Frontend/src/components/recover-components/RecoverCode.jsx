import React from 'react'
import '../../css/recovercode.css'

export default function RecoverCode() {
  return (
    <div className='recover-code-container'>

        <h1 className='recover-code-sso-text'>Enter The Confirmation Code</h1>

        <input className='input' type="text" placeholder='Confirmation Code' />

        <button className="recover-code-confirmation">Recover Code</button>

        <h1 className="recover-code-account">Didn't Receive Confirmation Code? <span>Resend Now</span></h1>

    </div>
  )
}
