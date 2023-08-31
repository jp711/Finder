import { useState } from "react";
import Button from "../Button/Button";
import HomeItem from "../HomeItem/HomeItem";
import styles from "./HomeSectionGrid.module.css";
import useDeviceType from "../../hooks/useDeviceType";

const ITEMS = [
  <HomeItem title="Personal Loans" />,
  <HomeItem title="Mobile Plans" />,
  <HomeItem title="Broadband & NBN" />,
  <HomeItem title="Super Funds" />,
  <HomeItem title="Share Trading" />,
  <HomeItem title="Life Insurance" />,
  <HomeItem title="Personal Loans" />,
  <HomeItem title="Mobile Plans" />,
  <HomeItem title="Broadband & NBN" />,
  <HomeItem title="Super Funds" />,
  <HomeItem title="Share Trading" />,
  <HomeItem title="Life Insurance" />,
  <HomeItem title="Home Insurance" />,
  <HomeItem title="Travel Insurance" />,
  <HomeItem title="Travel Deals" />,
  <HomeItem title="Crypto" />,
  <HomeItem title="Car Loans" />,
  <HomeItem title="Pet Insurance" />,
  <HomeItem title="Transaction Accounts" />,
  <HomeItem title="Money Transfers" />,
  <HomeItem title="Shopping Deals" />,
  <HomeItem title="Streaming" />,
  <HomeItem title="Business Insurance" />,
  <HomeItem title="Short Term Loans" />,
];

function initialItems(isTablet: boolean): JSX.Element[] {
  const numItems = isTablet ? 4 : 6;
  return ITEMS.slice(0, numItems);
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
        {isExpanded ? ITEMS : initialItems(isTablet)}
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={handleClick}>
          <span className={styles.buttonText}>
            {isExpanded ? "Show less categories" : "Show more categories"}
          </span>
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
