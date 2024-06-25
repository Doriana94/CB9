import styles from "./profile.module.scss";
import { FaUser } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const ProfileUser = ({ username, description }) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.profile}>
        <FaUser className={styles.icon} />
        <h2>{username}</h2>
      </div>
      <div className={styles.description}>
        <LiaLaptopCodeSolid className={styles.icon} />
        <p className="description-user">{description}</p>
      </div>
      <div className={styles.buttonProfile}>
        <button className={styles.button}>Edit profile</button>
        <button className={styles.button}>Share profile</button>
      </div>
    </div>
  );
};

export default ProfileUser;
