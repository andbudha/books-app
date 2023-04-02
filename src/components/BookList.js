import React from 'react';
import {useContext} from "react";
import {BooksContext} from "../context/books";
import {BookShow} from "./BookShow";

export const BookList = ({books, onDelete, editTitle}) => {

    const number = useContext(BooksContext);

    const renderedBooks = books.map(book=>{
        return <BookShow key={book.id} book={book} onDelete={onDelete} editTitle={editTitle}/>
    })
    return (
        <div className={'book-list'}>
            {number}
            {renderedBooks}
        </div>
    );
};
