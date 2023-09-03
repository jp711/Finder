import { ReactElement } from "react";
import styles from "./HomeItem.module.css";

interface HomeItemProps {
  title: string;
  id: string;
  svg: ReactElement;
}

function HomeItem({ title, svg, id }: HomeItemProps) {
  return (
    <a key={id} className={styles.link} href="https://www.finder.com.au">
      {svg}
      <div>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </a>
  );
}

export default HomeItem;
