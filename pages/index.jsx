import { useEffect, useState } from 'react';
import Seo from '../components/common/Seo';
import Info from '../components/sub/home/Info';
import News from '../components/sub/home/News';
import Visual from '../components/sub/home/Visual';
import Reviews from '../components/sub/home/Reviews';
import axios from 'axios';

export default function HomePage() {
  const [reviews, setReviews] = useState();
  const homePics = [
    {
      src: '/img/main2.jpg',
      name: 'SKIN CARE',
    },
    { src: '/img/main3.jpg', name: 'BODY CARE' },
    { src: '/img/main4.jpg', name: 'HAIR CARE' },
  ];

  useEffect(() => {
    axios
      .get('/dbs/reviews.json')
      .then((res) => setReviews(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Seo title='Home' />
      <div className='home'>
        <Visual></Visual>
        <Info homePics={homePics}></Info>
        <News></News>
        <Reviews reviews={reviews}></Reviews>
      </div>
      <style jsx>{`
        .home {
          width: 100%;
        }
      `}</style>
    </>
  );
}
