import React, { useReducer, useState } from 'react'
import { reducer } from './reducer';

const booksData = [
    {
        id: 1,
        name: 'Padma Nodir Majhi'
    },
    {
        id: 2,
        name: 'Srikanta'
    },
    {
        id: 3,
        name: 'Sesh er kobita'
    }
]

export const UseReducer = () => {
    // const [books, setBooks] = useState(booksData);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    //const [modalText, setModalText] = useState('');

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ''
    })

    const [bookName, setBookName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName }

        dispatch({ type: 'ADD', payload: newBook })
        setBookName('');

        // setBooks((prevState) => {
        // const newBook = { id: new Date().getTime().toString(), name: bookName }
        //     return [...prevState, newBook]
        // })
        // setBookName('')
        // setIsModalOpen(true);
        // setModalText('Book is added');
    }

    const Modal = ({ modalText }) => {
        return <p>{modalText}</p>
    }

    const removeBook = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    return (
        <div>
            <h2>Books List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                <button type='submit'>Add book</button>
            </form>
            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
            {
                bookState.books.map((book) => {
                    const { id, name } = book;
                    return <li key={id}>{name} <button onClick={() => removeBook(id)}>remove book</button></li>
                })
            }
        </div>
    )
}
