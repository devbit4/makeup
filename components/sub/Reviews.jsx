import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/dbs/reviews.json')
      .then((data) => data.json())
      .then((json) => setReviews(json.data));
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {[reviews.slice(0, 4), reviews.slice(4, 8)].map((slide) => {
          return (
            <SwiperSlide>
              <div className='reviews'>
                {slide.map((review) => {
                  return (
                    <div className='review'>
                      <p>{review.review}</p>
                      <div className='review-writer'>
                        <div className='review-writer-pic'>
                          <img src={review.src} alt='person' />
                        </div>
                        <div className='review-writer-name'>
                          <strong>{review.writer}</strong>
                          <span>{review.job}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <style jsx>{`
        .reviews {
          display: flex;
          justify-content: space-between;
        }
        .review {
          width: 24%;
          padding: 60px 30px;
          background: #f5f5f5;
          border-radius: 10px;
          text-align: center;
        }
        .review p {
          font: 300 14px/1.2 'Roboto';
          margin-bottom: 40px;
        }
        .review-writer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .review-writer-pic {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          overflow: hidden;
          background-color: #000;
          margin-right: 10px;
        }
        .review-writer-pic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .review-writer-name {
          width: 50%;
          display: flex;
          flex-direction: column;
        }
        .review-writer-name strong {
          font: 14px/1 'Roboto';
          margin-bottom: 5px;
        }
        .review-writer-name span {
          font: 300 12px/1 'Roboto';
        }
        // 반응형 구간
        @media screen and (max-width: 768px) {
          .reviews {
            flex-wrap: wrap;
            jusify-content: space-around;
          }
          .review {
            width: 48%;
            margin-bottom: 20px;
          }
        }
        @media screen and (max-width: 500px) {
          .review {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
