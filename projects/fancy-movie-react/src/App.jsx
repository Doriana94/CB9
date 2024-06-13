import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Carousel from "./components/Carousel/Carousel";
import { useLoaderData } from "react-router-dom";

function App() {

  const movie = useLoaderData()
   
  return (
    <main className={styles.mainContainer}>
    
      <HeroComponent
        imageUrl={movie[0]?.backdrop_path}
        title={movie[0]?.original_title}
      />
      <section className={styles.carouselSection}>
        <Carousel list={movie} />
      </section>
      <section className={styles.carouselSection}>
      </section>
    </main>
  );
}

export const appLoader = async () => {
  const movies= await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`,
    },
  })

   const data = await movies.json()
   return data.results.filter((_, index) => index < 8)
}

export default App;