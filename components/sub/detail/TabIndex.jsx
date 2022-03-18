import clsx from 'clsx';

export default function TabIndex({ tabIndex, setTabIndex }) {
  return (
    <>
      <ul className='detail-tab-btns'>
        <li
          className={clsx('detail-tab-btn', tabIndex === 0 && 'active')}
          onClick={() => setTabIndex(0)}
        >
          <span>상세페이지</span>
        </li>
        <li
          className={clsx('detail-tab-btn', tabIndex === 1 && 'active')}
          onClick={() => setTabIndex(1)}
        >
          <span>주문 및 배송</span>
        </li>
      </ul>
      <style jsx>{`
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
      `}</style>
    </>
  );
}
