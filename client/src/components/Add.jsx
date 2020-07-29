import React, { useState, useEffect } from "react";
import axios from "axios";

const Add = ({ addMovie }) => {
  const [searchTxt, setSearchTxt] = useState("");

  const getMovies = function (e) {
    const search = e.target.value;

    const url = "/movies";
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let content = (
    <>
      <input placeholder="movie title" onChange={(e) => getMovies(e)}></input>
      <button>Add</button>
    </>
  );

  return content;
};

export default Add;
