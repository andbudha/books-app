
import React, {useState} from 'react';
import {BookCreate} from "./components/BookCreate";

const App = () => {

    //state for books
    const[books, setBooks]=useState([]);

    //book creating func
    const createBook = (title) => {
        console.log('A new book has been added: ', title)
    }

    return (
        <div>
            <BookCreate onSubmit={createBook}/>
        </div>
    );
};

export default App;