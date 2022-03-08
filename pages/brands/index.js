export default function Brands(){
    const brands=["clinique", "misa", "stila"];

    return(
        <div className="wrapper">
            <div className="sidebar">
                <ul className="brands">
                    <h1>Brands</h1>
                {
                    brands.map((brand,index)=>{
                        return(
                            <li key={index} className="brand">{brand}</li>
                        )
                    })
                }
                </ul>
            </div>
            <div className="main">
                <h1>All Brands Items</h1>    
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