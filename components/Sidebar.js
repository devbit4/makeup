import clsx from "clsx";
import { useRouter } from "next/router";

export default function Sidebar({ menus, title }) {
  const router = useRouter();
  const section = router.query.section;
  console.log(section);
  const handleClick = (menu) => {
    router.push(`/${title}/${menu}`);
  };

  return (
    <ul className="menus">
      {menus &&
        section &&
        menus.map((menu, index) => (
          <li
            key={index}
            className={clsx("menu", section === menu ? "active" : "")}
            onClick={() => {
              handleClick(menu);
            }}
          >
            - {menu}
          </li>
        ))}
      <style jsx>{`
        .menus {
          margin-top: 20px;
        }
        .menu {
          margin-bottom: 10px;
          cursor: pointer;
        }
        .menu.active {
          color: #fff;
        }
      `}</style>
    </ul>
  );
}
