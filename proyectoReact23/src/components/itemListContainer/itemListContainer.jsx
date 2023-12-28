
import ItemCard from "../ItemCard/ItemCard";
import "./itemListContainer.css";
import {Link} from "react-router-dom"

const itemListContainer = ({data}) => {

  const dataFiltered = data.filter((item)=> item.category === "men's clothing" || item.category === "women's clothing" )
  console.log(dataFiltered);

 
  
  return (
    <>
     <main id="main" >
        <h1 className="main--title" >
          MEN & WOMAN
        </h1>
   
    <div className="main--grid" >
      {dataFiltered.map((item) => (
          <div key={item.id}>
            <Link to ={`/product/detail/${item.id}`} >
            <ItemCard data={item} />
            
            </Link>
          </div>
        ))}
    </div>
        </main>
        </>
  );
};
  
  


export default itemListContainer;
