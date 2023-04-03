import {useContext} from "react";
import {BooksContext} from "../context/books";


//custom hook
export const useBooksContext = () => {
    return useContext(BooksContext);
}