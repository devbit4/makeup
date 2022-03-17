import Layout from '../components/common/Layout';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import '../styles/fonts.css';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

config.autoAddCss = false;

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let 기본state = [
  { id: 0, name: '립스틱', quan: 1 },
  { id: 1, name: '섀도우', quan: 1 },
];

function reducer(state = 기본state, 액션) {
  if (액션.type === '항목추가') {
    let copy = [...state, 액션.payload];
    return copy;
  } else if (액션.type === '수량증가') {
    let copy = [...state];
    let index = copy.findIndex((obj) => obj.id === 액션.payload.id);
    copy[index].quan++;
    return copy;
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    let index = copy.findIndex((obj) => obj.id === 액션.payload.id);
    copy[index].quan > 0 && copy[index].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
