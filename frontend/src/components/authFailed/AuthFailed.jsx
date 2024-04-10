import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

const AuthFailed = () => {
  return (
    <div className='authfailed'>
      <div className="container">
        <div className="authfailedContents">
          <h1>You donot have permission</h1>
          <p>Please Login To Acces</p>
          <NavLink to ='/login'>Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default AuthFailed