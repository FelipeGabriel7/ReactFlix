import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../components/Card";

import styles from "./Home.module.css";

const urlApi = "https://api.themoviedb.org/3/movie/";
const keyApi = "api_key=e197eca9102cd33ba20d59a102b0c5d9";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading , setLoading ] = useState(false);

  async function fetchData(url) {

    setLoading(true)

    const request = await fetch(url);
    const response = await request.json();

    setLoading(false)
    setMovies(response.results);
  }

  useEffect(() => {
    const filteredMovies = `${urlApi}top_rated?${keyApi}`;
    fetchData(filteredMovies);
  }, []);

  return (
    <div className={styles.content}>
      {loading && <h1> Buscando ... </h1>}
      <h1 className={styles.title}> Confira os melhores filmes : </h1>
      <div className={styles.movies}>
        {movies &&
          movies.map((movie) => (
            <>
              <Card key={movie.id} id={movie.id} className={styles.card} title={movie.title} avaliate={movie.vote_average} image={movie.poster_path}/>
            </>
          ))}
      </div>
    </div>
  );
};
