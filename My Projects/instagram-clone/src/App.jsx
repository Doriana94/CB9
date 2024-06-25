import styles from "./app.module.scss";
import { useState, useEffect } from "react";
import { BASE_URL, per_page } from "./utils/api";
import ProfileUser from "./components/ProfileUser/ProfileUser";
import List from "./components/List/List";
import Photo from "./components/Photo/Photo";
import StoryCarousel from "./components/StoryCarousel/StoryCarousel";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState({});
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/users/claudiotesta/photos/?client_id=${
        import.meta.env.VITE_API_KEY
      }&per_page=${per_page}`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  useEffect(() => {
    fetch(
      `${BASE_URL}/users/claudiotesta/?client_id=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    fetch(
      `${BASE_URL}/collections/235/photos/?client_id=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <>
      <ProfileUser
        username={"Doriana Scaffo"}
        description={"Developer Front-End"}
      />
      <StoryCarousel stories={stories} />
      <List photos={photos} />
      <Photo photo={photos[0]?.urls.small} />
      <Footer />
    </>
  );
}

export default App;
