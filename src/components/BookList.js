import React from 'react';
import {BookShow} from "./BookShow";
import {useBooksContext} from "../hooks/useBooksContext";

export const BookList = () => {

    const {books} = useBooksContext();

    const renderedBooks = books.map(book=>{
        return <BookShow key={book.id} book={book}/>
    })
    return (
        <div className={'book-list'}>
            {renderedBooks}
        </div>
    );
};
