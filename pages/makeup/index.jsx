import { useState } from "react";
import Seo from "../../components/common/Seo";
import ListTest from "../../components/sub/ListTest";

export default function Makeup({ products }) {
  const bestItems = products.slice(0, 9);
  const newItems = products.slice(10, 20);
  const [viewtype, setViewtype] = useState("two");

  return (
    <>
      <Seo title="Makeup"></Seo>
      <div className="makeup">
        <div className="inner">
          <ul className="list-type-btns">
            <li className="list-type-btn">
              <input
                onClick={(e) => {
                  setViewtype("one");
                }}
                type="radio"
                name="gen"
                id="one"
                defaultChecked
              />
              <label htmlFor="one"></label>
            </li>
            <li className="list-type-btn">
              <input
                onClick={() => setViewtype("two")}
                name="gen"
                type="radio"
                id="two"
              />
              <label htmlFor="two"></label>
            </li>
          </ul>
          <div className="makeup-subtitle">
            <h2>Best Items</h2>
          </div>
          <ListTest products={bestItems} viewtype={viewtype}></ListTest>
          <div className="makeup-subtitle">
            <h2>New Items</h2>
          </div>
          <ListTest products={bestItems} viewtype={viewtype}></ListTest>
        </div>
      </div>
      <style jsx>{`
        .makeup {
          width: 100%;
        }
        .inner {
          width: 1180px;
          margin: 0 auto;
        }
        // 반응형
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique"
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
