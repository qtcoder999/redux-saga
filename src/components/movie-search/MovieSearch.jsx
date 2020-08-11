import React, { useState } from "react";
import Search from "../movie-search-bar/Search";
import Results from "../movie-results/MovieResults";
import Popup from "../pop-up/PopUp";

function MovieSearch() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiurl = "http://www.omdbapi.com/?apikey=d80c08e0";

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prev) => {
      return { ...prev, s: s };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(apiurl + "&s=" + state.s)
        .then((response) => response.json())
        .then((response) => {
          let results = response.Search;
          console.log(results);
          setState((prev) => {
            return { ...prev, results: results };
          });
        });
    }
  };

  const openPopup = (id) => {
    fetch(apiurl + "&i=" + id)
      .then((response) => response.json())
      .then((result) => {
        setState((prev) => {
          return { ...prev, selected: result };
        });
      });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="">
      <h1>Movie Database</h1>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default MovieSearch;
