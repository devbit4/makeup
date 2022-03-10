import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Members() {
  const [members, setMembers] = useState();

  useEffect(() => {
    fetch("/dbs/members.json")
      .then((data) => data.json())
      .then((json) => setMembers(json.data));
  }, []);

  return (
    <>
      <div className="members-intro">
        <div className="members-intro-title">
          <h2>The Sephora</h2>
        </div>
        <div className="members-intro-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            voluptatibus magnam culpa voluptas soluta, accusamus at vel illum
            corporis accusantium.
          </p>
        </div>
      </div>
      <ul className="members">
        {members &&
          members.map((member) => {
            return (
              <div
                className={clsx(
                  "member",
                  parseInt(member.id) / 2 === 1 ? "active" : ""
                )}
                key={member.id}
              >
                <div className="member-pic">
                  <img src={member.pic}></img>
                </div>
                <div className="member-text">
                  <h3>{member.name}</h3>
                  <strong>{member.job}</strong>
                  <span>{member.email}</span>
                  <p>{member.say}</p>
                </div>
              </div>
            );
          })}
      </ul>
      <style jsx>{`
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
          font: 700 24px/1 "roboto";
        }
        .members-intro-description {
          width: 70%;
        }
        .members-intro-description p {
          font: 400 16px/1.4 "questrial";
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
        .member.active {
          flex-direction: row-reverse;
        }
        .member-pic {
          width: 40%;
          text-align: center;
        }
        .member-pic img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
        }
        .member-text {
          width: 60%;
          padding: 10px;
        }
        .member-text h3 {
          font: 700 16px/1 "roboto";
        }
        .member-text strong {
          font: 400 16px/1 "questrial";
        }
        .member-text span {
          display: block;
          font: 400 16px/1 "questrial";
          text-align: right;
          margin-bottom: 40px;
        }
        .member-text p {
          font: 400 12px/1.4 "questrial";
        }
        .member-text h2 {
        }
        // 반응형
        @media screen and (max-width: 650px) {
          .members-intro-title {
            text-align: left;
            margin-right: 10px;
          }
          .member {
            flex-direction: column;
            padding: 50px 0;
          }
          .member.active {
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
