import React from "react";
import styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
