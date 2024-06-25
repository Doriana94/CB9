import styles from "./photodetail.module.scss";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { BASE_URL } from "../../utils/api.js";
import { useState, useEffect } from "react";
import PhotoList from "../PhotoList/PhotoList.jsx";

function PhotoDetail() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      `${BASE_URL}/users/claudiotesta/photos/?client_id=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <Link>
          <div className={styles.arrowContainer}>
            <NavLink to="/">
              <IoIosArrowBack className={styles.arrow} />
            </NavLink>
          </div>
        </Link>
        <h1>Doriana Scaffo</h1>
        <p>Posts</p>
      </div>
      <div className={styles.accountContainer}>
        <MdAccountCircle className={styles.account} />
        <h1>Doriana Scaffo</h1>
        <HiEllipsisHorizontal className={styles.ellipsis} />
      </div>
      <PhotoList data={photos} />
    </>
  );
}

export default PhotoDetail;
