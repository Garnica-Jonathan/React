import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

const Layout = () => {
  return (
    <div className='Layout'>
        <NavBar/>
        <Outlet/>
        <footer className="footer">El footer</footer>
    </div>
  )
}

export default Layout