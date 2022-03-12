import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/sub/Breadcrumbs';
import List from '../../components/sub/List';
import Sidebar from '../../components/common/Sidebar';
import Seo from '../../components/common/Seo';

export default function Brands() {
  const router = useRouter();
  const brands = ['clinique', 'benefit', 'misa', 'stila'];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const brand = router.query.brand;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;

  const getData = () => {
    setProducts();
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  };
  useEffect(() => {
    if (brand) {
      setLoading(true);
      getData();
    }
  }, [brand]);

  return (
    <>
      <Seo title='Brands'></Seo>
      <div className='brands'>
        <div className='inner'>
          <div className='sidebar'>
            <Link href={'/brands'}>
              <a>
                <h1 className='sidebar-title'>All brands</h1>
              </a>
            </Link>
            <Sidebar menus={brands} title={'brands'}></Sidebar>
          </div>
          <div className='main'>
            <h1 className='main-title'>All Brands Items</h1>
            <Breadcrumbs></Breadcrumbs>
            {loading ? 'loading' : <List products={products}></List>}
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
