import styles from "./icon.module.scss";
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FaRegSquarePlus } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Icon = () => {
  return (
    <div className={styles.iconContainer}>
      <GoHome className={styles.icon} />
      <GoSearch className={styles.icon} />
      <FaRegSquarePlus className={styles.icon} />
      <BiMoviePlay className={styles.icon} />
      <Link to="photodetail">
        <MdAccountCircle className={styles.icon} />
      </Link>
    </div>
  );
};

export default Icon;
