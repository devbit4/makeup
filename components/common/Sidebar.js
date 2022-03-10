import clsx from "clsx";
import { useRouter } from "next/router";

export default function Sidebar({ menus, title }) {
  const router = useRouter();
  const query = router.query.section || router.query.brand || "all";

  const handleClick = (menu) => {
    router.push(`/${title}/${menu}`);
  };

  return (
    <ul className="menus">
      {menus &&
        query &&
        menus.map((menu, index) => (
          <li
            key={index}
            className={clsx("menu", menu === query ? "active" : "")}
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
          margin-bottom: 10px;
          cursor: pointer;
          font: 400 14px/1 "roboto";
        }
        .menu.active {
          color: #fff;
        }
      `}</style>
    </ul>
  );
}
