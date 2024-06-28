import { useState } from "react";
import styles from "./moviecard.module.scss";
// import Modal from "../Modal/Modal";

const MovieCard = ({refProp}) => {

    return (
    <>
      <div ref={refProp} className={styles.movieCard}>
        <img
          src={'https://images.unsplash.com/photo-1719482029822-63249ec11d5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt="movie-card-img"
        />
        <p>Titolo film</p>
      </div>
    </>
  );
};

export default MovieCard;