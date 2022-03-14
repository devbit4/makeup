export default function Pagination({
  totalProblems,
  problemsPerPage,
  paginate,
}) {
  const pageNums = [];
  for (let i = 1; i <= Math.ceil(totalProblems / problemsPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <>
      <ul className='page-nums'>
        {pageNums.map((pageNum) => {
          return (
            <li
              key={pageNum}
              onClick={() => paginate(pageNum)}
              className='page-num'
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
        .page-num:hover {
          background-color: #777;
          color: #fff;
        }
      `}</style>
    </>
  );
}
