import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { AiOutlineStar } from "react-icons/ai";

const url = 'https://image.tmdb.org/t/p/w400/'

export const Card = ({ title, id, avaliate, image }) => {

  return (
    <div className={styles.card} key={id}>
      <div className={styles.item}>
        <img className={styles.image} src={url + image} alt={title}/>
        <h4 className={styles.title}>{title} </h4>
        <p className={styles.avaliate}>
          {" "}
          <AiOutlineStar style={{ color: "#da0000" }} /> {avaliate} 
        </p>
        <Link className={styles.link} to={`/movie/${id}`}> Detalhes </Link>
      </div>
    </div>
  );
};
