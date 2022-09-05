

import React, {useState} from 'react';

function ItemListContainer({initial, stock, onAdd}) {
  const [contar, setContar] = useState(initial)

  const decrementar = () => {
    setContar(contar - 1)
  }

  const incrementar = () =>{
    setContar(contar + 1)

  }


  return (
    <div>
      <button disabled={contar <= initial} onClick={decrementar}>-</button>
      <span>{contar}</span>
      <button disabled={contar >= stock} onClick={incrementar}>+</button>
      <div>
        <button onClick={() => onAdd(contar)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemListContainer