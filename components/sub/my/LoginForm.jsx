import { useRef } from 'react';

export default function LoginForm({ login }) {
  const id = useRef();
  const password = useRef();

  const handleClick = (e) => {
    login(e);
  };
  return (
    <>
      <form>
        <fieldset className='login-form'>
          <legend className='h'>LoginForm</legend>
          <h1>Login</h1>
          <input
            type='id'
            placeholder='id를 입력하세요'
            className='userid'
            ref={id}
          ></input>
          <input
            type='password'
            placeholder='비밀번호를 입력하세요'
            className='password'
            ref={password}
          ></input>
          <input
            type='submit'
            value='Send'
            onClick={handleClick}
            className='login-btn'
          />
        </fieldset>
      </form>
      <style jsx>{`
        fieldset {
          border: none;
        }
        .h {
          position: absolute;
          top: -99999px;
          opacity: 0;
        }
        .login-form {
          width: 100%;
          height: 500px;
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
      `}</style>
    </>
  );
}
