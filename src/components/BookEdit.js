import React, {useState} from 'react';

export const BookEdit = ({book}) => {
    //input value catching state
    const[inputValue, setInputValue]=useState(book.title);

    //input value catching func
    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    //input value submitting func
    const inputValueSubmit = (event) => {
      event.preventDefault();
        console.log(inputValue);
    }

    return (
        <div>
            <form className="book-edit" onSubmit={inputValueSubmit}>
                <label>Title</label>
                <input className="input" value={inputValue} onChange={onChangeHandler}/>
                <button className="button is-primary">
                    Save
                </button>
            </form>
        </div>
    );
};