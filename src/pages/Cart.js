import React from 'react'
import ItemCart from '../Components/ItemCart'
import { useCartContext } from '../Contex/Provider'
import { Link } from 'react-router-dom'

const Cart = () => {
const{carrito, precioTotal, clear} = useCartContext()
console.log(carrito)

    if(carrito.length ===0){
      return(
        <>
        <p>No hay productos disponible</p>
        <button><Link to={"/Item/"}>Inicio</Link></button>
        </>
      )
    }
  return (
    <>
    <div className='producto'>
     {
     carrito.map((producto, id) => <ItemCart key={id} producto={producto} />)
     } 
    </div>
    
    <p>Total: ${precioTotal()}</p>
    <button onClick={()=>clear()}>eliminar todo</button>
     <Link to={"/Information/"}>comprar</Link>

    </>
  )
}

export default Cart