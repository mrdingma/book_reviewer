import React, { useState, useEffect } from "react";

import Movies from "./Movies.jsx";
import Add from "./Add.jsx";

const App = (props) => {
  const [movieList, setMovieList] = useState([]);

  const addMovie = function (movie) {
    // TODO: check if duplicate
    setMovieList([...movieList, movie]);
  };

  let content = (
    <>
      <Add setMovieList={setMovieList} />
      <Movies movieList={movieList} />
    </>
  );

  return content;
};

export default App;
