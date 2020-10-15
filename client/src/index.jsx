import React from "react";
import ReactDOM from "react-dom";
import BookReviewApp from "./components/BookReviewApp.jsx";
import data from "./data/fakedata.json";

const reviews = data.map((el) => {
  el.reviews = [];
  return el;
});

ReactDOM.render(
  <BookReviewApp reviewsList={reviews} />,
  document.getElementById("app")
);
