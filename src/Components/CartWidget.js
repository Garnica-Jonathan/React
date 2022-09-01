import React from 'react'
import Foto from "../Asset/shopping-cart.png"
function CartWidget() {
  return (
    <div className='conteinerCart'>
        <img className='iconCart' src={Foto} alt=""/>
    </div>
  )
}

export default CartWidget