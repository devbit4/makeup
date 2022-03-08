import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <div className="contents">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="main">{children}</div>
      </div>
      <style jsx>{
        `
        .contents{
          display:flex;
          min-height: 500px;
        }
        .sidebar{
          width:20%;
          border:1px solid #000;
        }
        .main{
          width:80%;
          border:1px solid #000;
        }
        // <tablet 구간>
        @media screen and (max-width: 768px){
          .contents{
            flex-direction:column;
          }
          .sidebar{
            width:100%;
          }
          .main{
            width:100%;
          }
        }
        `
      }
      </style>
      
    </>
  );
}
