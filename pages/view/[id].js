import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../../components/sub/Loading';
import clsx from 'clsx';
import TabContent from '../../components/sub/TabContent';

export default function Detail({ item }) {
  const router = useRouter();
  const [tab, setTab] = useState('0');
  const [alarm, setAlarm] = useState(true);

  if (router.isFallback) {
    return <Loading></Loading>;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlarm(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {item && (
        <div className='detail'>
          <div className='inner'>
            {alarm && (
              <span className='detail-alarm'>
                구매 수량이 얼마 남지 않았습니다.
              </span>
            )}
            <div className='detail-upper'>
              <div className='detail-pic'>
                <img src={item.image_link} className='detail-img'></img>
              </div>
              <div className='detail-text'>
                <strong className='detail-name'>{item.name}</strong>
                <span className='detail-sub'>
                  {item.category || 'all'} / {item.product_type}
                </span>
                <strong className='detail-price'>${item.price}</strong>
                <div className='btns'>
                  <button className='put-button btn'>장바구니</button>
                  <button className='buy-button btn'>구매하기</button>
                </div>
              </div>
            </div>
            <div className='detail-lower'>
              <ul className='detail-tab-btns'>
                <li
                  className={clsx('detail-tab-btn', tab === '0' && 'active')}
                  onClick={() => {
                    setTab('0');
                  }}
                >
                  <span>상세페이지</span>
                </li>
                <li
                  className={clsx('detail-tab-btn', tab === '1' && 'active')}
                  onClick={() => setTab('1')}
                >
                  <span>주문 및 배송</span>
                </li>
              </ul>
              <TabContent tab={tab} description={item.description}></TabContent>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .detail {
          width: 100%;
        }
        .inner {
          width: 1180px;
          margin: 0 auto;
        }
        .detail-alarm {
          display: block;
          background-color: yellow;
          padding: 20px;
          margin: 10px 0;
          border-radius: 10px;
          font: 16px/1 'roboto';
        }
        .detail-upper {
          width: 100%;
          padding: 40px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #333;
          margin-bottom: 40px;
        }
        .detail-pic {
          width: 200px;
          padding-right: 20px;
        }
        .detail-img {
          width: 100%;
        }
        .detail-text {
          display: flex;
          flex-direction: column;
        }
        .detail-name {
          margin-bottom: 40px;
          font: 700 16px/1 'roboto';
        }
        .detail-sub {
          margin-bottom: 20px;
          font: 400 16px/1 'roboto';
        }
        .detail-price {
          margin-bottom: 40px;
          font: 400 24px/1 'roboto';
          color: red;
        }
        .btn {
          width: 200px;
          display: inline-block;
          border: none;
          border-radius: 4px;
          padding: 10px;
          margin-right: 10px;
          cursor: pointer;
          font: 400 16px/1 'roboto';
        }
        .btn:hover {
          background: #333;
          color: #fff;
        }
        .detail-tab-btns {
          display: flex;
          border-bottom: 1px solid #333;
        }
        .detail-tab-btn {
          background-color: #efefef;
          padding: 10px 20px;
          margin-right: 10px;
          cursor: pointer;
        }
        .detail-tab-btn.active {
          background-color: #ccc;
        }
        .detail-tab-btn span {
          font: 400 12px/1 'roboto';
        }
        // 빈응형
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .btn {
            width: 80px;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique'
  );
  const data = await res.json();
  return {
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),

    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`
  );
  const item = await res.json();
  return {
    props: {
      item,
    },
  };
}
