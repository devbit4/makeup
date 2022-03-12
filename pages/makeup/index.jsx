import { useEffect, useRef, useState } from "react";
import Seo from "../../components/common/Seo";
import ListTest from "../../components/sub/ListTest";

export default function Makeup({ products }) {
  const bestItems = products.slice(0, 9);
  const newItems = products.slice(10, 20);
  const [viewtype, setViewtype] = useState("two");
  const [data, setData] = useState([...bestItems]);
  const select = useRef();

  const [value, setValue] = useState("0");

  // const sortedData = React.useMemo(() => {
  //   const newArray = [...bestItems];

  //   if (value === '1') {
  //     newArrray...sort
  //   } else if (value === '2') {
  //     newArrray...sort
  //   }

  //   return newArray;
  // }, [data, value])

  const normalPrice = () => {
    const newArray = [...bestItems];
    setData(newArray);
  };
  const lowerPrice = () => {
    const newArray = [...bestItems];
    const setArray = newArray.sort((a, b) => a.price - b.price);
    setData(setArray);
  };
  const upperPrice = () => {
    const newArray = [...bestItems];
    const setArray = newArray.sort((a, b) => b.price - a.price);
    setData(setArray);
  };

  return (
    <>
      <Seo title='Makeup'></Seo>
      <div className='makeup'>
        <div className='inner'>
          <select ref={select}>
            <option value='0'>선택</option>
            <option value='1'>낮은가격순</option>
            <option value='2'>높은가격순</option>
          </select>
          <ul className='list-type-btns'>
            <li className='list-type-btn'>
              <input
                onClick={(e) => {
                  setViewtype("one");
                }}
                type='radio'
                name='gen'
                id='one'
              />
              <label htmlFor='one'></label>
            </li>
            <li className='list-type-btn'>
              <input
                onClick={() => setViewtype("two")}
                name='gen'
                type='radio'
                id='two'
                defaultChecked
              />
              <label htmlFor='two'></label>
            </li>
          </ul>
          <div className='makeup-subtitle'>
            <h2>Best Items</h2>
          </div>
          <ListTest products={data} viewtype={viewtype}></ListTest>
          <div className='makeup-subtitle'>
            <h2>New Items</h2>
          </div>
          <ListTest products={newItems} viewtype={viewtype}></ListTest>
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
