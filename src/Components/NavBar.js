import React from 'react'


import CartWidget from './CartWidget'

const NavBar = () => {
  return (

    <div className='Nav'>
        <h1>Electro Mundo</h1>
        <a className='NavTitle' href="#">Inicio</a>
        <a className='NavTitle' href="#">Categorias</a>
        <a className='NavTitle' href="#">Ofertas</a>
        <CartWidget/>
        
    </div>

  )
}

export default NavBar