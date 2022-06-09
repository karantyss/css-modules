import { Link } from "react-router-dom";
import style from "../styles/not-found-404.module.scss";

console.log("not found 404", style);
function NotFound() {
  return (
    <div className={style["section"]}>
      <h1>404</h1>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default NotFound;
