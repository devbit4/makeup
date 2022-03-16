import { useRef } from 'react';
import clsx from 'clsx';

export default function Pagination({
  totalProblems,
  problemsPerPage,
  paginate,
}) {
  const pageNums = [];
  const pageBoxNumbers = useRef();

  for (let i = 1; i <= Math.ceil(totalProblems / problemsPerPage); i++) {
    pageNums.push(i);
  }

  const handleClick = (e) => {
    for (let i = 0; i < pageBoxNumbers.current.children.length; i++) {
      pageBoxNumbers.current.children[i].classList.remove('active');
    }
    e.target.classList.add('active');
  };
  return (
    <>
      <ul className='page-nums' ref={pageBoxNumbers}>
        {pageNums.map((pageNum) => {
          return (
            <li
              key={pageNum}
              onClick={(e) => {
                paginate(pageNum);
                handleClick(e);
              }}
              className={clsx('page-num', pageNum === 1 && 'active')}
            >
              {pageNum}
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .page-nums {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .page-num {
          margin-right: 10px;
          border: 1px solid #333;
          border-radius: 4px;
          padding: 4px;
          cursor: pointer;
        }
        .page-num.active {
          background-color: #777;
          color: #fff;
        }
        .page-num:hover {
          background-color: #777;
          color: #fff;
        }
      `}</style>
    </>
  );
}
