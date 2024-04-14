import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

const LoginMessage = () => {
  return (
    <div className='loginMessage'>
      <div className="container" style={{ display:'flex',flexDirection:'column',gap:'30px' }}>
        <h1>Please Login to Continue</h1>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </div>
  )
}

export default LoginMessage