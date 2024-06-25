import Post from "../Post/Post";
import styles from "./photolist.module.scss";

const PhotoList = ({ data }) => {
  return (
    <div className={styles.photoList}>
      {data?.map((post, index) => (
        <Post data={post} key={index} />
      ))}
    </div>
  );
};

export default PhotoList;
