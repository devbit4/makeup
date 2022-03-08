export default function Makeup(){
    const types=["blush", "eyebrow", "foundation"];
    return(
        <>
            <div className="wrapper">
            <div className="sidebar">
                <ul className="brands">
                    <h1>Types</h1>
                {
                    types.map((type,index)=>{
                        return(
                            <li key={index} className="brand">{type}</li>
                        )
                    })
                }
                </ul>
            </div>
            <div className="main">
                <h1>All Items</h1>    
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
        </>
    )
}