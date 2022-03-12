import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function ListTest({ products, viewtype }) {
  const router = useRouter();

  const handleItemClick = (id) => {
    router.push(`/view/${id}`);
  };

  return (
    <>
      <ul className={clsx('items', viewtype === 'one' && 'one')}>
        {products &&
          products.map((product) => {
            return (
              <li
                className='item'
                key={product.id}
                onClick={() => handleItemClick(product.id)}
              >
                <div className='item-pic'>
                  <img src={product.image_link} alt='item-img'></img>
                </div>
                <div className='item-text'>
                  <strong className='item-name'>
                    {product.name.slice(0, 50)}
                  </strong>
                  <span className='item-type'>{product.product_type}</span>
                  <strong className='item-price'>${product.price}</strong>
                  <p className='item-description'>
                    {product.description.slice(0, 100)}...
                  </p>
                  <button className='item-btn'>상품 더 보기</button>
                </div>
              </li>
            );
          })}
        <style jsx>{`
          .items {
            padding: 40px 80px;
            display: flex;
            flex-wrap: wrap;
          }
          .item {
            width: 50%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            border: 1px solid #ddd;
          }
          .items.one .item {
            width: 100%;
          }
          .item-pic {
            width: 300px;
            height: 200px;
          }
          .item-pic img {
            width: 100%;
            height: 100%;
          }
          .item-text {
            padding: 10px;
          }
          .item-name {
            display: block;
            font: 700 14px/1 'roboto';
            margin-bottom: 20px;
          }
          .item-type {
            display: block;
            font: 400 12px/1 'questrial';
            margin-bottom: 10px;
          }
          .item-price {
            font: 400 24px/1 'questrial';
            margin-bottom: 10px;
          }
          .item-description {
            font: 400 12px/1 'questrial';
            margin-bottom: 10px;
          }
        `}</style>
      </ul>
    </>
  );
}
