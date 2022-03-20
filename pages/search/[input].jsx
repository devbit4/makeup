import Seo from '../../components/common/Seo';
import List from '../../components/common/List';
import Loading from '../../components/common/Loading';

export default function SearchPage({ products }) {
  if (products.length === 0)
    return (
      <>
        <div className='search-inner'>
          <h1 className='searched-info'>조회된 결과가 없습니다</h1>
        </div>
        <style jsx>{`
          .search-inner {
            width: 1180px;
            min-height: 300px;
            margin: 20px auto;
          }
          .searched-info {
            font: 400 16px/1 'roboto';
            padding-left: 20px;
          }

          // 반응형 구간
          @media screen and (max-width: 1180px) {
            .search-inner {
              width: 100%;
            }
          }
        `}</style>
      </>
    );

  return (
    <>
      <Seo title='Search' />
      <div className='search-inner'>
        {products ? <List products={products}></List> : <Loading></Loading>}
      </div>
      <style jsx global>{`
        .search-inner {
          width: 1180px;
          min-height: 500px;
          margin: 20px auto;
        }
        .searched-info {
          font: 12px/1 'roboto';
        }

        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .search-inner {
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
// 전체검색기능 구현?? // 연습을 위해 서버사이드렌더링 이용 일반적으로 csr 로딩처리
