import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Seo from '../components/common/Seo';
import axios from 'axios';
import ShoppingList from '../components/sub/my/ShoppingList';
import LogoutBtn from '../components/sub/my/LogoutBtn';

export default function MyPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const shoppingItems = useSelector((state) => state);
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
        {isLogin && <LogoutBtn onClick={logout}></LogoutBtn>}
        <h1 className='mypage-title'>mypage</h1>
        <div className='mypage-content'>
          <ShoppingList
            shoppingItems={shoppingItems}
            dispatch={dispatch}
          ></ShoppingList>
        </div>
        <style jsx>{`
          .mypage-inner {
            width: 1180px;
            min-height: 500px;
            position: relative;
            margin: 0 auto;
          }
          .mypage-title {
            margin: 40px 10px;
            font: 500 32px 'fredoka';
          }
          .mypage-content {
            width: 100%;
            min-height: 300px;
            background-color: #efefef;
            padding: 20px;
          }
          // 반응형
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
