import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
