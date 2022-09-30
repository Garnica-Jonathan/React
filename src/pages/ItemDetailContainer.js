import React from 'react'
import { useState, useEffect } from 'react'
import { getItems, promesa } from '../app/api'
import ItemDetail from '../Components/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    let {id} = useParams()
     const[informacion, setInformacion] = useState()

      useEffect(() => {
          getItems().then((data) => setInformacion(data.filter((item) => item.id == id)))
      },[id])

  return (
    <div>
         {
         informacion
         ? informacion.map((info, id) => <ItemDetail key={id} info={info} />) 
         : "cargando"
        } 
       

    </div>
  )
}

export default ItemDetailContainer