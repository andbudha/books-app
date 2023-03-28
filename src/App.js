import React, {useState} from 'react';
import {BookCreate} from "./components/BookCreate";
import {BookList} from "./components/BookList";

const App = () => {

    //state for books
    const[books, setBooks]=useState([]);

    //book creating func
    const createBook = (title) => {
        const updatedBooks = [...books, {id: Math.round(Math.random() * 9999), title}];
        setBooks(updatedBooks);
    };

    //book deleting func
    const deleteBookById = (id) => {
        const updatedBooks = books.filter(book=>book.id !== id);
        setBooks(updatedBooks);
    }

    return (
        <div className={'app'}>
            <BookList books={books} onDelete={deleteBookById}/>
            <BookCreate onSubmit={createBook}/>
        </div>
    );
};

export default App;