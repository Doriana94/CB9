import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import Navbar from "./components/Navbar/Navbar";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import { AUTH_KEY } from '../constants';

function App() {
    const [movie, setMovie] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie',{
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${AUTH_KEY}`,
              },
            })
            .then((res) => res.json())
            .then((data) => {
                setMovie(data.results)
            })
    });

    fetch('https://api.themoviedb.org/3/tv/top_rated', {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${AUTH_KEY}`,
          },
        })
        .then((res) => res.json())
        .then((data) => {
            setTopRatedMovies(data.results)
          
        })

    
    return (
        <main className={styles.mainContainer}>
           <Navbar />
           <HeroComponent
           imageUrl={movie[0]?.backdrop_path}
           
           />
        </main>
    );
}

export default App;