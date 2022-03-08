import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }
  return (
    <>
    <header className="header">
        <div className="header-logo">
          <img src="" alt="logo"></img>
        </div>
        <ul className="header-menu">
            <li className="header-menu-item">About</li>
            <li className="header-menu-item">Catalog</li>
            <li className="header-menu-item">Location</li>
            <li className="header-menu-item">Coummunity</li>
        </ul>
        <div className="header-toggle-button" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
    </header>
    <div className="search-box">
      <input type="text" className="search-box-input"></input>
      <button className="search-box-button">Search!</button>
    </div>
    {
      toggle
      ?
      <Sidebar></Sidebar>
      :
      null
    }


    {/* header 스타일 */}
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
      .header-toggle-button{
        cursor:pointer;
        display:none;
      }

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