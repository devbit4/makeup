import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import ItemDetail from '../../components/common/ItemDetail';
import TabIndex from '../../components/common/TabIndex';
import TabContent from '../../components/common/TabContent';
import Loading from '../../components/common/Loading';
import Alarm from '../../components/sub/detail/Alarm';
import axios from 'axios';

export default function DetailPage() {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const [alarm, setAlarm] = useState(true);
  const [item, setItem] = useState();
  const [tabIndex, setTabIndex] = useState(0);
  const url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`;

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
      {item ? (
        <div className='detail-inner'>
          {alarm && <Alarm></Alarm>}
          <ItemDetail
            item={item}
            dispatch={dispatch}
            router={router}
          ></ItemDetail>
          <div className='detail-tab'>
            <TabIndex tabIndex={tabIndex} setTabIndex={setTabIndex}></TabIndex>
            <TabContent
              tabIndex={tabIndex}
              description={item.description}
            ></TabContent>
          </div>
        </div>
      ) : (
        <div className='loading'>
          <Loading></Loading>
        </div>
      )}
      <style jsx>{`
        .loading {
          min-height: 500px;
        }
        .detail-inner {
          width: 1180px;
          margin: 0 auto;
        }
        // 빈응형
        @media screen and (max-width: 1180px) {
          .detail-inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
