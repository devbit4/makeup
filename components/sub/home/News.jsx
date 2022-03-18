export default function News() {
  return (
    <>
      <section className='home-news'>
        <div className='inner'>
          <h2 className='home-news-title'>THE NEWS</h2>
          <span className='home-news-subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            unde?
          </span>
          <p className='home-news-article'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro error tempora a, ea ab aliquid blanditiis veniam quam
            earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique porro error tempora a, ea ab aliquid blanditiis veniam
            quam earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique porro error tempora a, ea ab aliquid blanditiis veniam
            quam earum.
          </p>
          <p className='home-news-article'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro error tempora a, ea ab aliquid blanditiis veniam quam
            earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique porro error tempora a, ea ab aliquid blanditiis veniam
            quam earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique porro error tempora a, ea ab aliquid blanditiis veniam
            quam earum.
          </p>
          <span className='home-more-btn'>READ MORE</span>
        </div>
      </section>
      <style jsx>{`
        .home-news {
          width: 100%;
          background-color: #2f4858;
          padding: 100px 0vw;
          color: #fff;
        }
        .inner {
          width: 1180px;
          height: 100%;
          margin: 0 auto;
          position: relative;
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
        // 반응형
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
