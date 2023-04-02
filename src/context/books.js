import {createContext, useState} from "react";

export const BooksContext = createContext();


export const Provider = ({children}) => {
    const [count, setCount] = useState(5);

    const valueToBeShared = {
        count,
        incrementCount: ()=>{
            setCount(count + 1);
        }
    };

    return (
        <BooksContext.Provider value={valueToBeShared}>
            {children}
        </BooksContext.Provider>
        );

}
