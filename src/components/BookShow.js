import React from 'react';

export const BookShow = ({book, onDelete}) => {

    //book deleting by id func
    const onClikHandler = () => {
        onDelete(book.id);
    }
    return (
        <div className={'book-show'}>
            {book.title}
            <div className={'actions'}>
                <button className={'delete'} onClick={onClikHandler}>
                    X
                </button>
            </div>
        </div>
    );
};
