import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MyPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const checkLogin = () => {
    // fetch('/api/isLogin')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     if (json.status === 200 && json.data.name) {
    //       // 로그인
    //     } else {
    //       router.push('/login');
    //     }
    //   });
    axios.get('/api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        // 로그인
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
      <h1>admin</h1>
      {isLogin && <button onClick={logout}>logout</button>}
    </>
  );
}
