import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function Sidebar({ menus }) {
  const router = useRouter();
  const parentPathName = router.asPath.split('/').slice(0, 3).join('/');

  const parentMenuName = (menu) => {
    return menu.path.split('/').slice(0, 3).join('/');
  };
  const handleClick = (menu) => {
    router.push(menu.path);
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
                  className={clsx(
                    'depth1-item',
                    parentPathName === menu.path ||
                      parentPathName === parentMenuName(menu)
                      ? 'active'
                      : ''
                  )}
                  onClick={() => {
                    handleClick(menu);
                  }}
                >
                  <strong>{menu.name}</strong>
                  {parentPathName === parentMenuName(menu) && menu.children && (
                    <ul className='depth2'>
                      {menu.children.map((child) => {
                        return (
                          <li
                            key={child.path}
                            className={clsx(
                              'depth2-item',
                              router.asPath === child.path && 'active'
                            )}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClick(child);
                            }}
                          >
                            <span> - {child.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
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
        .depth1-item.active strong {
          color: #fff;
        }
        .depth1-item:hover strong {
          color: #fff;
        }
        .depth2-item {
          margin: 20px;
          cursor: pointer;
        }
        .depth2-item.active span {
          color: #fff;
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
