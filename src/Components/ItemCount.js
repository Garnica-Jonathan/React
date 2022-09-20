import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
const [contar, setContar] = useState(initial)

const incrementar = () => {
    setContar(contar + 1)
}
const decrementar = () => {
    setContar(contar - 1)
}

  return (
    <div>
        <button disabled={contar <= initial} onClick={decrementar}>-</button>
        <span>{contar}</span>
        <button disabled={contar >= stock} onClick={incrementar}>+</button>
        <div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCount