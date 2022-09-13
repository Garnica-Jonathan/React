import React from 'react'


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
            <p className='descripcion'>{item.stock}</p>
        </div>
        
    </div>
  )
}

export default Item