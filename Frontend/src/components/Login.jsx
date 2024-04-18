import React from 'react'
import '../css/login.css'
import {Routes, Route} from 'react-router-dom'
import PasswordRecover from './recover-components/PasswordRecover'
import RecoverCode from './recover-components/RecoverCode'
import NewPassword from './recover-components/NewPassword'
import LoginField from './recover-components/LoginElement'
import Register from './Register'


export default function Login() {
  return (
    <div className='body'>
      <div className="border">
        <div className="container">
          <img src="../img/login.jpg" alt="fashion" className='fashionImage'/>
          <div className="right-container">

            <h1 className='login-logo'>FASCO</h1>

            <Routes>
              <Route path='/login' element={<LoginField />} />
              <Route path='/recover' element={<PasswordRecover />} />
              <Route path='/recover/code' element={<RecoverCode />} />
              <Route path='/new/password' element={<NewPassword />} />
            </Routes>

          </div>
        </div>
      </div>
    </div>
  )
}
