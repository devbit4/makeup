import { useEffect, useState } from 'react';
import Seo from '../components/common/Seo';
import Ceo from '../components/sub/about/CEO';
import Members from '../components/sub/about/Members';
import axios from 'axios';

export default function AboutPage() {
  const [members, setMembers] = useState();

  useEffect(() => {
    axios
      .get('/dbs/members.json')
      .then((res) => setMembers(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Seo title='About' />
      <div className='about-inner'>
        <Ceo></Ceo>
        <Members members={members}></Members>
      </div>
      <style jsx>{`
        .about-inner {
          width: 1180px;
          margin: 0 auto;
        }
        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .about-inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
