import { useEffect, useMemo, useRef, useState } from 'react';
import { BRANDS_PAGE } from '../../constants';
import List from '../../components/common/List';
import Sidebar from '../../layout/components/Sidebar';
import Seo from '../../components/common/Seo';
import Loading from '../../components/common/Loading';
import Link from 'next/link';
import axios from 'axios';
import ListSelector from '../../components/sub/brands/ListSelector';

export default function BrandsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json';
  const url2 =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  // url 전체 데이터 대신 url2로 대체, 실전에서는 url로
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get(url2)
      .then((res) => {
        if (mounted) {
          setLoading(false);
          setProducts(res.data);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, []);

  const handleChange = (e) => {
    setSelectedIndex(e.target.value);
  };

  const sortedItems = useMemo(() => {
    const itemArray = [...products];
    switch (selectedIndex) {
      case '1':
        return itemArray.sort((a, b) => a.price - b.price);
      case '2':
        return itemArray.sort((a, b) => b.price - a.price);
      case '3':
        return itemArray.sort((a, b) => {
          if (a.name < b.name === true) {
            return -1;
          } else {
            return 1;
          }
        });
      // case '4':
      //   return newArray.filter((a, b) => a.price < 14);
      // 연습삼아 필터링
      default:
        return itemArray;
    }
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
            <div className='list-info'>
              <p>임시로 10개 데이터만 화면에 slice함*</p>
              <ListSelector onChange={handleChange}></ListSelector>
            </div>
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
            .main p {
              font: 12px/1 'roboto';
              color: red;
            }
            .list-info {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 10px;
            }
            .list-select-box {
              text-align: center;
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
