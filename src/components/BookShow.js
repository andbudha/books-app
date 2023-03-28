import React, {useState} from 'react';
import {BookEdit} from "./BookEdit";

export const BookShow = ({book, onDelete}) => {

    //title editor state
    const [showEdit, setShowEdit]=useState(false);

    //book deleting by id func
    const onClickDeleteHandler = () => {
        onDelete(book.id);
    }

    //title editing func
    const onClickEditHandler = () => {
        setShowEdit(!showEdit);
    }

    //title&title-editing conditioning
    let content = <h3>{book.title}</h3>

    if(showEdit){
        content = <BookEdit/>;
    }

    return (
        <div className={'book-show'}>
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
