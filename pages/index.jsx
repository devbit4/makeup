import Seo from '../components/common/Seo';
import Reviews from '../components/sub/Reviews';
import { HOMEPICS } from '../constants';

export default function HomePage({ reviews }) {
  return (
    <>
      <Seo title='Home' />
      <div className='home'>
        <section className='home-visual'>
          <div className='inner'>
            <p className='home-visual-text1'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              veritatis ea corrupti voluptatibus ad ut vitae suscipit assumenda?
              Quaerat, incidunt.
            </p>
            <p className='home-visual-text2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate natus pariatur aperiam!<br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate natus pariatur aperiam!
            </p>
          </div>
        </section>
        <section className='home-info'>
          <div className='inner'>
            <div className='home-info-intro'>
              <span className='home-info-intro-title'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
              <p className='home-info-intro-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                laboriosam harum beatae cum explicabo quia saepe quae officia,
                sed veniam, voluptate sit tempore! Doloremque, odio.
              </p>
            </div>
            <div className='home-info-pics'>
              {HOMEPICS.map((pic, index) => {
                return (
                  <article className='home-info-pic' key={index}>
                    <div className='img-wrapper'>
                      <img
                        src={pic.src}
                        alt='home-info-pic1'
                        className='home-info-pic-img'
                      ></img>
                    </div>
                    <div className='home-info-textbox'>
                      <strong>00{index + 1}</strong>
                      <span>{pic.name}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className='home-news'>
          <div className='inner'>
            <h2 className='home-news-title'>THE LATEST</h2>
            <span className='home-news-subtitle'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, unde?
            </span>
            <p className='home-news-article'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              porro error tempora a, ea ab aliquid blanditiis veniam quam
              earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique porro error tempora a, ea ab aliquid blanditiis veniam
              quam earum.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Similique porro error tempora a, ea ab aliquid blanditiis
              veniam quam earum.
            </p>
            <p className='home-news-article'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              porro error tempora a, ea ab aliquid blanditiis veniam quam
              earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique porro error tempora a, ea ab aliquid blanditiis veniam
              quam earum.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Similique porro error tempora a, ea ab aliquid blanditiis
              veniam quam earum.
            </p>
            <span className='home-more-btn'>READ MORE</span>
          </div>
        </section>
        <section className='home-reviews'>
          <div className='inner'>
            <div className='home-reviews-box'>
              <h2 className='home-reviews-title'>Reviews</h2>
              <Reviews reviews={reviews.data}></Reviews>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .home {
          width: 100%;
        }
        .home-visual {
          width: 100%;
          height: 600px;
          background-image: url('/img/main1.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          opacity: 0.9;
        }
        .inner {
          width: 1180px;
          height: 100%;
          margin: 0 auto;
          position: relative;
        }
        .home-visual-text1 {
          width: 30%;
          position: absolute;
          top: 20%;
          left: 10%;
          border-top: 2px solid #fff;
          padding-top: 5px;
          color: #fff;
          font: 400 16px 'questrial';
        }
        .home-visual-text2 {
          width: 30%;
          position: absolute;
          top: 60%;
          right: 10%;
          border-top: 2px solid #fff;
          padding-top: 5px;
          color: #fff;
          font: 400 16px 'questrial';
        }
        .home-info {
          width: 100%;
          background-color: #e5e0e0;
          padding: 100px 0;
        }
        .home-info-intro {
          width: 90%;
          display: flex;
          margin: 0 auto;
          padding-bottom: 50px;
          margin-bottom: 100px;
          border-bottom: 1px solid #333;
        }
        .home-info-intro-title {
          margin: 0 30px;
          font: 400 16px/1.4 'fredoka';
          color: #b46927;
        }
        .home-info-intro-description {
          font: 400 16px/1.2 'questrial';
        }
        .home-info-pics {
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
        .home-info-pic {
          width: 30%;
        }
        .img-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .home-info-pic-img {
          width: 100%;
          height: 100%;
          transition: all 0.5s;
          object-fit: cover;
        }
        .home-info-pic-img:hover {
          transform: scale(1.2);
        }
        .home-info-textbox {
          margin-top: 10px;
          cursor: pointer;
        }
        .home-info-textbox strong {
          font: 400 16px/1 'fredoka';
          color: #b46927;
        }
        .home-info-textbox span {
          margin-left: 10px;
          font: 400 1px/1 'roboto';
        }
        .home-news {
          width: 100%;
          background-color: #2f4858;
          padding: 100px 0vw;
          color: #fff;
        }
        .home-news-title {
          font: 500 24px/1 'fredoka';
          text-align: center;
          margin-bottom: 100px;
        }
        .home-news-subtitle {
          width: 80%;
          margin: 0 auto;
          display: block;
          font: 400 16px 'questrial';
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #fff;
        }
        .home-news-article {
          width: 80%;
          margin: 0 auto;
          font: 400 12px/1.4 'questrial';
          margin-bottom: 40px;
        }
        .home-more-btn {
          width: 80%;
          margin: 0 auto;
          display: block;
        }
        .home-reviews-title {
          font: 500 24px/1 'fredoka';
          text-align: center;
          margin-bottom: 100px;
        }
        .home-reviews-box {
          padding: 100px 0;
        }
        // 반응형
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 500px) {
          .home-visual-text2 {
            top: 20%;
          }
          .home-info-pics {
            flex-direction: column;
          }
          .home-info-pic {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/dbs/reviews.json');
  const reviews = await res.json();
  return {
    props: {
      reviews,
    },
  };
}
