export default function ItemDetail({ item, dispatch, router, text1, text2 }) {
  const handleImgError = (e) => {
    e.target.src = '/img/main1.jpg';
  };

  return (
    <>
      <div className='detail-item'>
        <div className='detail-pic'>
          <img
            src={item.image_link}
            className='detail-img'
            onError={handleImgError}
          ></img>
        </div>
        <div className='detail-text'>
          <strong className='detail-name'>{item.name}</strong>
          <span className='detail-sub'>
            {item.category || 'all'} / {item.product_type}
          </span>
          <strong className='detail-price'>${item.price}</strong>
          <div className='detail-btns'>
            <button
              className='detail-btn'
              onClick={() => {
                dispatch({
                  type: 'add',
                  payload: { id: item.id, name: item.name, quan: 1 },
                });
                router.push('/my');
              }}
            >
              {text1 || '장바구니'}
            </button>
            <button className='detail-btn'>{text2 || '구매하기'}</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .detail-item {
          width: 100%;
          padding: 40px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #333;
          margin-bottom: 40px;
        }
        .detail-pic {
          width: 200px;
          height: 200px;
          padding-right: 20px;
        }
        .detail-img {
          width: 100%;
          height: 100%;
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
        .detail-btn {
          width: 200px;
          display: inline-block;
          border: none;
          border-radius: 4px;
          padding: 10px;
          margin-right: 10px;
          margin-top: 10px;
          cursor: pointer;
          font: 400 16px/1 'roboto';
        }
        .detail-btn:hover {
          background: #333;
          color: #fff;
        }
      `}</style>
    </>
  );
}
