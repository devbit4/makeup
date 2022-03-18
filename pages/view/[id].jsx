import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../components/common/Loading';
import TabContent from '../../components/sub/detail/TabContent';
import Head from 'next/head';
import Item from '../../components/sub/detail/Item';
import TabIndex from '../../components/sub/detail/TabIndex';

export default function ViewPage({ item }) {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();

  if (router.isFallback) {
    return (
      <div className='loading'>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name='description' content={item.description}></meta>
      </Head>
      {item && (
        <div className='detail'>
          <div className='inner'>
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
      )}
      <style jsx>{`
        .loading {
          min-height: 300px;
        }
        .detail {
          width: 100%;
          min-height: 300px;
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

export async function getStaticPaths() {
  const res = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique'
  );
  const data = await res.json();
  return {
    paths: data.slice(0, 10).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),

    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`
  );
  const item = await res.json();
  return {
    props: {
      item,
    },
  };
}
