import { Link } from "react-router-dom";
import style from "../styles/home.module.scss";

console.log("home", style);
function Home() {
  return (
    <div className={style["section"]}>
      <h1>Home Page</h1>
      <Link to="/details">Go to Details</Link>
    </div>
  );
}

export default Home;
