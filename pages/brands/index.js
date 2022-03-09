import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";

export default function Brands(){
    const brands=["maybelline","clinique", "misa", "stila"];
    const [products,setProducts]=useState();
    
    const url= "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    
    const getData=()=>{
        fetch(url)
        .then(data=>data.json())
        .then(json=>setProducts(json))
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <div className="wrapper">
            <div className="sidebar">
                <h1>All brands</h1>
                <Sidebar menus={brands} title={"brands"}></Sidebar>
            </div>
            <div className="main">
                <h1>All Brands Items</h1>
                <Breadcrumbs></Breadcrumbs>    
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