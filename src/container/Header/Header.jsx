import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <h1>MyLogo</h1>
      </Link>
    </div>
  );
};

export default Header;
