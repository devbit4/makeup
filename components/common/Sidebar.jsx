import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Sidebar({ menus }) {
  const router = useRouter();

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
                  className='depth1-item'
                  onClick={() => {
                    handleClick(menu);
                  }}
                >
                  <strong>{menu.name}</strong>
                  <ul className='depth2'>
                    {menu.children &&
                      menu.children.map((child) => {
                        return (
                          <Link href={child.path}>
                            <a>
                              <li key={child.path} className='depth2-item'>
                                <span>> {child.name}</span>
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
        .depth2-item {
          margin: 20px;
          cursor: pointer;
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
