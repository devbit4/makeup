import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";

export default function Brands() {
  const brands = ["clinique", "benefit", "misa", "stila"];
  const [products, setProducts] = useState();

  const url =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrapper">
      <div className="sidebar">
        <h1 className="sidebar-title">All brands</h1>
        <Sidebar menus={brands} title={"brands"}></Sidebar>
      </div>
      <div className="main">
        <h1>All Brands Items</h1>
        <Breadcrumbs></Breadcrumbs>
        <List products={products}></List>
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            padding: 0 10vw;
          }
          .sidebar {
            width: 20%;
            background-color: #999;
            padding: 40px 20px;
          }
          .sidebar-title {
            color: #fff;
            font: 500 24px "fredoka";
          }
          .main {
            width: 80%;
            padding: 40px;
          }
          .main-title {
            font: 500 24px "fredoka";
            margin-bottom: 50px;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
          }
        `}
      </style>
    </div>
  );
}
