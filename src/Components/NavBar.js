import React from 'react'
import { Link } from 'react-router-dom'


import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='Nav'>
      <h1><Link to='/'>Electro Mundo</Link></h1>
      <p><Link className='NavTitle' to="/Item/">Inicio</Link></p>
      <p><Link className="NavTitle" to ="/categoria/Cocina">Cocina</Link></p>
      <p><Link className="NavTitle" to ="/categoria/Limpieza">Limpieza</Link></p>
      <p><Link className="NavTitle" to ="/categoria/Cafetera">Cafetera</Link></p>
      <p><Link className="NavTitle" to ="/categoria/Pava">Pava</Link></p>
      <p><Link className='NavTitle' to="/NewPag/">Cargar Producto</Link></p>
      <CartWidget/>
    </div>
  )
}

export default NavBar