import React from 'react'
import { useState, useEffect } from 'react'
import {promesa} from "../app/api"
import "../app/style.css"
import Foto from"../Asset/novia_de_wallie.png"

const Items = (props) => {
    const [producto,setProducto] = useState([])

    useEffect(() =>{
        promesa().then((data) =>{
            setProducto(data)
        })
    },[])
  return (
    <div className='producto'>
        {
            producto.map( (producto,id )=> <div key={id} className='list'><li className='titulo'>{producto.titulo}</li><div className="imagen"><img src={Foto} ></img></div><li className='precio'>{producto.precio}</li><li className='descripcion'>{producto.descripcion}</li></div>)
            
        }



    </div>
  )
}

export default Items