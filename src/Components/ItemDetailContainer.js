import React from 'react'
import { useState, useEffect } from 'react'
import { getItem } from '../app/api'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const[informacion, setInformacion] = useState([])

    useEffect(() => {
        getItem().then((data) =>{
            setInformacion(data)
        })


    },[])
  return (
    <div>
        {informacion.map((info, id) => (
            <ItemDetail key={id} info={info}/>
        ))}

    </div>
  )
}

export default ItemDetailContainer