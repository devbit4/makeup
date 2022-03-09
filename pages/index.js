export default function Home() {
  return (
    <>
      <div className="home">
        <section className="home-visual">
          {/* <h1 className="home-title">Show Your Beauty</h1> */}
          <div className="wrapper">
            <p className="home-visual-text1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              veritatis ea corrupti voluptatibus ad ut vitae suscipit assumenda?
              Quaerat, incidunt.
            </p>
            <p className="home-visual-text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate natus pariatur aperiam!<br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate natus pariatur aperiam!
            </p>
          </div>
        </section>
        <section className="home-info">
          <div className="home-info-intro">
            <span className="home-info-intro-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
            <p className="home-info-intro-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              laboriosam harum beatae cum explicabo quia saepe quae officia, sed
              veniam, voluptate sit tempore! Doloremque, odio.
            </p>
          </div>
          <div className="home-info-pics">
            <article className="home-info-pic">
              <img
                src="/img/1.jpg"
                alt="home-info-pic"
                className="home-info-pic-img"
              ></img>
              <div className="home-info-textbox">
                <strong>001</strong>
                <span>SKIN CARE</span>
              </div>
            </article>
            <article className="home-info-pic">
              <img
                src="/img/2.jpg"
                alt="home-info-pic2"
                className="home-info-pic-img"
              ></img>
              <div className="home-info-textbox">
                <strong>002</strong>
                <span>Body CARE</span>
              </div>
            </article>
            <article className="home-info-pic">
              <img
                src="/img/3.jpg"
                alt="home-info-pic3"
                className="home-info-pic-img"
              ></img>
              <div className="home-info-textbox">
                <strong>003</strong>
                <span>Hair CARE</span>
              </div>
            </article>
          </div>
        </section>
        <section className="home-news">
          <h2 className="home-news-title">THE LATEST</h2>
          <span className="home-news-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            unde?
          </span>
          <p className="home-news-article">
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro error tempora a, ea ab aliquid blanditiis veniam quam
            earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique porro error tempora a, ea ab aliquid blanditiis veniam
            quam earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique porro error tempora a, ea ab aliquid blanditiis veniam
            quam earum.
          </p>
          <span className="more-btn">READ MORE</span>
        </section>
        <section className="home-promotions">
          <div className="home-promotion">
            <img
              src="/img/4.jpg"
              alt="promotion1"
              className="home-promotion-img"
            ></img>
          </div>
          <div className="home-promotion">
            <div className="home-promotion-wrapper">
              <img
                src="/img/0.jpg"
                alt="promotion1"
                className="home-promotion-sm-img"
              ></img>
              <img
                src="/img/0.jpg"
                alt="promotion1"
                className="home-promotion-sm-img"
              ></img>
              <img
                src="/img/0.jpg"
                alt="promotion1"
                className="home-promotion-sm-img"
              ></img>
              <img
                src="/img/0.jpg"
                alt="promotion1"
                className="home-promotion-sm-img"
              ></img>
            </div>
          </div>
          <div className="home-promotion">
            <img
              src="/img/1.jpg"
              alt="promotion1"
              className="home-promotion-img"
            ></img>
          </div>
        </section>
      </div>
      <style jsx>{`
        .home-visual {
          width: 100%;
          height: 80vh;
          background-image: url("/img/0.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          opacity: 0.9;
        }
        .home-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font: 500 64px/1 "fredoka";
          -webkit-text-stroke: 4px #333;
          -webkit-text-fill-color: transparent;
        }
        .home-visual-text1 {
          width: 30%;
          position: absolute;
          top: 20%;
          left: 10%;
          border-top: 2px solid #fff;
          padding-top: 5px;
          color: #fff;
          font: 400 16px "Roboto";
        }
        .home-visual-text2 {
          width: 30%;
          position: absolute;
          top: 60%;
          right: 10%;
          border-top: 2px solid #fff;
          padding-top: 5px;
          color: #fff;
          font: 400 16px "Roboto";
        }
        .home-info {
          width: 100%;
          background-color: #e5e0e0;
          padding: 10vh 10vw;
        }
        .home-info-intro {
          width: 90%;
          display: flex;
          margin: o auto;
          padding-bottom: 20px;
          margin-bottom: 100px;
          border-bottom: 1px solid #333;
        }
        .home-info-intro-title {
          margin: 0 30px;
          font: 400 16px/1.4 "fredoka";
          color: #b46927;
        }
        .home-info-intro-description {
          font: 400 16px/1.2 "Roboto";
        }
        .home-info-pics {
          display: flex;
          justify-content: space-between;
        }
        .home-info-pic {
          width: 30%;
          height: 20vh;
        }
        .home-info-pic-img {
          width: 100%;
          height: 100%;
        }
        .home-info-textbox {
          margin-top: 10px;
          cursor: pointer;
        }
        .home-info-textbox strong {
          font: 400 16px/1 "fredoka";
          color: #b46927;
        }
        .home-info-textbox span {
          margin-left: 10px;
          font: 400 16px/1 "roboto";
        }
        .home-news {
          background-color: #b46927;
          padding: 10vh 20vw;
        }
        .home-news-title {
          font: 500 24px/1 "fredoka";
          text-align: center;
          margin-bottom: 100px;
        }
        .home-news-subtitle {
          display: block;
          font: 400 16px/1 "roboto";
          margin-bottom: 20px;
        }
        .home-news-article {
          font: 400 16px/1.4 "roboto";
          margin-bottom: 40px;
        }
        .home-promotions {
          display: flex;
          background-color: #f5f2ee;
          justify-content: space-between;
          padding: 10vh 10vw;
        }
        .home-promotion {
          width: 32%;
          height: 200px;
        }
        .home-promotion-img {
          width: 100%;
          height: 100%;
        }
        .home-promotion-sm-img {
          width: 50%;
          height: 50%;
        }
      `}</style>
    </>
  );
}
