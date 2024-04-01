import styles from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeColor="#fe5d42"
        strokeWidth="3"
      />
    </div>
  );
}

export default Loader;
