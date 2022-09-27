import React from 'react'
import {promesa} from "../app/api"
import { useState, useEffect } from 'react'
import Item from './Item'

const ItemList = () => {
const [producto,setProducto] = useState([])

    useEffect(() =>{
      // Fet().then(res => setProducto(res))
        promesa().then((data) =>{
            setProducto(data)
        })
    },[])
  return (
    <div className='producto'>
      {
      producto.map((producto, id) => (
        <Item key={id} item={producto}/>
      ))
      }
      
    </div>
  )
}

export default ItemList