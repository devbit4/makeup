export default function ViewType({ setViewType }) {
  return (
    <>
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
      <style jsx>{`
        .list-type-btn {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }
        .list-type-btn label {
          font: 400 12px/1 'roboto';
          margin-left: 10px;
          cursor: pointer;
        }
        // 반응형
        @media screen and (max-width: 768px) {
          .list-type-btns {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
