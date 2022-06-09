import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../styles/not-found-404.module.scss";
import cx from "classnames";

console.log("not found 404", style);
function NotFound() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((previousCount) => {
        if (previousCount > 1) {
          return previousCount - 1;
        }
        clearInterval(interval);
        return 0;
      });
    }, 500);
  }, []);

  return (
    <div
      className={cx("border-bottom-black", style["section"], {
        "opacity-50": count > 0,
      })}
    >
      <h1>404</h1>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default NotFound;
