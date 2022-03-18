import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TabContent from '../../components/sub/TabContent';
import Seo from '../../components/common/Seo';
import axios from 'axios';
import Item from '../../components/sub/detail/Item';
import TabIndex from '../../components/sub/detail/TabIndex';
import Loading from '../../components/sub/Loading';
import Alarm from '../../components/sub/detail/Alarm';

export default function DetailPage(props) {
  const router = useRouter();
  const id = router.query.id;
  const [item, setItem] = useState();
  const [tabIndex, setTabIndex] = useState(0);
  const [alarm, setAlarm] = useState(true);
  const url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlarm(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Seo title='상세페이지' />
      {item ? (
        <div className='detail'>
          <div className='inner'>
            {alarm && <Alarm></Alarm>}
            <Item item={item} dispatch={dispatch} router={router}></Item>
            <div className='detail-tab'>
              <TabIndex
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
              ></TabIndex>
              <TabContent
                tabIndex={tabIndex}
                description={item.description}
              ></TabContent>
            </div>
          </div>
        </div>
      ) : (
        <div className='loading'>
          <Loading></Loading>
        </div>
      )}
      <style jsx>{`
        .loading {
          min-height: 300px;
        }
        .detail {
          width: 100%;
        }
        .inner {
          width: 1180px;
          margin: 0 auto;
        }
        // 빈응형
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
