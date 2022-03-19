export default function Info({ homePics }) {
  return (
    <>
      <section className='home-info'>
        <div className='home-info-inner'>
          <div className='home-info-intro'>
            <span className='home-info-intro-title'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
            <p className='home-info-intro-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              laboriosam harum beatae cum explicabo quia saepe quae officia, sed
              veniam, voluptate sit tempore! Doloremque, odio.
            </p>
          </div>
          <ul className='home-info-pics'>
            {homePics.map((pic, index) => {
              return (
                <li className='home-info-pic' key={index}>
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
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <style jsx>{`
        .home-info {
          width: 100%;
          background-color: #e5e0e0;
          padding: 100px 0;
        }
        .home-info-inner {
          width: 1180px;
          height: 100%;
          margin: 0 auto;
          position: relative;
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
        // 반응형
        @media screen and (max-width: 1180px) {
          .home-info-inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 500px) {
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
