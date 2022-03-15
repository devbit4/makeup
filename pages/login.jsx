import { useRouter } from 'next/router';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();

  function login(e) {
    axios.post('/api/login').then((res) => {
      if (res.status === 200) {
        router.push('/my');
      }
    });
    e.preventDefault();
    console.log('ok');
  }
  return (
    <div>
      <form>
        <input type='id' placeholder='id를 입력하세요'></input>
        <input type='password' placeholder='비밀번호를 입력하세요'></input>
        <input type='submit' value='Send' onClick={login} />
      </form>
    </div>
  );
}
