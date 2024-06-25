import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Carousel from "./components/Carousel/Carousel";
import { useLoaderData } from "react-router-dom";
import { fetchMovies } from "./utils/api";
import { popularURL, topRatedURL } from "./utils/endpoint";

function App() {
  const movies = useLoaderData();

  return (
    <main className={styles.mainContainer}>
      <HeroComponent
        imageUrl={movies[0]?.backdrop_path}
        title={movies[0]?.original_title}
      />
      <section className={styles.carouselSection}>
        <Carousel list={movies} />
      </section>
      <section className={styles.carouselSection}></section>
    </main>
  );
}

export const appLoader = async () => {
  const [popularData, topRatedData] = await Promise.all([
    fetchMovies(popularURL),
    fetchMovies(topRatedURL),
  ]);

  const movies = {
    hero: {
      img: popularData.results[0]?.backdrop_path,
      title: popularData.results[0]?.original_title,
    },
    popdata: popularData.results.filter((_, index) => index < 8),
    toprated: topRatedData.results.filter((_, index) => index < 8),
  };
  return movies;
};

export default App;
