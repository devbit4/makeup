import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MyPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    axios.get('/api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      } else {
        router.push('/login');
      }
    });
  };

  function logout() {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  }
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <div className='mypage-inner'>
        {isLogin && (
          <button onClick={logout} className='logout-btn'>
            Logout
          </button>
        )}
        <h1 className='mypage-title'>MYpage</h1>
        <div className='mypage-content'>준비중입니다.</div>
        <style jsx>{`
          .mypage-inner {
            width: 1180px;
            min-height: 500px;
            position: relative;
            margin: 0 auto;
          }
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
          .mypage-title {
            margin: 40px 10px;
            font: 700 24px/1 'roboto';
          }
          .mypage-content {
            width: 100%;
            height: 300px;
            background-color: #efefef;
            padding: 20px;
          }

          @media screen and (max-width: 1180px) {
            .mypage-inner {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}
