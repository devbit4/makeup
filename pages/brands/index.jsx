import { useEffect, useMemo, useRef, useState } from 'react';
import { BRANDS_PAGE } from '../../constants';
import List from '../../components/sub/List';
import Sidebar from '../../components/common/Sidebar';
import Seo from '../../components/common/Seo';
import Loading from '../../components/sub/Loading';
import Link from 'next/link';
import axios from 'axios';

export default function BrandsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const url =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSelectedIndex(e.target.value);
  };

  const sortedItems = useMemo(() => {
    const newArray = [...products];
    if (selectedIndex === '1')
      return newArray.sort((a, b) => a.price - b.price);
    else if (selectedIndex === '2')
      return newArray.sort((a, b) => b.price - a.price);
    else if (selectedIndex === '3')
      return newArray.sort((a, b) => {
        if (a.name < b.name === true) {
          return -1;
        } else {
          return 1;
        }
      });
    else if (selectedIndex === '4')
      return newArray.filter((a, b) => a.price < 14);
    return newArray;
  });

  return (
    <>
      <Seo title='Brands'></Seo>
      <div className='brands'>
        <div className='inner'>
          <div className='sidebar'>
            <Link href={'/brands'}>
              <a>
                <h1 className='sidebar-title'>Brands</h1>
              </a>
            </Link>
            <Sidebar menus={BRANDS_PAGE} title={'brands'}></Sidebar>
          </div>
          <div className='main'>
            <h1 className='main-title'>all brands items</h1>
            <select onChange={handleChange}>
              <option value='0'>선택</option>
              <option value='1'>가격낮은순</option>
              <option value='2'>가격높은순</option>
              <option value='3'>abc순</option>
              <option value='4'>3만원 이하</option>
            </select>
            {loading ? (
              <Loading></Loading>
            ) : (
              <List products={sortedItems}></List>
            )}
          </div>
        </div>
        <style jsx>
          {`
            .inner {
              width: 1180px;
              margin: 0 auto;
              display: flex;
            }
            .sidebar {
              width: 20%;
              background-color: #999;
              padding: 40px 20px;
            }
            .sidebar-title {
              color: #fff;
              font: 500 24px 'fredoka';
            }
            .main {
              width: 80%;
              min-height: 1000px;
              padding: 40px;
            }
            .main-title {
              font: 500 24px 'fredoka';
              margin-bottom: 50px;
              padding-bottom: 10px;
              border-bottom: 1px solid #333;
            }
            // <tablet 구간>
            @media screen and (max-width: 1180px) {
              .inner {
                width: 100%;
              }
            }
            @media screen and (max-width: 768px) {
              .inner {
                flex-direction: column;
              }
              .sidebar {
                width: 100%;
                padding: 20px;
              }
              .main {
                width: 100%;
                border-left: 1px solid #999;
                border-right: 1px solid #999;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
