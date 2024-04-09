import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
import Logo from '../../../../assets/footer-logo.png'

const links = () => {
  return (
    <div className='dashboardLinks'>
      <div className="imgContainer">
        <img src={Logo} alt="SajhaBajar" />
      </div>
      <div className="links">
        <NavLink to='/admin/'>Dashboard</NavLink>
        <NavLink to='/admin/create'>Create Product</NavLink>
        <NavLink to='/admin/update'>Update Product</NavLink>
      </div>
    </div>
  )
}

export default links