import React from 'react'
import ItemCart from '../Components/ItemCart'
import { useCartContext } from '../Contex/Provider'
import { createOrder,getIOrder } from '../app/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

    if(carrito.length ===0){
      return(
        <>
        <p>No hay productos disponible</p>
        <button><Link to={"/Item/"}>Inicio</Link></button>
        </>
      )
    }

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
     {
     carrito.map((producto, id) => <ItemCart key={id} producto={producto} />)
     } 
    </div>
    
    <p>Total: ${precioTotal()}</p>
    <button onClick={()=>clear()}>eliminar todo</button>

    <form onSubmit={comprar}>
      <input type="text" value={usuario.Nombre} onChange={(event) => {setUsuario({...usuario, Nombre: event.target.value})}} placeholder="nombre"/>
      <input type="number" value={usuario.telefono} onChange={(event) =>{setUsuario({...usuario, telefono: event.target.value})}} placeholder="telefono"/>
      <input type="text" value={usuario.mail} onChange={(event) => setUsuario({...usuario, mail: event.target.value})} placeholder="mail"/>
      <button><Link to={"/Finalizar/"}>comprar</Link></button>
    </form>

    </>
  )
}

export default Cart