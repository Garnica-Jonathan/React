import React from 'react'
import ItemCart from '../Components/ItemCart'
import { useCartContext } from '../Contex/Provider'
import { createOrder,getIOrder } from '../app/api'
import { useState, useEffect } from 'react'

const Cart = () => {
const{carrito, precioTotal, clear} = useCartContext()
console.log(carrito)
    const [orden, setOrden] = useState()
    const [usuario, setUsuario] = useState({
      Nombre: "",
      telefono: "",
      mail: ""
    })

    const get = () => getIOrder().then(res => setOrden(res))
    useEffect(() =>{
        get()
    }, [])
    console.log(orden)

    const comprar = async(e) =>{
      e.preventDefault()
      const date = new Date()
      const total = precioTotal()
      console.log(date)
      await createOrder({usuario, carrito, date, total},get())
    }


  return (
    <>
    <div className='producto'>
    {/* {carrito&&carrito} */}
     {
     carrito.length > 0 
     ? carrito.map((producto, id) => <ItemCart key={id} producto={producto} />)
    : "No hay ningun producto disponible"
    } 
    </div>
    
    <p>Total: ${precioTotal()}</p>
    <button onClick={()=>clear()}>eliminar todo</button>

    <form onSubmit={comprar}>
      <input type="text" value={usuario.Nombre} onChange={(event) => {setUsuario({...usuario, Nombre: event.target.value})}} placeholder="nombre"/>
      <input type="number" value={usuario.telefono} onChange={(event) =>{setUsuario({...usuario, telefono: event.target.value})}} placeholder="telefono"/>
      <input type="text" value={usuario.mail} onChange={(event) => setUsuario({...usuario, mail: event.target.value})} placeholder="mail"/>
      <button>comprar</button>
    </form>

    </>
  )
}

export default Cart