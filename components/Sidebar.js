import { useRouter } from "next/router";

export default function Sidebar({menus,title}) {
    const router = useRouter();
    const handleClick=(menu)=>{
        router.push(`/${title}/${menu}`)
    }

    return (
        <ul className="menus">
            {menus && menus.map((menu,index)=><li key={index} onClick={()=>{handleClick(menu)}}>{menu}</li>)}
        </ul>
    );
  }