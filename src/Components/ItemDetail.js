import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useCartContext } from '../Contex/Provider'



const ItemDetail = ({info}) => {
  const [count, setCount] = useState(false)
  const {addItem} = useCartContext()

  const onAdd = (quantity) => {
    console.log(`compro ${quantity} producto`)
    setCount(true)
    addItem(info, quantity)
  }

  return (
    <div className='InfoContainer'>
        <div className ="info">
            <p className='infoTitulo'>{info.titulo}</p>
            <img className="infoFoto" src={info.foto} alt=""/>
            <p className="stock">Stock: {info.stock}</p>
            <p className="infoDescripcion">Categoria: {info.categoria}</p>
        </div>
        {
          count ? 
          <button><Link to={'/cart/'}>Terminar Compra</Link></button>
           :  <ItemCount stock={info.stock} initial={1} onAdd={onAdd}/>
        }
    </div>
  )
}

export default ItemDetail