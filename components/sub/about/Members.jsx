import clsx from 'clsx';

export default function Members({ members }) {
  return (
    <>
      <section className='about-members'>
        <div className='members-intro'>
          <div className='members-intro-title'>
            <h2>The Sephora</h2>
          </div>
          <div className='members-intro-description'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              voluptatibus magnam culpa voluptas soluta, accusamus at vel illum
              corporis accusantium.
            </p>
          </div>
        </div>
        <ul className='members'>
          {members &&
            members.map((member) => {
              return (
                <li
                  className={clsx(
                    'member',
                    parseInt(member.id) / 2 === 1 && 'reverse'
                  )}
                  key={member.id}
                >
                  <div className='member-pic'>
                    <img src={member.pic}></img>
                  </div>
                  <div className='member-text'>
                    <h3>{member.name}</h3>
                    <strong>{member.job}</strong>
                    <span>{member.email}</span>
                    <p>{member.say}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
      <style jsx>{`
        .about-members {
          width: 100%;
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
        .members {
          width: 90%;
          margin: 0 auto;
          padding: 40px;
        }
        .member {
          display: flex;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid #ccc;
        }
        .member.reverse {
          flex-direction: row-reverse;
        }
        .member-pic {
          width: 40%;
          text-align: center;
        }
        .member-pic img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
        }
        .member-text {
          width: 60%;
          padding: 10px;
        }
        .member-text h3 {
          font: 700 16px/1 'roboto';
        }
        .member-text strong {
          font: 400 16px/1 'questrial';
        }
        .member-text span {
          display: block;
          font: 400 16px/1 'questrial';
          text-align: right;
          margin-bottom: 40px;
        }
        .member-text p {
          font: 400 14px/1.4 'questrial';
        }
        .member-text h2 {
        }
        // 반응형
        @media screen and (max-width: 768px) {
          .members-intro-title {
            text-align: left;
            margin-right: 10px;
          }
        }
        @media screen and (max-width: 650px) {
          .member {
            flex-direction: column;
            padding: 50px 0;
          }
          .member.reverse {
            flex-direction: column;
          }
          .member-pic {
            width: 100%;
          }
          .member-text {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
