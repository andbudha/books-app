import React, {useContext} from 'react';
import {BookShow} from "./BookShow";
import {BooksContext} from "../context/books";

export const BookList = ({books, onDelete, editTitle}) => {

    const {count, incrementCount} = useContext(BooksContext);

    const renderedBooks = books.map(book=>{
        return <BookShow key={book.id} book={book} onDelete={onDelete} editTitle={editTitle}/>
    })
    return (
        <div className={'book-list'}>
            {count}
            <button onClick={()=>incrementCount()}>click</button>
            {renderedBooks}
        </div>
    );
};
