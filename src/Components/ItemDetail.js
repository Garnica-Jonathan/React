import React from 'react'

const ItemDetail = ({info}) => {
  return (
    <div className='InfoContainer'>
        <div className ="info">
            <p className='infoTitulo'>{info.titulo}</p>
            <img className="infoFoto" src={info.foto} alt=""/>
            <p className="infoDescripcion" >{info.descripcion}</p>
        </div>
        
    </div>
  )
}

export default ItemDetail