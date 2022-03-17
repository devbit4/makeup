import { useRouter } from 'next/router';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();

  function login(e) {
    e.preventDefault();
    axios.post('/api/login').then((res) => {
      if (res.status === 200) {
        router.push('/my');
      }
    });
    console.log('ok');
  }
  return (
    <>
      <div className='login-inner'>
        <form className='login-form'>
          <h1>Login</h1>
          <input type='id' placeholder='id를 입력하세요'></input>
          <input type='password' placeholder='비밀번호를 입력하세요'></input>
          <input
            type='submit'
            value='Send'
            onClick={login}
            className='login-btn'
          />
        </form>
      </div>
      <style jsx>{`
        .login-inner {
          width: 1180px;
          margin: 0 auto;
          height: 500px;
        }
        .login-form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .login-form h1 {
          margin-bottom: 30px;
          font: 500 32px 'fredoka';
        }
        .login-form input {
          width: 40%;
          margin-bottom: 20px;
          padding: 10px;
        }
        .login-btn {
          cursor: pointer;
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
