import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  const router = useRouter();
  const section = router.query.section;
  const [problems, setProblems] = useState([]);
  const comminity = ["faq", "qna"];

  const getData = () => {
    fetch(`/dbs/${section}.json`)
      .then((data) => data.json())
      .then((json) => setProblems(json.data));
  };
  const handleClick = (e) => {
    e.target.closest("article").classList.toggle("off");
  };

  useEffect(() => {
    section && getData();
  }, [section]);

  return (
    <section className="section wrapper">
      <div className="sidebar">
        <h1 className="sidebar-title">All sections</h1>
        <Sidebar menus={comminity} title={"community"}></Sidebar>
      </div>
      <div className="main">
        <h1 className="main-title">{section}</h1>
        {problems.map((problem, index) => {
          return (
            <article key={index} className="problem">
              <div className="question" onClick={handleClick}>
                <div className="question-front">
                  <FontAwesomeIcon icon={faCircle} />
                  <h2>{problem.question}</h2>
                </div>
                <div className="question-underbar">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <div className="answer">
                <p>{problem.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
      {/* community section 스타일링 */}
      <style jsx>
        {`
          .wrapper {
            display: flex;
            padding: 0 10vw;
          }
          .sidebar {
            width: 20%;
            background-color: #999;
            padding: 40px 20px;
          }
          .sidebar-title {
            color: #fff;
          }
          .main {
            width: 80%;
            padding: 40px;
          }
          .main-title {
            font: 500 24px "fredoka";
            margin-bottom: 50px;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
          }
          .problem {
            margin-bottom: 20px;
          }
          .question {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .question-front {
            display: flex;
            align-items: center;
            padding: 10px;
          }
          .question-underbar {
            cursor: pointer;
            transform: rotate(180deg);
            transition: all 0.5s;
          }
          .question-front h2 {
            font: 700 16px/1 "roboto";
            margin-left: 10px;
          }
          .answer {
            padding: 20px 0px 0px 20px;
          }
          .answer p {
            font: 400 12px/1.4 "roboto";
          }
          .problem.off .answer {
            display: none;
          }
          .problem.off .question-underbar {
            transform: rotate(0deg);
          }
          // <tablet 구간>
          @media screen and (max-width: 768px) {
            .wrapper {
              flex-direction: column;
            }
            .sidebar {
              width: 100%;
              padding: 20px;
            }
            .main {
              width: 100%;
              border-left: 1px solid #999;
              border-right: 1px solid #999;
            }
          }
        `}
      </style>
    </section>
  );
}
