import React, {useState} from 'react';
import {BookEdit} from "./BookEdit";
import {useBooksContext} from "../hooks/useBooksContext";

export const BookShow = ({book}) => {


    //title editor state
    const [showEdit, setShowEdit]=useState(false);

    //deleteBookById func from Context
    const {deleteBookById} = useBooksContext();

    //book deleting by id func
    const onClickDeleteHandler = () => {
        deleteBookById(book.id);
    }

    //title editing func
    const onClickEditHandler = () => {
        setShowEdit(!showEdit);
    }

    //title changing and saving func
    const submitHandler = () => {
        setShowEdit(!showEdit);
    }

    //title&title-editing conditioning
    let content = <h3>{book.title}</h3>

    if(showEdit){
        content = <BookEdit book={book} submitHandler={submitHandler}/>;
    }



    return (
        <div className={'book-show'}>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
            {content}
            <div className={'actions'}>
                <button className={'edit'} onClick={onClickEditHandler}>
                    Edit
                </button>
                <button className={'delete'} onClick={onClickDeleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    );
};
