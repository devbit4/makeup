import Seo from '../components/common/Seo';
import Info from '../components/sub/home/Info';
import News from '../components/sub/home/News';
import Visual from '../components/sub/home/Visual';
import Reviews from '../components/sub/home/Reviews';

export default function HomePage({ homeData }) {
  return (
    <>
      <Seo title='Home' />
      <div className='home-inner'>
        <Visual></Visual>
        <Info homePics={homeData.homePics}></Info>
        <News></News>
        <Reviews reviews={homeData.reviews}></Reviews>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.VERCEL_URL;

  const res = await fetch(`${url}/dbs/home.json`);
  const homeData = await res.json();
  return {
    props: {
      homeData,
    },
  };
}
