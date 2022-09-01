import React from 'react'

import Foto from "../Asset/My_Office_Noona’s_Story.jpg"
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