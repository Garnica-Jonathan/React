
import React, {useEffect, useState} from 'react';
import ItemList from '../Components/ItemList';



const ItemListContainer = ({initial, stock, onAdd}) => {
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
       
      <ItemList/>
    </div>
  )
}

export default ItemListContainer


















// import React, {useEffect, useState} from 'react';
// import { ItemList } from "./ItemList";

// function ItemListContainer({initial, stock, onAdd}) {
//   const [contar, setContar] = useState(initial)

//   const decrementar = () => {
//     setContar(contar - 1)
//   }

//   const incrementar = () =>{
//     setContar(contar + 1)

//   }





//   return (
//     <div>
//       {/* <button disabled={contar <= initial} onClick={decrementar}>-</button>
//       <span>{contar}</span>
//       <button disabled={contar >= stock} onClick={incrementar}>+</button>
//       <div>
//         <button onClick={() => onAdd(contar)}>Agregar al carrito</button>
//       </div> */}
//     <ItemList/>
      
//     </div>
//   )
// }

// /*const Promesa = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     resolve([
//       { 
//         id: 1,
//         producto: "robot",
//         precio: 500,
//         marca:"nike"
//       }])
//   },2000)
// })

// Promesa.then(res => console.log(res))*/



// /*<div>
//         {
//           producto.map(persona => <li>{persona.titulo}</li>)
//         }
//       </div>*/




















// export default ItemListContainer