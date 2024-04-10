import React from "react";
import BookForm from "./BookForm";
import BookRight from "./BookRight";
import "./styles/Book.css";

function Book() {
 
  return (
    <>
      <section className="book-section" id="book">
        <div className="book-content">
          <BookForm />
          <BookRight />
        </div>
      </section>
    </>
  );
}

export default Book;
