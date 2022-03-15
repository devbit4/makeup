import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faBars } from '@fortawesome/free-solid-svg-icons';
import { MENUS } from '../../constatns';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
  const router = useRouter();
  const [folded, setFolded] = useState(true);

  const handleClick = () => {
    setFolded(!folded);
  };

  return (
    <>
      <header className='header'>
        <div className='header-inner'>
          <Link href='/'>
            <a>
              <div className='header-logo'>
                <FontAwesomeIcon icon={faFan} size={'2xl'} />
                <span className='header-logo-title'>Sephora</span>
              </div>
            </a>
          </Link>
          <nav className={clsx('header-menu', folded && 'invisible')}>
            {MENUS.map((menu, index) => {
              return (
                <Link href={menu.link} key={index}>
                  <a
                    className={clsx(
                      'header-menu-item',
                      (router.pathname === menu.pathname && 'active') ||
                        (router.pathname === menu.pathname2 && 'active')
                    )}
                  >
                    {menu.name}
                  </a>
                </Link>
              );
            })}
          </nav>
          <div className='header-toggle-button' onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
      <style jsx>{`
        .header {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 2;
          background-color: #f5f2ee;
          color: #000;
        }
        .header-inner {
          width: 1180px;
          margin: 0 auto;
          padding: 30px 20px 20px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-logo {
          display: flex;
          align-items: center;
        }
        .header-logo-title {
          font: 500 28px/1 'fredoka';
          margin-left: 10px;
        }
        .header-menu {
          display: flex;
        }
        .header-menu-item {
          padding: 8px;
          margin: 0 10px;
          cursor: pointer;
          font: 400 16px/1 'fredoka';
        }
        .header-menu-item:hover {
          color: #b46927;
        }
        .header-menu-item.active {
          color: #b46927;
        }
        .header-toggle-button {
          position: absolute;
          top: 40px;
          right: 50px;
          cursor: pointer;
          display: none;
        }
        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .header-inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .header-inner {
            flex-direction: column;
          }
          .header-logo {
            margin-bottom: 20px;
          }
          .header-menu {
            width: 100%;
            flex-direction: column;
            text-align: center;
          }
          .header-menu-item {
            width: 100%;
            border-top: 1px dashed #ccc;
          }
          .header-menu.invisible {
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
