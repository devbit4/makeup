import SearchBox from './SearchBox';
import ArrowBtn from './ArrowBtn';
import Footer from './Footer';
import Header from './Header';
import Breadcrumbs from '../sub/Breadcrumbs';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Header></Header>
      <SearchBox></SearchBox>
      <Breadcrumbs></Breadcrumbs>
      <div className='content'>{children}</div>
      <Footer></Footer>
      <ArrowBtn></ArrowBtn>
    </div>
  );
}
