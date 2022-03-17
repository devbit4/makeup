import React, { useCallback, useState } from 'react';
import Seo from '../../components/common/Seo';
import ListTwo from '../../components/sub/ListTwo';

export default function MakeupPage({ products }) {
  const bestItems = products.slice(0, 15);
  const [viewType, setViewType] = useState('two');
  const [items, setItems] = useState(bestItems);

  const handleInputChange = useCallback((e) => {
    let searchedItems = [];
    bestItems.forEach((item) => {
      if (
        item.name.toUpperCase().indexOf(e.target.value.toUpperCase()) === -1
      ) {
        return;
      }
      searchedItems.push(item);
    });
    setItems(searchedItems);
  }, []);

  return (
    <>
      <Seo title='Makeup'></Seo>
      <div className='makeup'>
        <div className='inner'>
          <div className='makeup-upper'>
            <input
              type='text'
              placeholder='베스트상품명을 입력하세요'
              onChange={handleInputChange}
              className='makeup-searchbox'
            ></input>
            <ul className='list-type-btns'>
              <li className='list-type-btn'>
                <input
                  onClick={(e) => setViewType('one')}
                  type='radio'
                  name='gen'
                  id='one'
                />
                <label htmlFor='one'>한줄보기</label>
              </li>
              <li className='list-type-btn'>
                <input
                  onClick={() => setViewType('two')}
                  name='gen'
                  type='radio'
                  id='two'
                  defaultChecked
                />
                <label htmlFor='two'>두줄보기</label>
              </li>
            </ul>
          </div>
          <div className='makeup-lower'>
            <h2 className='makeup-title'>Best Items</h2>
            <ListTwo products={items} viewType={viewType}></ListTwo>
          </div>
        </div>
      </div>
      <style jsx>{`
        .makeup {
          width: 100%;
        }
        .inner {
          width: 1180px;
          margin: 0 auto;
        }
        .makeup-upper {
          display: flex;
          justify-content: center;
          padding: 30px;
        }
        .makeup-searchbox {
          width: 200px;
          margin-right: 10px;
          padding: 5px;
          outline: none;
          border: none;
          border-bottom: 1px solid #777;
        }
        .makeup-searchbox:focus {
          background-color: #efefef;
        }
        .list-type-btn {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }
        .list-type-btn label {
          font: 400 12px/1 'roboto';
          margin-left: 10px;
        }
        .makeup-title {
          padding-left: 80px;
          font: 500 24px 'fredoka';
        }
        // 반응형
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .list-type-btns {
            display: none;
          }
          .makeup-searchbox {
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique'
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
