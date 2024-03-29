import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Breadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathNames = router.asPath.split('/');
    pathNames.shift();
    const pathNameArray = pathNames.map((path, index) => {
      return {
        href: '/' + pathNames.slice(0, index + 1).join('/'),
        pathName: path,
      };
    });
    setBreadcrumbs(pathNameArray);
  }, [router]);

  return (
    <>
      <div className='breadcrumb'>
        <ul className='breadcrumb-inner'>
          <li className='breadcrumb-home'>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb) => {
            return (
              <li key={breadcrumb.href} className='breadscrumb-route'>
                <Link href={breadcrumb.href}>
                  <a>{breadcrumb.pathName}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .breadcrumb {
          width: 100%;
        }
        .breadcrumb-inner {
          width: 1180px;
          display: flex;
          margin: 0 auto;
          padding-left: 20px;
        }
        li:last-child a {
          color: #333;
        }
        a {
          display: block;
          margin: 5px 0;
          font: 400 16px/1 'roboto';
          color: #aaa;
        }
        li:not(:last-child) a::after {
          margin-right: 5px;
          content: ' >';
        }

        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .breadcrumb-inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
