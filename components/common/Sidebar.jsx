import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function Sidebar({ menus, title }) {
  const router = useRouter();
  const query = router.query.section || router.query.brand || 'all';

  const handleClick = (menu) => {
    router.push(`/${title}/${menu}`);
  };

  return (
    <ul className='menus'>
      {menus &&
        query &&
        menus.map((menu, index) => (
          <li
            key={index}
            className={clsx('menu', menu === query && 'active')}
            onClick={() => {
              handleClick(menu);
            }}
          >
            - {menu}
          </li>
        ))}
      <style jsx>{`
        .menus {
          margin-top: 40px;
        }
        .menu {
          margin-bottom: 20px;
          cursor: pointer;
          font: 400 14px/1 'roboto';
          padding-bottom: 10px;
          border-bottom: 1px solid #777;
        }
        .menu.active {
          color: #fff;
        }
      `}</style>
    </ul>
  );
}
