import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// icons
import { TfiMoney } from "react-icons/tfi";
import { BsGraphUp, BsCalendarDate } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";

// styles
import styles from "./InfoMovie.module.css";

const img = "https://image.tmdb.org/t/p/w500/";

export const InfoMovie = () => {
  const [oneMovie, setOneMovie] = useState([]);

  const { id } = useParams();

  async function fetchMovieOne() {
    const request = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?" +
        "api_key=e197eca9102cd33ba20d59a102b0c5d9"
    );
    const response = await request.json();

    setOneMovie(response);
  }

  useEffect(() => {
    fetchMovieOne();
  }, []);


  function formatValue(number) {


    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className={styles.movie}>
      <img src={img + oneMovie.backdrop_path} alt={oneMovie.title} />
      <div className={styles.about}>
        <p className={styles.title}> {oneMovie.title} </p>
        <p className={styles.overview}> {oneMovie.overview} </p>

        <div className={styles.movieInfo}>
          <p className={styles.lang}>
            {" "}
            <FaLanguage style={{ color: "#f14" }} /> Lingua:{" "}
            {oneMovie.original_language}{" "}
          </p>
          <p className={styles.date}>
            {" "}
            <BsCalendarDate style={{ color: "#f14" }} /> Data:{" "}
            {oneMovie.release_date}{" "}
          </p>

          <p>
            {" "}
            <AiOutlineStar style={{ color: "#f14" }} /> Estrelas:{" "}
            {oneMovie.vote_average}{" "}
          </p>
          <p className={styles.popularity}>
            {" "}
            <BsGraphUp style={{ color: "#f14" }} /> Popularidade:{" "}
            {oneMovie.popularity}{" "}
          </p>
          <p className={styles.popularity}>
            {" "}
            <TfiMoney style={{ color: "#f14" }} /> Valor: ${" "}
            {formatValue(Number(oneMovie.budget))}{" "}
          </p>
          <p className={styles.popularity}>
            {" "}
            <TfiMoney style={{ color: "#f14" }} /> Receitas: ${" "}
            {formatValue(Number(oneMovie.revenue))}{" "}
          </p>
          <p className={styles.popularity}>
            {" "}
            <BiTimer style={{ color: "#f14" }} /> Duração: {oneMovie.runtime} minutes{" "}
          </p>
        </div>
        <div className={styles.linkItem}>
          <Link className={styles.link} to="/">
            {" "}
            Voltar{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
