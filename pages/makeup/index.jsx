import { debounce } from 'lodash';
import React, { useCallback, useState, useMemo } from 'react';
import Seo from '../../components/common/Seo';
import SearchFilter from '../../components/sub/makeup/SearchFilter';
import ViewType from '../../components/sub/makeup/ViewType';
import ViewTypeList from '../../components/sub/makeup/ViewTypeList';

export default function MakeupPage({ products }) {
  const bestItems = products.slice(0, 15);
  const [viewType, setViewType] = useState('two');
  const [items, setItems] = useState(bestItems);

  const debouncedSearch = useMemo(
    () =>
      debounce((val) => {
        let searchedItems = [];
        bestItems.forEach((item) => {
          if (item.name.toUpperCase().indexOf(val.toUpperCase()) === -1) {
            return;
          }
          searchedItems.push(item);
        });
        setItems(searchedItems);
      }, 300),
    []
  );

  const handleInputChange = useCallback(
    (e) => {
      debouncedSearch(e.target.value);
      console.log('heelo');
    },
    [debouncedSearch]
  );

  return (
    <>
      <Seo title='Makeup'></Seo>
      <div className='makeup-inner'>
        <div className='makeup-upper'>
          <SearchFilter onChange={handleInputChange}></SearchFilter>
          <ViewType setViewType={setViewType}></ViewType>
        </div>
        <div className='makeup-lower'>
          <h2 className='makeup-title'>Best Items</h2>
          <ViewTypeList products={items} viewType={viewType}></ViewTypeList>
        </div>
      </div>
      <style jsx>{`
        .makeup-inner {
          width: 1180px;
          margin: 0 auto;
        }
        .makeup-upper {
          display: flex;
          justify-content: center;
          padding: 30px;
        }
        .makeup-searchbox:focus {
          background-color: #efefef;
        }
        .makeup-title {
          padding-left: 80px;
          font: 500 24px 'fredoka';
        }
        // 반응형
        @media screen and (max-width: 1180px) {
          .makeup-inner {
            width: 100%;
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
