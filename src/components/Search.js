import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const auth = "kyhOQnAMNiRiP780HAJ3rq7oGCv4f9rn6vFQoiNaZFlqYOBUKoshI9LK";
  const initialURL = "GET https://api.pexels.com/v1/curated?page=1&per_page=15";

  const search = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });
    //console.log("result");
    console.log(result);
  };

  /* const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };  */
  //console.log(Search);
  return (
    <div className="search">
      <input className="input" type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
