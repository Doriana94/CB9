"use client";

import { useRef } from "react";
import styles from "./carousel.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Carousel = () => {
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
        {/* {list.map((movie, index) => {
          return (
            <MovieCard
              refProp={movieCardRef}
              title={movie.original_title}
              imgUrl={movie.backdrop_path}
              movie={ movie }
              key={index}
            />
          );
        })} */}
        <MovieCard refProp={movieCardRef}/>
        <MovieCard refProp={movieCardRef}/>
        <MovieCard refProp={movieCardRef}/>
        <MovieCard refProp={movieCardRef}/>
        <MovieCard refProp={movieCardRef}/>
        <MovieCard refProp={movieCardRef}/>
      </div>
    </div>
  );
};

export default Carousel;
