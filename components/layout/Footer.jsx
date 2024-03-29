import { useRouter } from 'next/router';
import { MENUS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import clsx from 'clsx';

export default function Footer() {
  const router = useRouter();
  const footerDetail = [
    {
      title: 'Working Time',
      sub1: 'Monday-Saturday',
      sub3: '09:00-18:00',
      sub4: '09:00-11:00',
    },
    {
      title: 'Address',
      sub1: '198 West 21th street Suite',
      sub3: 'New York,NY 10010',
      sub4: 'Canada,CA 12210',
    },
    {
      title: 'Website Policies',
      sub1: 'Terms&Conditions',
      sub3: 'Privacy policy',
      sub4: 'Accessibility',
    },
    {
      title: 'Social',
      sub1: 'Instagram',
      sub3: 'Pinterest',
      sub4: 'Twitter',
    },
  ];
  const parentPathName = router.asPath.split('/').slice(0, 2).join('/');

  const parentMenuName = (menu) => {
    return menu.path.split('/').slice(0, 2).join('/');
  };

  return (
    <>
      <footer className='footer'>
        <div className='footer-inner'>
          <div className='footer-upper'>
            <div className='footer-logo'>
              <Link href='/'>
                <a>
                  <FontAwesomeIcon icon={faFan} size={'xl'} />
                  <span className='footer-logo-title'>Sephora</span>
                </a>
              </Link>
            </div>
            <div className='footer-menu'>
              {MENUS.map((menu) => {
                return (
                  <Link href={menu.path} key={menu.path}>
                    <a
                      className={clsx(
                        'footer-menu-item',
                        parentPathName === parentMenuName(menu) && 'active'
                      )}
                    >
                      {menu.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='footer-lower'>
            <ul className='footer-details'>
              {footerDetail.map((detail, index) => {
                return (
                  <li className='footer-detail' key={index}>
                    <span>{detail.title}</span>
                    <p>{detail.sub1}</p>
                    <p>{detail.sub2}</p>
                    <p>{detail.sub3}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='footer-copyright'>&copy; All Rights Are Reserved.</div>
      </footer>
      <style jsx>
        {`
          .footer {
            width: 100%;
            background-color: #e5e0e0;
          }
          .footer-inner {
            width: 1180px;
            margin: 0 auto;
            padding: 40px;
          }
          .footer-upper {
            display: flex;
            justify-content: space-between;
            padding: 30px 10px;
            border-bottom: 1px solid #000;
            padding-bottom: 30px;
          }
          .footer-lower {
            padding-bottom: 20px;
          }
          .footer-logo {
            display: flex;
            align-items: center;
          }
          .footer-logo-title {
            font: 500 24px/1 'fredoka';
            margin-left: 10px;
          }
          .footer-menu-item {
            margin: 0 10px;
            cursor: pointer;
            font: 400 14px/1 'fredoka';
          }
          .footer-menu-item:hover {
            color: #b46927;
          }
          .footer-menu-item.active {
            color: #b46927;
          }
          .footer-lower {
            padding-top: 20px;
          }
          .footer-details {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
          }
          .footer-detail {
            width: 25%;
          }
          .footer-detail p,
          a {
            cursor: pointer;
            font: 400 14px/1.4 'roboto';
          }
          .footer-detail span {
            display: block;
            font: 700 14px/1.4 'roboto';
            margin-bottom: 10px;
          }
          .footer-copyright {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            background-color: #000;
            padding: 10px 0;
            color: #fff;
            font: 400 8px/1.4 'roboto';
          }
          // 반응형 구간
          @media screen and (max-width: 1180px) {
            .footer-inner {
              width: 100%;
            }
          }
          @media screen and (max-width: 768px) {
            .footer-menu {
              display: none;
            }
            .footer-details {
              flex-wrap: wrap;
            }
            .footer-detail {
              width: 50%;
              margin-top: 10px;
            }
            .footer-copyright {
              text-align: center;
              background-color: #000;
            }
          }
        `}
      </style>
    </>
  );
}
