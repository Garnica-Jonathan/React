import React from 'react'
import ItemCart from '../Components/ItemCart'
import { useCartContext } from '../Contex/Provider'

const Cart = () => {
const{carrito, precioTotal, clear} = useCartContext()
console.log(carrito)
  return (
    <>
    <div className='producto'>
    {/* {carrito&&carrito} */}
     {
     carrito.length > 0 
     ? carrito.map((producto, id) => <ItemCart key={id} producto={producto} />)
    : "vacio"
    } 
    </div>
    <p>Total: ${precioTotal()}</p>
    <button onClick={()=>clear()}>eliminar todo</button>
    </>
  )
}

export default Cart