import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({item}) => {
  return (
    <div >
        <div className='list'>
            <p className='titulo'>{item.titulo}</p>
            <div className="imagen">
                <img src={item.foto} alt=""/>
            </div>   
            <p className='precio'>{item.precio}</p>
            <p className='descripcion'>{item.descripcion}</p>
            <p className='descripcion'>Stock: {item.stock}</p>
            <p><Link to='/ItemDetailContainer/2'>acceder {item.id}</Link></p>
        </div>
        
    </div>
  )
}

export default Item