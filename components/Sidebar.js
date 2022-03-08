import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

export default function Sidebar({menus}) {
    const router = useRouter();
    console.log(menus);

    return (
        <>
        {
            menus.map((menu,index)=>(<div></div>))
        }
        </>
    );
  }