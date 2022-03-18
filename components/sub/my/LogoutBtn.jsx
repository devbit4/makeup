export default function LogoutBtn({ onClick }) {
  return (
    <>
      <button onClick={onClick} className='logout-btn'>
        Logout
      </button>
      <style jsx>{`
        .logout-btn {
          width: 80px;
          height: 40px;
          display: block;
          float: right;
          padding: 0 20px;
          margin-right: 10px;
          cursor: pointer;
          background-color: transparent;
          font: 400 12px/1 'fredoka';
          color: #333;
          border-radius: 4px;
          border: 1px solid #333;
          text-align: center;
        }
        .logout-btn:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}
