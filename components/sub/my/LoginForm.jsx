export default function LoginForm({ login }) {
  return (
    <>
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
      <style jsx>{`
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
      `}</style>
    </>
  );
}
