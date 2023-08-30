import { ReactNode } from "react";
import styles from "./CenteredContainer.module.css";

interface ContentContainerProps {
  children: ReactNode;
}

function ContentContainer({ children }: ContentContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default ContentContainer;
