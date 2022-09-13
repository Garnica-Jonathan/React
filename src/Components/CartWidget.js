import React from 'react'
import Foto from "../Asset/shopping-cart.png"


const CartWidget = () => {
  return (
    <div className='conteinerCart'>
        { <img className='iconCart' src={Foto} alt=""/> }
        <p></p>
    </div>
    
  )
}

export default CartWidget
