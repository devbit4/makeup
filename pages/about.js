export default function About() {
  return (
    <>
      <div className="about">
        <div className="inner">
          <div className="about-ceo">
            <div className="about-ceo-text">
              <h2>WE ARE SEPHORA</h2>
              <span>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                cum fugit tempore magnam in natus beatae!"
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus amet ducimus ratione tempore sint aperiam asperiores
                officiis libero dolorum! Obcaecati quibusdam veritatis vitae
                sapiente. Asperiores nulla earum molestiae enim voluptatibus.
                Praesentium, distinctio iste vero rem doloribus blanditiis amet
                alias consectetur.
              </p>
              <span>"Lorem ipsum dolor sit amet."</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                accusamus dicta, veritatis iste animi eligendi qui enim nisi.
                Dignissimos facilis provident minus, similique adipisicing elit
                dolor sit.
              </p>
            </div>
            <div className="about-ceo-pic">
              <img src="/img/member1.jpg" alt="ceo-img"></img>
            </div>
          </div>
          <div className="about-members"></div>
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
        }
        .about-ceo-text {
          text-align: center;
          padding: 0 40px;
        }
        .about-ceo-pic {
          padding: 0 40px;
        }
      `}</style>
    </>
  );
}
