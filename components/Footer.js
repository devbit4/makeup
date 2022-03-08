import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function Footer() {

    const router=useRouter();
    return (

      <> 
      <footer className="footer">
        <div className="footer-upper">
          <div className="logo">
            <img src="#" alt="logo"></img>
            <span>Makeup</span>
          </div>
          <div className="foooter-menu">
                <Link href="/about">
                    <a className={clsx("footer-menu-item", router.pathname === "/about"? "active":"")} >About</a>            
                </Link>
                <Link href="/brands">
                    <a className={clsx("footer-menu-item", router.pathname === "/brands"? "active":"")} >Brands</a>   
                </Link>
                <Link href="/makeup">
                    <a className={clsx("footer-menu-item", router.pathname === "/makeup"? "active":"")}>Makeup</a>
                </Link>
                <Link href="/community">
                    <a className={clsx("footer-menu-item", router.pathname === "/community"? "active":"")} >Community</a>
                </Link>
          </div>
        </div>
        <div className="footer-lower">
          <ul className="footer-details">
            <li className="footer-detail">
              <span>Working Time</span>
              <p>Monday-Saturday</p>
              <p>09:00-18:00</p>
            </li>
            <li className="footer-detail">
              <span>Address</span>
              <p>198 West 21th street Suite 721</p>
              <p>New York,NY 10010</p>
            </li>    
            <li className="footer-detail">
              <span>Website policies</span>
              <p>Terms&Conditions</p>
              <p>Privacy policy</p>
              <p>Accessibility</p>                           
            </li>
            <li className="footer-detail4">
              <span>Social</span>
              <p>Instagram</p>
              <p>Pinterest</p>
              <p>Twitter</p>                           
            </li>
          </ul>
        </div>
        <div className="footer-copyright">&copy; All Rights Are Reserved.</div>
        </footer>      
      {/* footer 스타일링 */}
      <style jsx>{
        `
        .footer{
          background-color:yellow;
        }
        .footer-upper{
          display:flex;
          justify-content: space-between;
          padding: 30px 10px;
          border-bottom: 1px solid #000;
        }
        .footer-menu-item{
          margin: 0 10px;
        }
        .footer-menu-item.active{
          color:red;
        }
        .footer-details{
          display:flex;
          justify-content: space-around;
          padding:0 20px;
        }
        .footer-detail{
          width: 25%;
        }
        span,p,a{
          cursor:pointer;
        }
        .footer-copyright{
          text-align:center;
          background-color:#fff;
        }
        `
      }

      </style>
      </>
      )}