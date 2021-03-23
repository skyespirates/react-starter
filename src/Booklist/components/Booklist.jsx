import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ListGroup } from "react-bootstrap";

function Booklist() {
  const { books, dispatch } = useContext(BookContext);
  return (
    <ListGroup style={{ maxWidth: "360px", margin: "0 auto" }}>
      {books.map((book) => (
        <ListGroup.Item
          key={book.id}
          action
          onClick={() => dispatch({ type: "REMOVE_BOOK", payload: book.id })}
        >
          {book.title} ~ {book.author}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Booklist;
