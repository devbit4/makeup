import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { COMMUNITY_PAGE } from '../../../constants';
import Seo from '../../../components/common/Seo';
import Pagination from '../../../components/sub/community/Pagination';
import Sidebar from '../../../components/layout/Sidebar';
import axios from 'axios';
import ProblemList from '../../../components/sub/community/ProblemList';

export default function InfoPage() {
  const router = useRouter();
  const section = router.query.section;
  const [problems, setProblems] = useState([]);
  // 페이지네이션
  const problemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = currentPage * problemsPerPage;
  const indexOfFisrtPage = indexOfLastPage - problemsPerPage;
  const currentProblems = problems.slice(indexOfFisrtPage, indexOfLastPage);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  const handleClick = useCallback((e) => {
    e.target.closest('article').classList.toggle('off');
  }, []);

  useEffect(() => {
    section &&
      axios
        .get(`/dbs/${section}.json`)
        .then((res) => setProblems(res.data.data))
        .catch((err) => console.log(err));
  }, [router]);

  return (
    <>
      <Seo title='Community'></Seo>
      <section className='community'>
        <div className='inner'>
          <div className='sidebar'>
            <h1 className='sidebar-title'>Community</h1>
            <Sidebar menus={COMMUNITY_PAGE}></Sidebar>
          </div>
          <div className='main'>
            <h1 className='main-title'>{section}</h1>
            <ProblemList
              currentProblems={currentProblems}
              onClick={handleClick}
            ></ProblemList>
            <Pagination
              paginate={paginate}
              problemsPerPage={problemsPerPage}
              totalProblems={problems.length}
            ></Pagination>
          </div>
        </div>
      </section>
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
