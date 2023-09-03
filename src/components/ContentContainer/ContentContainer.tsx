import HomeSectionGrid from "../HomeSectionGrid/HomeSectionGrid";
import styles from "./ContentContainer.module.css";

function ContentContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Join 2 million+ Australians finding better
        </h2>
        <p className={styles.text}>
          Finder's team of 40+ experts will help you find the right choices in
          over 100 categories.
        </p>

        <HomeSectionGrid />
      </div>
    </div>
  );
}

export default ContentContainer;
