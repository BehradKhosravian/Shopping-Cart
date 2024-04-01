import Card from "../components/Card";
import { ImSearch } from "react-icons/im";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import { useState } from "react";
function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  function searchHandler() {
    console.log("search");
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>Sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;
