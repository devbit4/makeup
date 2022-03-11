import ArrowBtn from "./ArrowBtn";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header></Header>
      <div className="main">{children}</div>
      <Footer></Footer>
      <ArrowBtn></ArrowBtn>
    </div>
  );
}
