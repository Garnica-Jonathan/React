import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <footer>El footer</footer>

    </div>
  )
}

export default Layout