import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getItems } from '../app/api'

const Finalizar = () => {
  const[bring, setBring] = useState([])
  

  const getBring = () => getItems().then((res) => setBring(res))

  useEffect(() =>{
    getBring()
  })

  return (
    <div>
      {
        bring.map((bring,i) => <p key={i}>{bring.id}</p>)
      }
    </div>
  )
}

export default Finalizar