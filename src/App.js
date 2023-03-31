import React, {useState} from 'react';
import {BookCreate} from "./components/BookCreate";
import {BookList} from "./components/BookList";
import axios from "axios";


const App = () => {

    //state for books
    const[books, setBooks]=useState([]);

    //book creating func
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        console.log(response.data);
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    //book deleting func
    const deleteBookById = (id) => {
        const updatedBooks = books.filter(book=>book.id !== id);
        setBooks(updatedBooks);
    }
    //title updating func
    const editTitle = (bookID, newTitle) => {
        //setBooks(books.map(book=>book.id === bookID ? {...book, title: newTitle} : book));
        const updatedBooks = books.map(book=>{
           if(book.id === bookID){
               return {...book, title: newTitle}
           } return book;
        });

        setBooks(updatedBooks);
    }

    return (
        <div className={'app'}>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} editTitle={editTitle}/>
            <BookCreate onSubmit={createBook}/>
        </div>
    );
};

export default App;