"use client";

import { useRef } from "react";
import styles from "./carousel.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Carousel = ({ movies = [] }) => {
  const carouselRef = useRef();
  const movieCardRef = useRef();

  const handleArrowClick = (type) => {
    const movieCardWidth = movieCardRef.current?.offsetWidth;

    if (type === "left") {
      carouselRef.current.scroll({
        top: 0,
        left: carouselRef.current.scrollLeft - movieCardWidth,
        behavior: "smooth",
      });
    } else {
      carouselRef.current.scroll({
        top: 0,
        left: carouselRef.current.scrollLeft + movieCardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowsContainer}>
        <IoIosArrowDropleftCircle
          className={styles.genericIcon}
          onClick={() => {
            handleArrowClick("left");
          }}
        />
        <IoIosArrowDroprightCircle
          className={styles.genericIcon}
          onClick={() => {
            handleArrowClick();
          }}
        />
      </div>
      <div ref={carouselRef} className={styles.carousel}>
        {movies.map((movie, index) => {
          return (
          <MovieCard key={index} refProp={movieCardRef} movie={movie}/>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
