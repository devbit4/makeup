import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
  const router = useRouter();
  const id = router.query.id;
  const [item, setItem] = useState();
  const url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`;

  const getData = () => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => setItem(json));
  };

  useEffect(() => {
    id && getData();
  }, [id]);
  return (
    <>
      {item && (
        <div className="detail">
          <div className="inner">
            <div className="detail-pic">
              <img src={item.image_link} className="detail-img"></img>
            </div>
            <div className="detail-text">
              <strong className="detail-name">{item.name}</strong>
              <span className="detail-sub">
                {item.category || "all"} / {item.product_type}
              </span>
              <strong className="detail-price">${item.price}</strong>
              <div className="btns">
                <button className="put-button btn">장바구니</button>
                <button className="buy-button btn">구매하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .detail {
          width: 100%;
        }
        .inner {
          width: 1180px;
          margin: 0 auto;
          padding: 40px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #333;
          margin-bottom: 40px;
        }
        .detail-pic {
          width: 200px;
        }
        .detail-img {
          width: 100%;
        }
        .detail-text {
          display: flex;
          flex-direction: column;
        }
        .detail-name {
          margin-bottom: 40px;
          font: 700 16px/1 "roboto";
        }
        .detail-sub {
          margin-bottom: 20px;
          font: 400 16px/1 "roboto";
        }
        .detail-price {
          margin-bottom: 40px;
          font: 400 24px/1 "roboto";
          color: red;
        }
        .btn {
          width: 200px;
          display: inline-block;
          border: none;
          border-radius: 4px;
          padding: 10px;
          margin-right: 10px;
          cursor: pointer;
        }
        .btn:hover {
          background: #333;
          color: #fff;
        }
        // 빈응형
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .btn {
            width: 80px;
          }
        }
      `}</style>
    </>
  );
}