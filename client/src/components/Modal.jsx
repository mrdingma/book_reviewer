import React, { useState, useEffect, useRef } from "react";

const Modal = (props) => {
  const { reviewsList, setReviewsList, setSelectedBook, selectedBook } = props;
  const wrapperRef = useRef(null);

  const handleClickOutside = (e) => {
    if (wrapperRef.current && wrapperRef.current === e.target) {
      setSelectedBook(-1);
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();

    const text = e.target.elements[0].value;
    const now = new Date();

    if (text.length > 0) {
      setReviewsList(
        reviewsList.map((book, idx) => {
          if (selectedBook === idx) {
            book.reviews.push({
              time: now.toLocaleString(),
              text,
            });
          }
          return book;
        })
      );
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <>
      <div className="modal__screen" ref={wrapperRef}></div>
      <div className="modal__wrapper">
        <div className="modal__content">
          <div className="nav__title">Reviews</div>
          <div className="modal__reviews">
            {reviewsList[selectedBook].reviews.map((review, idx) => (
              <div className="review__wrapper" key={idx}>
                <div className="review__date">{review.time}</div>
                <div className="review__text">{review.text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleAddReview}>
            <textarea className="modal_textBox" />
            <button className="moda__button">Add Review</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
