import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({item}) => {
  console.log(item)
  return (
    <div>
      <div>
          <div className='list'>
              <p className='titulo'>{item.titulo}</p>
              <div className="imagen">
                  <img src={item.foto} alt=""/>
              </div>   
              <p className='precio'>Precio: ${item.precio}</p>
              <p className='descripcion'>categoria: {item.categoria}</p>
              <p className='acceder'><Link to={`/detalle/${item.id}`}>acceder </Link></p>
          </div>
      </div>
    </div>
  )
}

export default Item