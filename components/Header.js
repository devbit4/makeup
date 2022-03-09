import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className="header">
        <div className="inner">
          <Link href="/">
            <a>
              <div className="header-logo">
                <FontAwesomeIcon icon={faFan} size={"2xl"} />
                <span className="header-logo-title">Sephora</span>
              </div>
            </a>
          </Link>
          <nav className="header-menu">
            <Link href="/about">
              <a
                className={clsx(
                  "header-menu-item",
                  router.pathname === "/about" ? "active" : ""
                )}
              >
                About
              </a>
            </Link>
            <Link href="/brands/clinique">
              <a
                className={clsx(
                  "header-menu-item",
                  router.pathname === "/brands/[brand]" ? "active" : ""
                )}
              >
                Brands
              </a>
            </Link>
            <Link href="/makeup">
              <a
                className={clsx(
                  "header-menu-item",
                  router.pathname === "/makeup" ? "active" : ""
                )}
              >
                Makeup
              </a>
            </Link>
            <Link href="/community/faq">
              <a
                className={clsx(
                  "header-menu-item",
                  router.pathname === "/community/[section]" ? "active" : ""
                )}
              >
                Community
              </a>
            </Link>
          </nav>
          <div className="header-toggle-button" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
      <div className="header-search-box">
        <div className="header-search-inner">
          <input
            type="text"
            className="search-box-input"
            placeholder="화장품을 입력하세요"
          ></input>
          <button className="search-box-button">Search!</button>
        </div>
      </div>

      {/* Header 스타일 */}
      <style jsx>{`
        .header {
          width: 100%;
          height: 80px;
          background-color: #f5f2ee;
          color: #000;
        }
        .inner {
          width: 1180px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }
        .header-logo {
          display: flex;
          align-items: center;
        }
        .header-logo-title {
          font: 500 28px/1 "fredoka";
          margin-left: 10px;
        }
        .header-menu {
          display: flex;
        }
        .header-menu-item {
          padding: 8px;
          margin: 0 10px;
          cursor: pointer;
          font: 400 16px/1 "fredoka";
        }
        .header-menu-item.active {
          color: #b46927;
        }
        .header-toggle-button {
          cursor: pointer;
          display: none;
        }
        .header-search-box {
          background-color: #f5f2ee;
        }
        .header-search-inner {
          width: 1180px;
          margin: 0 auto;
          display: flex;
          justify-content: end;
          padding: 0 20px 20px 20px;
        }
        .search-box-input {
          width: 250ox;
          outline: none;
          border: none;
        }
        .search-box-button {
          width: 80px;
          height: 20px;
          margin-left: 10px;
          border: none;
          cursor: pointer;
          background-color: #aaa;
          font: 400 12px/1 "fredoka";
          color: #fff;
        }

        // <tablet 구간>
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
          .header-search-inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .inner {
            width: 100%;
          }
          .header-menu {
            display: none;
          }
          .header-toggle-button {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
