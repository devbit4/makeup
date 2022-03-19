import Header from './Header';
import SearchBox from './SearchBox';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import ArrowBtn from './ArrowUpBtn';

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
