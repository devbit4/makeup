import ListTest from "../../components/ListTest"

export default function Makeup({products}){
    console.log(products)
    return(
        <>
            <ListTest products={products} ></ListTest>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique")
    const products = await res.json()
    return{
        props:{
            products,
        }
    }
}