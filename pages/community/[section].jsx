import { useEffect, useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import Seo from '../../components/common/Seo';

export default function Faq() {
  const router = useRouter();
  const section = router.query.section;
  const [problems, setProblems] = useState([]);
  const comminity = ['faq', 'qna', 'form'];

  const getData = () => {
    fetch(`/dbs/${section}.json`)
      .then((data) => data.json())
      .then((json) => setProblems(json.data));
  };
  const handleClick = (e) => {
    e.target.closest('article').classList.toggle('off');
  };

  useEffect(() => {
    section && getData();
  }, [section]);

  return (
    <>
      <Seo title='Community'></Seo>
      <section className='community'>
        <div className='inner'>
          <div className='sidebar'>
            <h1 className='sidebar-title'>Community</h1>
            <Sidebar menus={comminity} title={'community'}></Sidebar>
          </div>
          <div className='main'>
            <h1 className='main-title'>{section}</h1>
            {problems.map((problem, index) => {
              return (
                <article key={index} className='problem'>
                  <div className='question' onClick={handleClick}>
                    <div className='question-front'>
                      <FontAwesomeIcon icon={faCircle} />
                      <h2>{problem.question}</h2>
                    </div>
                    <div className='question-underbar'>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                  <div className='answer'>
                    <p>{problem.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* community section 스타일링 */}
      <style jsx>
        {`
          .inner {
            width: 1180px;
            margin: 0 auto;
            display: flex;
          }
          .sidebar {
            width: 20%;
            background-color: #999;
            padding: 40px 20px;
          }
          .sidebar-title {
            color: #fff;
            font: 500 24px 'fredoka';
          }
          .main {
            width: 80%;
            min-height: 1000px;
            padding: 40px;
          }
          .main-title {
            margin-bottom: 50px;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
            font: 500 24px 'fredoka';
          }
          .problem {
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ccc;
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
            font: 700 16px/1 'roboto';
            margin-left: 10px;
          }
          .answer {
            padding: 20px 0px 0px 20px;
          }
          .answer p {
            font: 400 12px/1.4 'roboto';
          }
          .problem.off .answer {
            display: none;
          }
          .problem.off .question-underbar {
            transform: rotate(0deg);
          }
          // 반응형 구간
          @media screen and (max-width: 1180px) {
            .inner {
              width: 100%;
            }
          }
          @media screen and (max-width: 768px) {
            .inner {
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
    </>
  );
}
