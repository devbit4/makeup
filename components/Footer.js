import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <footer className="footer">
        <div className="footer-upper">
          <Link href="/">
            <a>
              <div className="logo" className="footer-logo">
                <FontAwesomeIcon icon={faFan} />
                <span className="footer-logo-title">Sephora</span>
              </div>
            </a>
          </Link>
          <div className="foooter-menu">
            <Link href="/about">
              <a
                className={clsx(
                  "footer-menu-item",
                  router.pathname === "/about" ? "active" : ""
                )}
              >
                About
              </a>
            </Link>
            <Link href="/brands/maybelline">
              <a
                className={clsx(
                  "footer-menu-item",
                  router.pathname === "/brands/[brand]" ? "active" : ""
                )}
              >
                Brands
              </a>
            </Link>
            <Link href="/makeup">
              <a
                className={clsx(
                  "footer-menu-item",
                  router.pathname === "/makeup" ? "active" : ""
                )}
              >
                Makeup
              </a>
            </Link>
            <Link href="/community/faq">
              <a
                className={clsx(
                  "footer-menu-item",
                  router.pathname === "/community/[section]" ? "active" : ""
                )}
              >
                Community
              </a>
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
            <li className="footer-detail">
              <span>Social</span>
              <p>Instagram</p>
              <p>Pinterest</p>
              <p>Twitter</p>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-copyright">&copy; All Rights Are Reserved.</div>
      {/* footer 스타일링 */}
      <style jsx>
        {`
          .footer {
            padding: 10vh 12vw;
            background-color: #e5e0e0;
          }
          .footer-upper {
            display: flex;
            justify-content: space-between;
            padding: 30px 10px;
            border-bottom: 1px solid #000;
            padding-bottom: 30px;
          }
          .footer-logo {
            display: flex;
            align-items: center;
          }
          .footer-logo-title {
            font: 500 24px/1 "fredoka";
            margin-left: 10px;
          }
          .footer-menu-item {
            margin: 0 10px;
            cursor: pointer;
            font: 400 12px/1 "fredoka";
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
            font: 400 12px/1.4 "roboto";
          }
          .footer-detail span {
            display: block;
            font: 700 12px/1.4 "roboto";
            margin-bottom: 10px;
          }
          .footer-copyright {
            text-align: center;
            background-color: #000;
            padding: 10px 0;
            color: #fff;
            font: 400 8px/1.4 "roboto";
          }
          // <tablet 구간>
          @media screen and (max-width: 768px) {
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
