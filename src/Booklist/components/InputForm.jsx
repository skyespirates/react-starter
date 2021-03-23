import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function InputForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="form">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title || !author) return;
          dispatch({ type: "ADD_BOOK", payload: { title, author } });
          setTitle("");
          setAuthor("");
        }}
        autoComplete="off"
        noValidate
      >
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
