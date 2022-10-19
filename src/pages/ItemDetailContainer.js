import React from 'react'
import { useState, useEffect } from 'react'
import { getItems } from '../app/api'
import ItemDetail from '../Components/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
     const[informacion, setInformacion] = useState([])
     const [cargando, setCargando] = useState(true)
      const {id} = useParams()
     
      useEffect(() => {
        setTimeout(()=>{
        getItems().then((data) => {
           setInformacion(data.filter((item) => item.id === id)) 
          // if(id){
          //   const informacion = data.filter((item) => item.id === id) 
          //   setInformacion(informacion)
          // }else{
          //   const infor = data.filter((item) => item.id !== id) 
          //   setInformacion(infor)
          // }
        })
        setCargando(false)
     },1000)
          
      },[id])

  return (
    <div>
         {
         cargando ? <p>Cargando</p>
          : informacion.map((info, id) => (
          <ItemDetail key={id} info={info} />))
          
        }   
        
    </div>
  )
}

export default ItemDetailContainer