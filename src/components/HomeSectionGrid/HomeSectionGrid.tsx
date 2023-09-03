import { useState } from "react";
import Button from "../Button/Button";
import HomeItem from "../HomeItem/HomeItem";
import styles from "./HomeSectionGrid.module.css";
import useDeviceType from "../../hooks/useDeviceType";
import { ITEMS } from "../../assets/items";
function initialItems(isTablet: boolean): JSX.Element[] {
  const numItems = isTablet ? 4 : 6;
  return ITEMS.slice(0, numItems).map((item) => (
    <HomeItem key={item.id} title={item.title} svg={item.svg} id={item.id} />
  ));
}

function HomeSectionGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isTablet } = useDeviceType();

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className={styles.grid}>
        {!isExpanded
          ? initialItems(isTablet)
          : ITEMS.map((item) => (
              <HomeItem
                key={item.id}
                title={item.title}
                svg={item.svg}
                id={item.id}
              />
            ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={handleClick}>
          <span className={styles.buttonText}>
            {isExpanded ? "Show less categories" : "Show more categories"}
          </span>
          {!isExpanded ? (
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              id="chevron-down"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              id="chevron-up"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.293 8.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </Button>
      </div>
    </>
  );
}

export default HomeSectionGrid;
