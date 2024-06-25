import styles from "./story.module.scss";

const Story = ({ story }) => {
  return (
    <div className={styles.storyContainer}>
      <img src={story.urls.small} className={styles.imgStory} />
      <p className={styles.newStory}>{story.slug.substring(0, 11) + "..."}</p>
    </div>
  );
};

export default Story;
