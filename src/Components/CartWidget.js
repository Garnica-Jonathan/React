import React from 'react'
import { Link } from 'react-router-dom'
import Foto from "../Asset/shopping-cart.png"
import { useCartContext } from '../Contex/Provider'


const CartWidget = () => {
  const {totalProductos} = useCartContext()
  return (
    <div className='conteinerCart'>
      <Link to={"/cart"}><img className='iconCart' src={Foto} alt=""/></Link>
      <span>{totalProductos()|| ""}</span>
    </div>
    
  )
}

export default CartWidget
