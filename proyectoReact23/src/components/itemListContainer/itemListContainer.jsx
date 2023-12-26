
import ItemCard from "../ItemCard/ItemCard";
import "./itemListContainer.css";

const itemListContainer = ({data, showDestacados}) => {

  const filteredData = showDestacados ? data.filter((item) => item.isDestacado === true) : data ;
  

 
  return (
   
    <div className="grid grid-cols-3 grid-rows-2 gap-6 ">
      {filteredData
        .map((item) => (
          <div key={item.id}>
            <ItemCard data={item} />
          </div>
        ))}
    </div>
  );
};
  
  


export default itemListContainer;
