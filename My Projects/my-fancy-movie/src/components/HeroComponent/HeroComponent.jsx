import styles from "./hero.module.scss";

const HeroComponent = ({ imgUrl, title }) => {
  return (
    <div className={styles.heroContainer}>
      <h2>{title}</h2>
      <img src={`https://assets.nflxext.com/${imgUrl}`} alt="hero-image" />
      <button className={styles.heroBtn}>Discover more</button>
    </div>
  );
};

export default HeroComponent;
