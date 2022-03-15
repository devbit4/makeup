import { useEffect, useState } from 'react';
import { BRANDS_PAGE } from '../../constatns';
import Breadcrumbs from '../../components/sub/Breadcrumbs';
import List from '../../components/sub/List';
import Sidebar from '../../components/common/Sidebar';
import Seo from '../../components/common/Seo';
import Loading from '../../components/sub/Loading';
import Link from 'next/link';

export default function BrandsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const getData = () => {
    setLoading(true);
    setProducts();
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
            <h1 className='main-title'>All Brands Items</h1>
            <Breadcrumbs></Breadcrumbs>
            {loading ? <Loading></Loading> : <List products={products}></List>}
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
