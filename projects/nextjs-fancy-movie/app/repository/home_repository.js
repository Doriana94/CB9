import { v4 as uuidv4 } from "uuid";

const generateRandomCover = () => {
  const covers = [
    "https://image.tmdb.org/t/p/w500/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
    "https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
    "https://image.tmdb.org/t/p/w500/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
  ];
  const randomCover = covers[Math.floor(Math.random() * covers.length)];
  return randomCover;
};

const generateRandomTitle = () => {
  const titles = [
    "Titanic",
    "Inception",
    "Interstellar",
    "Eternal Sunshine of the Spotless Mind",
    "Star Wars: The Force Awakens",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "Fight Club",
    "Forrest Gump",
    "Jurassic Park",
  ];
  const nouns = ["Movie", "Film", "Cinema", "Flick", "Picture"];
  const randomTitle =
    titles[Math.floor(Math.random() * titles.length)] +
    "" +
    nouns[Math.floor(Math.random() * nouns.length)];

  return randomTitle;
};
const generateRandomMovies = (count) => {
  const movies = [];
  for (let i = 0; i < count; i++) {
    const movie = {
      id: uuidv4(),
      title: generateRandomTitle(),
      imageUrl: generateRandomCover(),
    };

    movies.push(movie);
  }
  return count === 1 ? movies[0] : movies;
};

const homeData = {
  filmOfTheWeek: generateRandomMovies(1),
  popMovies: generateRandomMovies(10),
};

export const getHomeSection = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(homeData);
    }, 1000);
  });
};
