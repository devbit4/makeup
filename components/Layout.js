import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
        <div className="main">{children}</div>
      <Footer></Footer>
    
    {/* Layout 스타일링 */}
      
    </>
    
  );
}
