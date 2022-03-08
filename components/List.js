import { useRouter } from "next/router"

export default function List({products}){
    const router= useRouter();
    const handleItemClick =(id)=>{
        router.push(`/detail/${id}`)
    }
    return(
      <>
        {
            products && products.map(product=>{
                return(
                    <div key={product.id} onClick={()=>handleItemClick(product.id)}>
                        <img src={product.image_link}></img>
                        <strong>{product.name}</strong>
                        <span>{product.product_type}</span>
                        <strong>${product.price}</strong>
                    </div>
                )
            })
        }
      </>
    )
}