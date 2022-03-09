import { useRouter } from "next/router"

export default function Detail({item}){
    const router =useRouter();
    if(router.isFallback){
        return <h1>loading</h1>
    }
    
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

export async function getStaticPaths(){
    const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique")
    const data = await res.json()
return{
    paths: data.slice(0,9).map(item=>(
        {
            params: {
                id: item.id.toString()
            }
        }
    )),
   
    fallback: true
}
}

export async function getStaticProps(context){
    const id = context.params.id;
    const res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`)
    const item = await res.json()
    return{
        props:{
            item,
        }
    }
}