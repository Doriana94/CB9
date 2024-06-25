import { useLoaderData } from "react-router-dom";
import { baseURL } from "../../utils/endpoint";

export default function Movie() {

    const movie = useLoaderData();
   
  return (
    <>
      <div>
        <h1>Ciao sono movie {movieId}</h1>
      </div>
    </>
  );
}

export const movieLoader = async ({params}) => {

    const movieUrl = `${baseURL}/${params.id}?language=en-US`;
    const movie = await fetchMovies(movieUrl);
    
    return  movie;
};