import styles from "./storycarousel.module.scss";
import Story from "../Story/Story";

const StoryCarousel = ({ stories }) => {
  return (
    <div className={styles.storyCarousel}>
      {stories?.map((story, index) => (
        <Story key={index} story={story} />
      ))}
      <div className={styles.addedStory}>
        <h3 className={styles.plusStory}>+</h3>
        <p className={styles.title}>New</p>
      </div>
    </div>
  );
};

export default StoryCarousel;
