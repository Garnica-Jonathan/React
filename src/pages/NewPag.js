import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {createItem, getItems, deleteItem, updateItem} from "../app/api"

const NewPag = () => {
    const [bookName, setBookName] = useState()
    const [books, setBook] = useState()
    const [bookId, setBookId] = useState()

    const getBooks = () => getItems().then(res => setBook(res))

    useEffect(() =>{
        getBooks()
    }, [])
    console.log(books)
  return (
    <>
        <input type="text" onChange={e => setBookName(e.target.value)} placeholder="titulo"/>
        <input type="text" onChange={e => setBookId(e.target.value)} placeholder="id"/>

        <button onClick={async () => await createItem({titulo : bookName}, getBooks())}> guardar </button>
        <button onClick={async () => await updateItem(bookId,{name : bookName}, getBooks())}> Actualizar </button>
        <button onClick={async () =>  {
            await deleteItem(bookId)
            getBooks()
            }}> eliminar </button>

        {
            books && books.map((book, id) => <p key={id}>{book.id} - {book.titulo}</p>)
        }
        
    </>
  )
}

export default NewPag