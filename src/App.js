import React, {useState} from 'react';
import {BookCreate} from "./components/BookCreate";
import {BookList} from "./components/BookList";

const App = () => {

    //state for books
    const[books, setBooks]=useState([]);

    console.log(books);
    //book creating func
    const createBook = (title) => {
        const updatedBooks = [...books, {id: Math.round(Math.random() * 9999), title}];
        setBooks(updatedBooks);
    }

    return (
        <div className={'app'}>
            <BookList books={books}/>
            <BookCreate onSubmit={createBook}/>
        </div>
    );
};

export default App;