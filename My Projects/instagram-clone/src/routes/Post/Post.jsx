import styles from "./post.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { HiEllipsisHorizontal } from "react-icons/hi2";

const Post = ({ data }) => {
  return (
    <>
      <div>
        <img className={styles.imagePost} src={data.urls.regular} alt="post" />

        <div className={styles.icons}>
          <div className={styles.iconsLike}>
            <FaRegHeart className={styles.icon} />
            <FiMessageCircle className={styles.icon} />
            <PiShareFat className={styles.icon} />
          </div>
          <div className={styles.iconBook}>
            <GoBookmark className={styles.icon} />
          </div>
        </div>
        <div className={styles.postLikes}>
          <p className={styles.likes}>{data.likes} likes</p>
        </div>
        <div className={styles.imageInfo}>
          <h3>doriana scaffo</h3>
          <p className={styles.postCaption}>{data.alt_description}</p>
        </div>

        <div className={styles.accountContainer}>
          <MdAccountCircle className={styles.account} />
          <h1>Doriana Scaffo</h1>
          <HiEllipsisHorizontal className={styles.ellipsis} />
        </div>
      </div>
    </>
  );
};

export default Post;
