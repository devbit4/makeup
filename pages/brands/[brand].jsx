import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { BRANDS_PAGE } from '../../constants';
import List from '../../components/sub/List';
import Sidebar from '../../components/common/Sidebar';
import Seo from '../../components/common/Seo';
import Loading from '../../components/sub/Loading';
import Link from 'next/link';
import axios from 'axios';

export default function BrandPage() {
  const router = useRouter();
  const brand = router.query.brand;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;

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

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [router]);

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
            <Sidebar menus={BRANDS_PAGE}></Sidebar>
          </div>
          <div className='main'>
            <h1 className='main-title'>{brand}</h1>
            {products && (
              <div className='list-info'>
                <p className='products-num'>
                  총 {sortedItems.length}개의 상품이 준비되어 있습니다.
                </p>
                <select onChange={handleChange} className='list-select-box'>
                  <option value='0'>선택</option>
                  <option value='1'>가격낮은순</option>
                  <option value='2'>가격높은순</option>
                  <option value='3'>abc순</option>
                  <option value='4'>$12이하</option>
                </select>
              </div>
            )}
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
              font: 500 24px/1 'fredoka';
              margin-bottom: 50px;
              padding-bottom: 10px;
              border-bottom: 1px solid #333;
            }
            .list-info {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
            }
            .list-select-box {
              text-align: center;
            }
            .products-num {
              font: 400 12px/1 'roboto';
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
