import React from 'react'
import { useCartContext } from '../Contex/Provider'
import { createOrder,getIOrder } from '../app/api'
import { useState, useEffect } from 'react'

const ItemCart = ({producto}) => {
    const {removeItem} = useCartContext()

  return (
    <div >
        <div className='list'>
            <p className='titulo'>{producto.titulo}</p>
            <div className="imagen">
                <img src={producto.foto} alt=""/>
            </div>   
            <p className='precio'>cantidad:{producto.quantity}</p>
            <p className='descripcion'>precio {producto.precio}</p>
            <p className='descripcion'>total ${producto.quantity * producto.precio}</p>
            <button className='descripcion' onClick={() => removeItem(producto.id)}>Eliminar</button>
        </div>

        
    </div>
  )
}

export default ItemCart