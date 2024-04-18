import React from 'react'
import Login from './Login'
import { useLocation } from 'react-router-dom'
import Register from './Register'
import MainFeed from './MainFeed'

export default function MainPanel() {
  let location = useLocation()

  const RegisterPath = () => {
    return location.pathname !== "/register"
  }

  const EmptyPath = () => {
    return location.pathname == "/"
  }

  return (
    <div>
      {RegisterPath() ?
        EmptyPath() ? <MainFeed /> : <Login />
        :
        <Register />
      }
    </div>
  )
}
