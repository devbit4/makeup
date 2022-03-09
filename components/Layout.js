import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header></Header>
      <div className="main">{children}</div>
      <Footer></Footer>

      {/* Layout 스타일링 */}
      <style jsx>{``}</style>
    </div>
  );
}
