import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

export default function Sidebar() {
    const router = useRouter();

    return (
        <>
            <aside>
                <nav className="sidebar-menu">                
                    <Link href="/about">
                        <a className={clsx("sidebar-menu-item", router.pathname === "/about"? "active":"")} >About</a>            
                    </Link>
                    <Link href="/catalog">
                        <a className={clsx("sidebar-menu-item", router.pathname === "/catalog"? "active":"")} >Catalog</a>   
                    </Link>
                    <Link href="/location">
                        <a className={clsx("sidebar-menu-item", router.pathname === "/location"? "active":"")}>Location</a>
                    </Link>
                    <Link href="/community">
                        <a className={clsx("sidebar-menu-item", router.pathname === "/community"? "active":"")} >Community</a>
                    </Link>
                </nav>
            </aside>

            {/* Sidebar 스타일링 */}
        <style jsx>{
            `
            .sidebar-menu{
                padding:0;
                display:flex;
                flex-direction:column;
            }
            .sidebar-menu-item.active{
                color:red;
            }
            `
        }
        </style>
      </>
    );
  }