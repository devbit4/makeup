import { useRouter } from 'next/router';
import { useState } from 'react';
import List from '../../components/sub/List';

export default function Search({ products }) {
  const router = useRouter();
  console.log(products);
  if (products.length === 0) return <h1>조회된 결과가 없습니다</h1>;
  return (
    <>
      <div className='searched-content'>
        <div className='inner'>
          <List products={products}></List>
        </div>
      </div>
      <style jsx>{`
        .inner {
          width: 1180px;
          margin: 20px auto;
        }
        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const { input } = context.query;
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${input}`
  );
  const products = await res.json();

  return { props: { products } };
}
// 전체검색기능 구현??
