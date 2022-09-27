import React from 'react'
import { useState, useContext, useParams } from 'react'
import { createContext } from 'react'

export const useCartContext = () => useContext(AppContex)


const Provider = ({children}) => {
    
    // const [stay, setStay] = useState([])
    const [carrito, setCarrito] = useState([])
    
    console.log(carrito)

    const clear = () => setCarrito([])

    const precioTotal = () =>{
      return carrito.reduce((reduc, act) => reduc + act.quantity * act.precio, 0)}

    const totalProductos = () =>carrito.reduce((acumulador, prodActual) => acumulador + prodActual.quantity, 0)

    const isInCart = (id) => carrito.find(producto => producto.id === id) ? true : false

    const removeItem =(id) => setCarrito(carrito.filter(producto => producto.id !== id))

    const addItem = (item, quantity) =>{
       if(isInCart(item.id)){
        setCarrito(carrito.map(producto => {
          return producto.id === item.id ? {...producto, quantity : producto.quantity + quantity} : producto
        }))
       }else{
        setCarrito([...carrito, {...item, quantity}])
       }
     }
    
  return (
    <AppContex.Provider value={{ clear, isInCart, removeItem, addItem, precioTotal, totalProductos, carrito}}>
        {children}
    </AppContex.Provider>
  )
}

const AppContex = createContext()
export default Provider