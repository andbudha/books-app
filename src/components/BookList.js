import React from 'react';
import {BookShow} from "./BookShow";

export const BookList = ({books, onDelete, editTitle}) => {

    const renderedBooks = books.map(book=>{
        return <BookShow key={book.id} book={book} onDelete={onDelete} editTitle={editTitle}/>
    })
    return (
        <div className={'book-list'}>
            {renderedBooks}
        </div>
    );
};
