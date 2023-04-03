import React, {useContext, useState} from 'react';
import {BooksContext} from "../context/books";

export const BookEdit = ({book, submitHandler}) => {
    //editTitle func from Context
    const {editTitle} = useContext(BooksContext);

    //input value catching state
    const[inputValue, setInputValue]=useState(book.title);

    //input value catching func
    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    //input value submitting func
    const inputValueSubmit = (event) => {
      event.preventDefault();
        submitHandler();

    }

    //new title saving func
    const onClickHandler = () => {
        submitHandler();
        editTitle(book.id, inputValue);
    }

    return (
        <div>
            <form className="book-edit" onSubmit={inputValueSubmit}>
                <label>Title</label>
                <input className="input" value={inputValue} onChange={onChangeHandler} autoFocus/>
                <button className="button is-primary" onClick={onClickHandler}>
                    Save
                </button>
            </form>
        </div>
    );
};