import { createContext, useReducer } from "react";
import bookReducer from "../reducers/bookReducer";
import { v4 as uuid } from "uuid";
export const BookContext = createContext();
const data = [
  { title: "legend", author: "skyes", id: uuid() },
  { title: "mytical", author: "crawford", id: uuid() },
];

const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, data);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookProvider;
