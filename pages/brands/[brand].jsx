import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BRANDS_PAGE } from '../../constants';
import List from '../../components/sub/List';
import Sidebar from '../../components/common/Sidebar';
import Seo from '../../components/common/Seo';
import Loading from '../../components/sub/Loading';
import Link from 'next/link';
import axios from 'axios';

export default function BrandPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const brand = router.query.brand;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;

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
  // <button>버튼</button>
  // <select onChange={handleSelectChange}>
  //   <option value='0'>선택</option>
  //   <option value='1'>낮은가격순</option>
  //   <option value='2'>높은가격순</option>
  //   <option value='3'>이름순</option>
  //   <option value='4'>25불 이상</option>
  // </select>
  //
  // const sortedData = useMemo(() => {
  //   const newArray = [...bestItems];
  //   if (value === '1') {
  //     newArray.sort((a, b) => a.price - b.price);
  //   } else if (value === '2') {
  //     newArray.sort((a, b) => b.price - a.price);
  //   } else if (value === '3') {
  //     let love = newArray.filter((a) => a.price < 20);
  //     return love;
  //   } else if (value === '4') {
  //     newArray.sort((a, b) => b.price - a.price);
  //   }
  //   return newArray;
  // }, [value]);
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // useEffect(() => {
  //   if (value === '0')
  //     setProducts([...products].sort((a, b) => a.price - b.price));
  //   else if (value === '1')
  //     setProducts([...products].sort((a, b) => b.price - a.price));
  //   else if (value === '2')
  //     setProducts([...products].filter((a) => a.price < 20));
  // }, [value]);

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
