import { useRouter } from 'next/router';
import Seo from '../components/common/Seo';
import LoginForm from '../components/sub/my/LoginForm';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();

  const login = (e) => {
    e.preventDefault();
    axios.post('/api/login').then((res) => {
      if (res.status === 200) {
        router.push('/my');
      }
    });
    console.log('ok');
  };
  return (
    <>
      <Seo title='Login' />
      <div className='login-inner'>
        <LoginForm login={login}></LoginForm>
      </div>
      <style jsx>{`
        .login-inner {
          width: 1180px;
          margin: 0 auto;
        }
        @media screen and (max-width: 1180px) {
          .login-inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
