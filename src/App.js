import React, {useEffect, useState} from 'react';
import {BookCreate} from "./components/BookCreate";
import {BookList} from "./components/BookList";
import axios from "axios";


const App = () => {

    //state for books
    const[books, setBooks]=useState([]);

    //books fetching func
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }

    useEffect(()=>{
        fetchBooks();
    },[]);


    //book creating func
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    //book deleting func
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        setBooks(books.filter(book=>book.id !== id));
    }

    //title updating func
    const editTitle = async (bookID, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${bookID}`, {
            title: newTitle
        });

        //setBooks(books.map(book=>book.id === bookID ? {...book, title: newTitle} : book));
        const updatedBooks = books.map(book=>{
           if(book.id === bookID){
               return {...book, ...response.data}
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