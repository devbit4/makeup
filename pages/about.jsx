import { useEffect } from 'react';
import Seo from '../components/common/Seo';
import Members from '../components/sub/Members';

export default function AboutPage() {
  return (
    <>
      <Seo title='About' />
      <div className='about'>
        <div className='inner'>
          <div className='about-ceo'>
            <div className='about-ceo-text'>
              <h2>WE ARE SEPHORA</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                cum fugit tempore magnam in natus beatae!
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus amet ducimus ratione tempore sint aperiam asperiores
                officiis libero dolorum! Obcaecati quibusdam veritatis vitae
                sapiente. Asperiores nulla earum molestiae enim voluptatibus.
                Praesentium, distinctio iste vero rem doloribus blanditiis amet
                alias consectetur.
              </p>
              <span>Lorem ipsum dolor sit amet.</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                accusamus dicta, veritatis iste animi eligendi qui enim nisi.
                Dignissimos facilis provident minus, similique adipisicing elit
                dolor sit.
              </p>
            </div>
            <div className='about-ceo-pic'>
              <img
                src='/img/member1.jpg'
                alt='ceo-img'
                className='about-ceo-pic-img'
              ></img>
            </div>
          </div>
          <div className='members-intro'>
            <div className='members-intro-title'>
              <h2>The Sephora</h2>
            </div>
            <div className='members-intro-description'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem voluptatibus magnam culpa voluptas soluta, accusamus at
                vel illum corporis accusantium.
              </p>
            </div>
          </div>
          <Members></Members>
        </div>
      </div>
      <style jsx>{`
        .about {
          width: 100%;
        }
        .inner {
          width: 1180px;
          margin: 0 auto;
        }
        .about-ceo {
          display: flex;
          padding: 40px;
          margin-top: 20px;
          border-bottom: 1px solid #333;
        }
        .about-ceo-text {
          width: 50%;
          text-align: center;
          padding: 0 40px;
        }
        .about-ceo-text h2 {
          font: 700 24px/1 'roboto';
          margin-bottom: 30px;
        }
        .about-ceo-text span {
          display: block;
          font: 400 16px/1 'questrial';
          margin-bottom: 30px;
        }
        .about-ceo-text p {
          display: block;
          font: 400 12px/1.4 'questrial';
          margin-bottom: 30px;
          text-align: left;
        }
        .about-ceo-pic {
          width: 50%;
          padding: 0 60px;
          border-radius: 10px;
          overflow: hidden;
        }
        .about-ceo-pic-img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
        .members-intro {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 40px;
          border-bottom: 1px solid #333;
        }
        .members-intro-title {
          width: 30%;
          text-align: center;
        }
        .members-intro-title h2 {
          font: 700 24px/1 'roboto';
        }
        .members-intro-description {
          width: 70%;
        }
        .members-intro-description p {
          font: 400 16px/1.4 'questrial';
        }
        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .inner {
            width: 100%;
          }
          .about-ceo {
            flex-direction: column;
          }
          .about-ceo-text {
            width: 100%;
            padding: 0;
          }
          .about-ceo-pic {
            width: 100%;
            height: 200px;
            padding: 0;
          }
          .members-intro-title {
            text-align: left;
            margin-right: 10px;
          }
        }
      `}</style>
    </>
  );
}
