import styles from "./list.module.scss";
import Photo from "../Photo/Photo";

const List = ({ photos }) => {
  return (
    <>
      <div className={styles.listPhotos}>
        {photos?.map((photo, index) => (
          <Photo key={index} photo={photo?.urls.small} />
        ))}
      </div>
    </>
  );
};

export default List;
