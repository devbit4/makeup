import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function SearchBox() {
  const router = useRouter();
  const input = useRef();
  const options = [
    {
      keyword: 'blush',
    },
    {
      keyword: 'bronzer',
    },
    {
      keyword: 'eyeshadow',
    },
    {
      keyword: 'foundation',
    },
    {
      keyword: 'mascara',
    },
    {
      keyword: 'lipstick',
    },
  ];

  const searchInput = () => {
    if (input.current.value === '') {
      return alert('검색어를 입력하세요');
    }
    router.push(`/search/${input.current.value}`);
    input.current.value = '';
  };
  const handleClick = () => {
    searchInput();
  };
  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      searchInput();
    }
  };

  return (
    <>
      <div className='search-box'>
        <div className='search-box-inner'>
          <input
            ref={input}
            type='text'
            className='search-box-input'
            placeholder='화장품을 입력하세요'
            onKeyPress={handleKeyPress}
            list='auto-complete'
          ></input>
          <datalist id='auto-complete'>
            {options.map((option) => (
              <option value={option.keyword} key={option.keyword}></option>
            ))}
          </datalist>
          <button className='search-box-button' onClick={handleClick}>
            <span>Search!</span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .search-box {
            background-color: #f5f2ee;
          }
          .search-box-inner {
            width: 1180px;
            margin: 0 auto;
            display: flex;
            justify-content: end;
            padding: 0 20px 20px 20px;
          }
          .search-box-input {
            width: 250ox;
            outline: none;
            border: none;
            padding: 0 10px;
            background-color: #efefef;
            border-bottom: 1px solid #ccc;
          }
          .search-box-input::placeholder {
            font: 12px/1 'roboto';
          }
          .search-box-input:focus {
            background-color: #fff;
          }
          .search-box-button {
            width: 80px;
            height: 20px;
            margin-left: 10px;
            border: none;
            cursor: pointer;
            background-color: #aaa;
            font: 400 12px/1 'fredoka';
            color: #fff;
            border-radius: 4px;
          }
          .search-box-button:hover {
            background-color: #333;
            color: #fff;
          }
          .search-box-button span::hover {
            color: red;
          }
          @media screen and (max-width: 1180px) {
            .search-box-inner {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
