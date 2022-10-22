
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {createItem, getItems, deleteItem, updateItem} from "../app/api"

const NewPag = () => {
    const [bookDescripcion, setBookDescripcion] = useState({
        
        descripcion:"",
        categoria:"",
        stock: "",
        precio: ""
    })
    const [books, setBook] = useState()
    const [bookId, setBookId] = useState()

    const getBooks = () => getItems().then(res => setBook(res))

    useEffect(() =>{
        getBooks()
    }, [])
    console.log(books)

    const create = async (e)=>{
        e.preventDefault()
    await createItem(bookDescripcion,getBooks() )
    }

    const eliminar = async(e) =>{
        e.preventDefault()
        await deleteItem(bookId,bookDescripcion, getBooks())
    }

    const actualizar = async (e) =>{
        e.preventDefault()
        await updateItem(bookId,bookDescripcion,getBooks())
    }

  return (
    <>
        <form onSubmit={create} >
            <input type="text" onChange={(event) => setBookDescripcion({...bookDescripcion, titulo: event.target.value})} placeholder="Titulo"/>
            <input type="text" onChange={(event) => setBookDescripcion({...bookDescripcion, descripcion: event.target.value})} placeholder="Descripcion"/>
            <input type="text" onChange={(event) => setBookDescripcion({...bookDescripcion, categoria: event.target.value})} placeholder="categoria"/>
            <input type="number" onChange={(event) => setBookDescripcion({...bookDescripcion, stock: event.target.value})} placeholder="Stock"/>
            <input type="number" value={bookDescripcion.precio} onChange={(event) => setBookDescripcion({...bookDescripcion, precio: event.target.value})} placeholder="precio"/>
            <button> guardar </button>
        </form>
        
        <form onSubmit={actualizar}>
            <input type="text" onChange={e => setBookId(e.target.value)} placeholder="id"/>
            <button>actualizar</button>
            <button onClick={(e) => eliminar(e)}>eliminar</button>
        </form>

        {
            books && books.map((book, id) => <p key={id}>{book.id} - {book.titulo}- {book.descripcion}-{book.stock}-{book.precio}</p>)
        }
        
    </>
  )
}

export default NewPag