export default function List({products}){
    return(
      <>
        {
            products && products.map(product=>{
                return(
                    <div key={product.id}>
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