import React from 'react'
import { useState, useEffect } from 'react'
import { getItem } from '../app/api'
import ItemDetail from '../Components/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[informacion, setInformacion] = useState([])

    useEffect(() => {
        getItem().then((data) =>{
            setInformacion(data)
        })
    },[])
    const {asd} = useParams();
  return (
    <div>
        {informacion.map((info, id) => (
            <ItemDetail key={id} info={info} useParams={asd}/>
        ))}
       

    </div>
  )
}

export default ItemDetailContainer