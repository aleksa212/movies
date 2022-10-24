import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import AuthContext from "../../store/AuthContext";

import styles from "./Header.module.scss";

const Header = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <h1>MyLogo</h1>
      </Link>
      {ctx.isLoggedIn && <Button onClick={props.onLogout}>Logout</Button>}
    </div>
  );
};

export default Header;
