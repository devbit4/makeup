import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function Detail(){
    const router= useRouter();
    const id = router.query.id
    const [item,setItem] =useState();
    const url=`http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`;
    
    const getData=()=>{
        fetch(url)
        .then(data=>data.json())
        .then(json=>setItem(json))
    }
    
    useEffect(()=>{
       id && getData()
    },[id])
    return(
        <>
            {
                item && 
                <div>
                    <div>
                        <img src={item.image_link}></img>
                    </div>
                    <strong>{item.name}</strong>
                    <strong>${item.price}</strong>
                    <span>{item.category}</span>
                    <span>{item.product_type}</span>
                    <p>{item.description}</p>
                </div>
            }
        </>
    )
}