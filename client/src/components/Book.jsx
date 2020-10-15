import React, { useState, useEffect } from "react";

const Book = (props) => {
  const { title, author, description, imageURL, setSelectedBook, id } = props;

  return (
    <div className="book">
      <div className="book__cover">
        <img
          onClick={() => setSelectedBook(id)}
          alt="book cover image"
          src={imageURL}
        />
      </div>
      <div className="book_details">
        <div className="book__title">{title}</div>
        <div className="book__author">{author}</div>
        <div className="book__descrip">{description}</div>
      </div>
    </div>
  );
};

export default Book;
