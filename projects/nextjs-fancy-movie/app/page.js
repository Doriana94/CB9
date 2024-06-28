import Carousel from "./components/Carousel/Carousel";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import styles from "./page.module.scss";
import { v4 as uuidv4 } from "uuid";


const popMovies = Array.from({ length: 10 }, (_, i) => {
  return {
    id: uuidv4(),
    title: "Topolino alla conquista del west",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
});

const homeData = {
  filmOfTheWeek: {
    id: 1,
    title: "Titanic",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  popMovies: popMovies,
};



export default function Home() {
  
  return (
    <main>
      <HeroComponent movie={homeData.filmOfTheWeek} />

      <section className={styles.carouselSection}>
        <Carousel movies={homeData.popMovies} />
      </section>
    </main>
  );
}
