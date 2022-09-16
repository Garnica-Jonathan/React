import React from 'react'
import { Link } from 'react-router-dom'


import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='Nav'>
      <h1><Link to='/'>Electro Mundo</Link></h1>
      <p><Link className='NavTitle' to="/1">ItemDetailContainer</Link></p>
      <p><Link className='NavTitle' to="/ItemDetailContainer/2">ItemDetailContainer</Link></p>
      <CartWidget/>
    </div>
    
    // <div className='Nav'>
      

    //     {/* <h1>Electro Mundo</h1>
    //     <a className='NavTitle' href="#">Inicio</a>
    //     <a className='NavTitle' href="#">Categorias</a>
    //     <a className='NavTitle' href="#">Ofertas</a> */}
    //     <CartWidget/>
        
    // </div>

  )
}

export default NavBar