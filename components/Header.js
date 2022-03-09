import { useState } from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faBars, } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }
  return (
    <>
    <header className="header">
        <Link href="/">
            <a>
              <div className="logo">
                <FontAwesomeIcon icon={faFan} />
                <span>Sephora</span>
              </div>
            </a>
        </Link>
        <nav className="header-menu">                
                <Link href="/about">
                    <a className={clsx("header-menu-item", router.pathname === "/about"? "active":"")} >About</a>            
                </Link>
                <Link href="/brands/misa">
                    <a className={clsx("header-menu-item", router.pathname === "/brands/[brand]"? "active":"")} >Brands</a>   
                </Link>
                <Link href="/makeup">
                    <a className={clsx("header-menu-item", router.pathname === "/makeup"? "active":"")}>Makeup</a>
                </Link>
                <Link href="/community/faq">
                    <a className={clsx("header-menu-item", router.pathname === "/community/[section]"? "active":"")} >Community</a>
                </Link>
        </nav>
        <div className="header-toggle-button" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
    </header>
    <div className="header-search-box">
      <input type="text" className="search-box-input"></input>
      <button className="search-box-button">Search!</button>
    </div>

    {/* Header 스타일 */}
    <style jsx>{
      `
      .header{
        width: 100%; 
        height: 10vh;
        background-color: yellow;
        display:flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        padding: 0 12vw;
      }
      .header-logo{
        display:flex;
        align-items: center;
      }
      .header-menu{
        display:flex;
      }
      .header-menu-item{
        padding: 8px;
        margin: 0 10px;
        cursor: pointer;
      }
      .header-menu-item.active{
        color:red;
      }
      .header-toggle-button{
        cursor:pointer;
        display:none;
      }
      .header-search-box{
        display:flex;
        justify-content:end;
        margin:10px;
        padding: 0 12vw;
      }

      // <tablet 구간>
      @media screen and (max-width: 768px){
        .header-menu{
          display:none;
        }
        .header-toggle-button{
          display:block;
        }
      }
      `
    }</style>
    </>
    
  );
}