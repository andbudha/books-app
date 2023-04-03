import {createContext, useState} from "react";
import axios from "axios";

export const BooksContext = createContext();


export const Provider = ({children}) => {

    //state for books
    const[books, setBooks]=useState([]);

    //books fetching func
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };


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
    };

    //title updating func
    const editTitle = async (bookID, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${bookID}`, {
            title: newTitle
        });

        const updatedBooks = books.map(book=>{
            if(book.id === bookID){
                return {...book, ...response.data}
            } return book;
        });

        setBooks(updatedBooks);
    };

    const valueToShare = {
        books: books,
        fetchBooks,
        createBook,
        deleteBookById,
        editTitle
    }


    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
        );
}
