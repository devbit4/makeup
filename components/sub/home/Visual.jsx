import Fade from 'react-reveal/Fade';

export default function Visual() {
  return (
    <>
      <section className='home-visual'>
        <div className='home-visual-inner'>
          <Fade top delay={300}>
            <p className='home-visual-text1'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              veritatis ea corrupti voluptatibus ad ut vitae suscipit assumenda?
              Quaerat, incidunt.
            </p>
          </Fade>
          <Fade top delay={800}>
            <p className='home-visual-text2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate natus pariatur aperiam!<br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate natus pariatur aperiam!
            </p>
          </Fade>
        </div>
      </section>
      <style jsx>{`
        .home-visual {
          width: 100%;
          height: 600px;
          background-image: url('/img/main1.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
          opacity: 0.9;
        }
        .home-visual-inner {
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
        // 반응형
        @media screen and (max-width: 1180px) {
          .home-visual-inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 500px) {
          .home-visual-text2 {
            top: 20%;
          }
        }
      `}</style>
    </>
  );
}
