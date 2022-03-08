import { useState } from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }
  return (
    <>
    <header className="header">
        <div className="header-logo">
          <img src="" alt="logo"></img>
        </div>
        <nav className="header-menu">                
                <Link href="/about">
                    <a className={clsx("header-menu-item", router.pathname === "/about"? "active":"")} >About</a>            
                </Link>
                <Link href="/catalog">
                    <a className={clsx("header-menu-item", router.pathname === "/catalog"? "active":"")} >Catalog</a>   
                </Link>
                <Link href="/location">
                    <a className={clsx("header-menu-item", router.pathname === "/location"? "active":"")}>Location</a>
                </Link>
                <Link href="/community">
                    <a className={clsx("header-menu-item", router.pathname === "/community"? "active":"")} >Community</a>
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
        padding: 10px 20px;
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