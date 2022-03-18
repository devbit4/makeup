export default function SearchFilter({ onChange }) {
  return (
    <>
      <input
        type='text'
        placeholder='베스트상품명을 입력하세요'
        onChange={onChange}
        className='makeup-searchbox'
      ></input>
      <style jsx>{`
        .makeup-searchbox {
          width: 200px;
          margin-right: 10px;
          padding: 5px;
          outline: none;
          border: none;
          border-bottom: 1px solid #777;
        }
        @media screen and (max-width: 768px) {
          .makeup-searchbox {
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
}
