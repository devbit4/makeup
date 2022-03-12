import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Breadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();
      const pathArray = linkPath.map((path, index) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, index + 1).join('/'),
        };
      });
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
      <ol className='breadcrumb'>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li key={breadcrumb.href} className='breadscrumb-text'>
              <Link href={breadcrumb.href}>
                <a>{breadcrumb.breadcrumb}</a>
              </Link>
            </li>
          );
        })}
      </ol>
      <style jsx>{`
        .breadcrumb {
          display: flex;
        }
        .breadscrumb-text {
          margin-right: 5px;
          margin-bottom: 10px;
          font: 400 16px/1 'roboto';
          color: #aaa;
        }
        .breadscrumb-text::after {
          margin-right: 5px;
          content: ' >';
        }
      `}</style>
    </>
  );
}
