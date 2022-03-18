export default function Ceo() {
  return (
    <>
      <section className='about-ceo'>
        <div className='about-ceo-text'>
          <h2>WE ARE SEPHORA</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum
            fugit tempore magnam in natus beatae!
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            amet ducimus ratione tempore sint aperiam asperiores officiis libero
            dolorum! Obcaecati quibusdam veritatis vitae sapiente. Asperiores
            nulla earum molestiae enim voluptatibus. Praesentium, distinctio
            iste vero rem doloribus blanditiis amet alias consectetur.
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
      </section>
      <style jsx>{`
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
        @media screen and (max-width: 768px) {
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
        }
      `}</style>
    </>
  );
}
