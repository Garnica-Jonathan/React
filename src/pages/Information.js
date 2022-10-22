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
      mail: "",
      direccion:""
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
      <form className="form" onSubmit={comprar}>
        <p>Por favor ingrese sus datos:</p>
      <input className="imput" type="text" value={usuario.Nombre} onChange={(event) => {setUsuario({...usuario, Nombre: event.target.value})}} placeholder="Nombre"/>
      <input className="imput" type="number" value={usuario.telefono} onChange={(event) =>{setUsuario({...usuario, telefono: event.target.value})}} placeholder="Telefono"/>
      <input className="imput" type="text" value={usuario.mail} onChange={(event) => setUsuario({...usuario, mail: event.target.value})} placeholder="Mail"/>
      <input type="text" value={usuario.direccion} onChange={(event) => setUsuario({...usuario, direccion : event.target.value})} placeholder="Direccion"/>
      <button onClick={(e) => (comprar(e) - clear())}><Link to={"/Finalizar/{}"}>Finalizar compra</Link></button>
    </form>
    
    </div>
  )
}

export default Information