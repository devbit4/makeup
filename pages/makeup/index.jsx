import React, { useEffect, useRef, useState } from 'react';
import Seo from '../../components/common/Seo';
import ListTest from '../../components/sub/ListTest';

export default function MakeupPage({ products }) {
  const bestItems = products.slice(0, 9);
  const newItems = products.slice(10, 20);
  const [viewtype, setViewtype] = useState('two');
  const [data, setData] = useState(bestItems);
  const [value, setValue] = useState('0');
  const input = useRef();

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    let data = [];
    bestItems.forEach((item) => {
      if (
        item.name.toUpperCase().indexOf(e.target.value.toUpperCase()) === -1
      ) {
        return;
      }
      data.push(item);
    });
    data && setData(data);
  };

  // 가격순/이름순 정렬

  // useEffect(() => {
  //   if (value === '0') setData(bestItems);
  //   if (value === '1') setData(bestItems.sort((a, b) => a.price - b.price));
  //   else if (value === '2')
  //     setData([...data].sort((a, b) => b.price - a.price));
  //   else if (value === '3')
  //     setData(
  //       [...data].sort((a, b) => {
  //         if (a.name < b.name) return -1;
  //         else return 1;
  //       })
  //     );
  //   else if (value === '4') {
  //     const newArray = [...data].filter((a) => a.price > 25);
  //     setData(newArray);
  //   }
  //   // setData(bestItems.filter((a) => a.price > 25));
  //   // else if (value === '4') setData([...data].filter((a) => a.price > 20));
  // }, [value]);

  // const [value, setValue] = useState('0');

  const sortedData = React.useMemo(() => {
    const newArray = [...bestItems];
    if (value === '1') {
      newArray.sort((a, b) => a.price - b.price);
    } else if (value === '2') {
      newArray.sort((a, b) => b.price - a.price);
    } else if (value === '3') {
      let love = newArray.filter((a) => a.price < 20);
      return love;
    } else if (value === '4') {
      newArray.sort((a, b) => b.price - a.price);
    }

    return newArray;
  }, [value]);

  return (
    <>
      <Seo title='Makeup'></Seo>
      <div className='makeup'>
        <div className='inner'>
          <input onChange={handleInputChange}></input>
          <button>버튼</button>
          <select onChange={handleSelectChange}>
            <option value='0'>선택</option>
            <option value='1'>낮은가격순</option>
            <option value='2'>높은가격순</option>
            <option value='3'>이름순</option>
            <option value='4'>25불 이상</option>
          </select>
          <ul className='list-type-btns'>
            <li className='list-type-btn'>
              <input
                onClick={(e) => {
                  setViewtype('one');
                }}
                type='radio'
                name='gen'
                id='one'
              />
              <label htmlFor='one'></label>
            </li>
            <li className='list-type-btn'>
              <input
                onClick={() => setViewtype('two')}
                name='gen'
                type='radio'
                id='two'
                defaultChecked
              />
              <label htmlFor='two'></label>
            </li>
          </ul>
          <div className='makeup-subtitle'>
            <h2>Best Items</h2>
          </div>
          <ListTest products={data} viewtype={viewtype}></ListTest>
          <div className='makeup-subtitle'>
            <h2>New Items</h2>
          </div>
          <ListTest products={newItems} viewtype={viewtype}></ListTest>
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
        // 반응형
        @media screen and (max-width: 1180px) {
          .inner {
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
