import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

export default function Sidebar({ menus }) {
  const router = useRouter();
  const parentPathname = router.pathname.split('/').slice(0, 3).join('/');
  console.log(router.pathname);

  const handleClick = (menu) => {
    if (menu.children !== undefined) return;
    router.push(menu.path);
    console.log(menu.path);
  };

  return (
    <>
      <div className='sidebar'>
        <ul className='depth1'>
          {menus &&
            menus.map((menu) => {
              return (
                <li
                  key={menu.path}
                  className={clsx('depth1-item')}
                  onClick={() => {
                    handleClick(menu);
                  }}
                >
                  <strong>{menu.name}</strong>
                  <ul className='depth2'>
                    {menu.children &&
                      menu.children.map((child) => {
                        return (
                          <Link href={child.path} key={child.path}>
                            <a>
                              <li
                                className={clsx(
                                  'depth2-item'
                                  // router.pathname === menu.path ? 'active' : ''
                                )}
                              >
                                <span> - {child.name}</span>
                              </li>
                            </a>
                          </Link>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
      <style jsx>{`
        .sidebar {
          padding: 30px 0 0 0;
        }
        .depth1-item {
          border-bottom: 1px solid #777;
          padding: 10px 0;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .depth1-item strong {
          font: 400 18px/1 'roboto';
          transition: all 0.3s;
        }
        .depth1-item:hover strong {
          color: #fff;
        }
        .depth1-item.active strong {
          color: red;
        }
        .depth2-item {
          margin: 20px;
          cursor: pointer;
        }
        .depth2-item.active span {
          color: red;
        }
        .depth2-item span {
          font: 400 16px/1 'roboto';
          color: #444;
          transition: all 0.3s;
        }
        .depth2-item:hover span {
          color: #fff;
        }
      `}</style>
    </>
  );
}
