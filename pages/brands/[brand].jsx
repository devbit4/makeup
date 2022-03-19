import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { BRANDS_PAGE } from '../../constants';
import Link from 'next/link';
import Sidebar from '../../components/layout/Sidebar';
import Seo from '../../components/common/Seo';
import Loading from '../../components/common/Loading';
import ListSelector from '../../components/common/ListSelector';
import List from '../../components/common/List';
import axios from 'axios';

export default function BrandPage() {
  const router = useRouter();
  const brand = router.query.brand;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
  const options = [
    {
      name: '선택',
    },
    {
      name: '가격낮은순',
    },
    {
      name: '가격높은순',
    },
    {
      name: 'abc순',
    },
  ];

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
      default:
        return itemArray;
    }
  });

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (mounted) {
          setLoading(false);
          setProducts(res.data);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, [router]);

  return (
    <>
      <Seo title='Brands'></Seo>
      <div className='brands-inner'>
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
              <ListSelector
                onChange={handleChange}
                options={options}
              ></ListSelector>
            </div>
          )}
          {loading ? <Loading></Loading> : <List products={sortedItems}></List>}
        </div>
        <style jsx>
          {`
            .brands-inner {
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
            .products-num {
              font: 400 12px/1 'roboto';
            }
            // <tablet 구간>
            @media screen and (max-width: 1180px) {
              .brands-inner {
                width: 100%;
              }
            }
            @media screen and (max-width: 768px) {
              .brands-inner {
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
