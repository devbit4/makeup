import Seo from '../components/common/Seo';
import Info from '../components/sub/home/Info';
import News from '../components/sub/home/News';
import Visual from '../components/sub/home/Visual';
import Reviews from '../components/sub/home/Reviews';

export default function HomePage({ home }) {
  return (
    <>
      <Seo title='Home' />
      <div className='home-inner'>
        <Visual></Visual>
        <Info homePics={home.homePics}></Info>
        <News></News>
        <Reviews reviews={home.reviews}></Reviews>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://makeup-sigma.vercel.app';

  const res = await fetch(`${url}/dbs/home.json`);
  const home = await res.json();
  return {
    props: {
      home,
    },
  };
}
