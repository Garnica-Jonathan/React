import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import { getItems } from '../app/api'
import { useParams } from 'react-router-dom'

const ItemList = () => {
const [producto,setProducto] = useState()
const [cargando, setCargando] = useState(true)
const {categoryId} = useParams()

    useEffect(() =>{
      setTimeout(() =>{
        getItems().then((data) =>{
          if (categoryId){
            const prodFilter = data.filter((prod) => prod.categoria === categoryId)
            setProducto(prodFilter)
          }else{
            setProducto(data)
          }
          setCargando(false)
        })
        
      },1000)
        return () =>{
          setCargando(true)
        }
    },[categoryId])
  return (
    <div className='producto'>
      {
        cargando ? <p>Cargando</p>
      : producto.map((producto, id) => (
        <Item key={id} item={producto}/>
      ))
      
      }
      
    </div>
  )
}

export default ItemList