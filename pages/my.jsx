import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Seo from '../components/common/Seo';
import axios from 'axios';

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
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

  const logout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <Seo title='My' />
      <div className='mypage-inner'>
        {isLogin && (
          <button onClick={logout} className='logout-btn'>
            Logout
          </button>
        )}
        <h1 className='mypage-title'>mypage</h1>
        <div className='mypage-content'>
          <div className='cart'>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경</th>
                </tr>
              </thead>
              <tbody>
                {state.map((item, i) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.quan}</td>
                      <td>
                        <button
                          onClick={() => {
                            dispatch({
                              type: '수량증가',
                              payload: { id: item.id },
                            });
                          }}
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            dispatch({
                              type: '수량감소',
                              payload: { id: item.id },
                            });
                          }}
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <style jsx>{`
          table {
            width: 100%;
            border: 1px solid #333;
            border-collapse: collapse;
          }
          th,
          td {
            border: 1px solid #333;
            padding: 10px;
          }

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
            font: 500 32px 'fredoka';
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
