import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function ListTwo({ products, viewtype }) {
  const router = useRouter();

  const handleItemClick = (id) => {
    router.push(`/view/${id}`);
  };

  return (
    <>
      <ul className={clsx('list', viewtype === 'one' && 'one')}>
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
                    {product.name.substr(0, 50)}
                  </strong>
                  <span className='item-type'>{product.product_type}</span>
                  <strong className='item-price'>${product.price}</strong>
                  <p className='item-description'>
                    {product.description.substr(0, 100)}...
                  </p>
                  <button className='item-btn'>상품 더 보기</button>
                </div>
              </li>
            );
          })}
        <style jsx>{`
          .list {
            padding: 40px 80px;
            display: flex;
            flex-wrap: wrap;
            justify-content:space-between;
          }
          .item {
            width: 49%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            transition:all 0.3s;
            cursor:pointer;
          }
          .item:hover{
            background-color:#efefef;
            transform:scale(1.05);
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
          .item-btn{
            padding:5px;
            background-color:#ccc;
            border:none;
            border-radius:4px;
            cursor:pointer;
          }
          // 반응형구간 
          @media screen and (max-width:768px){
            .item {
              width: 100%;
             
            }
          }
          }
        `}</style>
      </ul>
    </>
  );
}
