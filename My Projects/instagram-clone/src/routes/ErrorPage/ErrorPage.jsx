import styles from "./errorpage.module.scss";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className={styles.errorpage}>
      <h1>Oops!</h1>
    </div>
  );
}

export default ErrorPage;
