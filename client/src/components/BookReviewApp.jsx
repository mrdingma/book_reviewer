import React, { useState, useRef } from "react";
import Book from "./Book.jsx";
import Modal from "./Modal.jsx";
import SideBar from "./SideBar.jsx";

function BookReviewApp(props) {
  const [reviewsList, setReviewsList] = useState(props.reviewsList);
  const [selectedBook, setSelectedBook] = useState(-1);

  return (
    <>
      <div className="nav__title">Book Reviewer</div>
      <div className="nav_books_wrapper">
        <SideBar />
        <div className="books__wrapper">
          {props.reviewsList.map((book, idx) => (
            <Book
              key={idx}
              id={idx}
              setSelectedBook={setSelectedBook}
              {...book}
            />
          ))}
        </div>
      </div>

      {selectedBook >= 0 && (
        <Modal
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          reviewsList={reviewsList}
          setReviewsList={setReviewsList}
        />
      )}
    </>
  );
}

export default BookReviewApp;
