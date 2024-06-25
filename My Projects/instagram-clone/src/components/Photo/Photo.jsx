import styles from "./photo.module.scss";

const Photo = ({ photo }) => {
  return (
    <div className={styles.photoContainer}>
      <img src={photo} alt="photo" />
    </div>
  );
};

export default Photo;
