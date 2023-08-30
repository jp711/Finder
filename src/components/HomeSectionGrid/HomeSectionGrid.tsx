import Button from "../Button/Button";
import HomeItem from "../HomeItem/HomeItem";
import styles from "./HomeSectionGrid.module.css";

function HomeSectionGrid() {
  return (
    <>
      <div className={styles.grid}>
        <HomeItem title="Credit card" />
        <HomeItem title="Credit card" />

        <HomeItem title="Credit card" />
        <HomeItem title="Credit card" />
        <HomeItem title="Credit card" />
        <HomeItem title="Credit card" />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {
            console.log("toggle items");
          }}
        >
          <span className={styles.buttonText}>Show more categories</span>
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            id="on-down"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
          </svg>
        </Button>
      </div>
    </>
  );
}

export default HomeSectionGrid;
