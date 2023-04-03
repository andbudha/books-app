import React, {useState, useContext} from 'react';
import {BooksContext} from "../context/books";

export const BookCreate = () => {
    //creatBook from context
    const {createBook} = useContext(BooksContext);

    //input value catching state
    const[title, setTitle]=useState('');

    //input value catching func
    const onChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    
    
    //input value submitting func
    const onSubmitHandler = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
        <div className={'book-create'}>
            <h3>Add a Book</h3>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input className={'input'} value={title} onChange={onChangeHandler}/>
                <button className={'button'}>ADD NEW BOOK</button>
            </form>
        </div>
    );
};