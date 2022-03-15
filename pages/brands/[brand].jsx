import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BRANDS_PAGE } from '../../constatns';
import Breadcrumbs from '../../components/sub/Breadcrumbs';
import List from '../../components/sub/List';
import Sidebar from '../../components/common/Sidebar';
import Seo from '../../components/common/Seo';
import Loading from '../../components/sub/Loading';
import Link from 'next/link';

export default function BrandPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const brand = router.query.brand;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
  console.log(router);

  // const handleChange = React.useCallback((e) => {
  //   setInput(e.target.value);
  // }, []);

  // const filteredList = React.useMemo(() => {
  //   if (!isFilter) {
  //     return products;
  //   }

  //   return products.filter((item) => item.price < 20);
  // }, [products, isFilter]);

  // const sortedList = React.useMemo(() => {
  //   if (sortType === '') {
  //     return filteredList;
  //   }

  //   if (sortType === 'asc') {
  //     return [...filteredList].sort((a, b) => a.price - b.price);
  //   } else {
  //     return [...filteredList].sort((b, a) => a.price - b.price);
  //   }
  // }, [filteredList, sortType]);

  // const [value, setValue] = useState();
  // const handleClick = () => {
  //   setProducts([...products].sort((a, b) => a.price - b.price));
  // };
  // const handleClick2 = () => {
  //   setProducts([...products].sort((a, b) => b.price - a.price));
  // };
  //
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // useEffect(() => {
  //   if (value === '0')
  //     setProducts([...products].sort((a, b) => a.price - b.price));
  //   else if (value === '1')
  //     setProducts([...products].sort((a, b) => b.price - a.price));
  //   else if (value === '2')
  //     setProducts([...products].filter((a) => a.price < 20));
  // }, [value]);

  const getData = () => {
    setLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        setProducts(json);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (brand) {
      getData();
    }
  }, [brand]);

  return (
    <>
      <Seo title='Brands'></Seo>
      <select onChange={handleChange}>
        <option value='0'>0</option>
        <option value='1'>일번</option>
        <option value='2'>일번</option>
      </select>
      {/* <button onClick={handleClick}>버튼</button>
      <button onClick={handleClick2}>버튼</button> */}

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
            <Breadcrumbs></Breadcrumbs>
            {products && (
              <p className='products-num'>
                총 {products.length}개의 상품이 준비되어 있습니다.
              </p>
            )}
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
              font: 500 24px/1 'fredoka';
              margin-bottom: 50px;
              padding-bottom: 10px;
              border-bottom: 1px solid #333;
            }
            .products-num {
              font: 400 16px/1 'roboto';
              margin-bottom: 20px;
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
