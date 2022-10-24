import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import styles from "./Login.module.scss";

const Login = (props) => {
  return (
    <div className={styles.login}>
      <Card>
        <div className={styles.content}>
          <h2>Welcome, Please log in</h2>
          <div className={styles.container}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              className={styles.input}
              name="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className={styles.container}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              name="password"
              type="text"
              placeholder="Enter your password"
            />
          </div>
          <Button onClick={props.onLogin}>Login</Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
