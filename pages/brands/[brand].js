import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";

export default function Brands(){
    const router=useRouter();
    const brands=["maybelline", "clinique", "misa", "stila"];
    const [products,setProducts]=useState([]);
    const brand= router.query.brand;
    const url= `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;    
    const getData=()=>{
        fetch(url)
        .then(data=>data.json())
        .then(json=>setProducts(json))
    }
    useEffect(()=>{
        brand&& getData();
    },[brand])
      return(
        <div className="wrapper">
            <div className="sidebar">
                <h1>All brands</h1>
                <Sidebar menus={brands} title={"brands"}></Sidebar>
            </div>
            <div className="main">
                <h1>All Brands Items</h1>    
                <List products={products}></List>
            </div>
            <style jsx>{
            `
            .wrapper{
                display:flex;
            }
            .sidebar{
                width:20%;
                border:1px solid #000;
            }
            .main{
                width:80%;
                border:1px solid #000;
            }
            
            `
            }
            </style>            
        </div>
    )
}
