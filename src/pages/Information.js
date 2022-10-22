import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createOrder, getIOrder } from '../app/api'
import { useCartContext } from '../Contex/Provider'

const Information = () => {
    const{carrito, precioTotal, clear} = useCartContext()
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
    console.log(getIOrder)
    const comprar = async(e) =>{
      e.preventDefault()
      const date = new Date()
      const total = precioTotal()
      console.log(date)
      await createOrder({usuario, carrito, date, total},get())
    }

  return (
    <div>
      <form onSubmit={comprar}>
      <input type="text" value={usuario.Nombre} onChange={(event) => {setUsuario({...usuario, Nombre: event.target.value})}} placeholder="nombre"/>
      <input type="number" value={usuario.telefono} onChange={(event) =>{setUsuario({...usuario, telefono: event.target.value})}} placeholder="telefono"/>
      <input type="text" value={usuario.mail} onChange={(event) => setUsuario({...usuario, mail: event.target.value})} placeholder="mail"/>
      <button onClick={(e) => (comprar(e) - clear())}><Link to={"/Finalizar/{}"}>comprar</Link></button>
    </form>
    </div>
  )
}

export default Information