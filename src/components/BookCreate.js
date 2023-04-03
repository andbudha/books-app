import React, {useState} from 'react';
import {useBooksContext} from "../hooks/useBooksContext";


export const BookCreate = () => {
    //creatBook from context
    const {createBook} = useBooksContext();

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