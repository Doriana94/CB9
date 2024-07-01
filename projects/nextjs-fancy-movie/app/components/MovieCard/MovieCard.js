import { useState } from "react";
import styles from "./moviecard.module.scss";
// import Modal from "../Modal/Modal";

const MovieCard = ({refProp, movie}) => {

    return (
    <>
      <div ref={refProp} className={styles.movieCard}>
        <img
         src={movie.imageUrl}
          alt="movie-card-img"
        />
        <p>{movie.title}</p>
      </div>
    </>
  );
};

export default MovieCard;