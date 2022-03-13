import { useRouter } from 'next/router';

export default function List({ products }) {
  const router = useRouter();

  const handleItemClick = (id) => {
    router.push(`/detail/${id}`);
  };
  const handlError = (e) => {
    e.target.src = '/img/main1.jpg';
    e.target.onerror = null;
  };

  return (
    <>
      <ul className='list'>
        {products &&
          products.slice(0, 10).map((product) => {
            return (
              <li
                className='item'
                key={product.id}
                onClick={() => handleItemClick(product.id)}
              >
                <img
                  src={product.image_link}
                  className='item-img'
                  onError={handlError}
                ></img>
                <strong className='item-name'>{product.name}</strong>
                <span className='item-type'>
                  {product.product_type} / {product.category || 'all'}
                </span>
                <strong className='item-price'>${product.price}</strong>
              </li>
            );
          })}
      </ul>
      <style jsx>{`
        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        .item {
          width: 33%;
          height: 300px;
          display: flex;
          flex-direction: column;
          border: 1px solid #ddd;
          padding: 20px;
          text-align: center;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
        }
        .item:hover {
          background-color: #333;
          transform: scale(1.05);
        }
        .item:hover .item-name,
        .item-type {
          color: #fff;
        }
        .item-img {
          width: 150px;
          height: 150px;
          margin: 0 auto;
        }
        .item-name {
          margin: 10px 0;
          font: 700 12px/1 'roboto';
        }
        .item-type {
          margin: 10px 0;
          font: 400 12px/1 'roboto';
        }
        .item-price {
          font: 700 16px/1 'roboto';
          color: red;
        }
        // 반응형 구간
        @media screen and (max-width: 1000px) {
          .item {
            width: 50%;
          }
        }
        @media screen and (max-width: 768px) {
          .item {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
