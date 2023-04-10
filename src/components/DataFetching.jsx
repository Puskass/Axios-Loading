import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const DataFetching = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films")
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul className="screen">
        {loading ? (
          movies.map((movie) => <li key={movie.episode_id}> {movie.title} </li>)
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default DataFetching;
