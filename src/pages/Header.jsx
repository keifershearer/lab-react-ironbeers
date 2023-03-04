import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <><div>
        <header><NavLink to='/' className='header'>HOME🏠</NavLink></header>
    </div>
    <Outlet/>
    </>
  )
}

export default Header