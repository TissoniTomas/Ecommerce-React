import {useState, useEffect} from "react"
import ItemCard from "../ItemCard/ItemCard";

const itemListContainer = ({section, data}) => {

  
  const [dataFilter, setDataFilter] = useState([])

useEffect(()=>{

  switch(section){
    case "clothing" :{
      const dataFiltered = data.filter((item)=> item.category === "men's clothing" || item.category === "women's clothing");
      console.log(dataFiltered);
      setDataFilter(dataFiltered);
      break;
    }

    case "electronics" :{
      const dataFiltered = data.filter((item)=> item.category === "electronics");
      console.log(dataFiltered);
      setDataFilter(dataFiltered);
      break;

    }
    default:{
      setDataFilter(data)
      console.log(data);
    
    }
  }
    },[section ,data])

  return (
    <>
    
   
    <div className="grid grid-cols-1 gap-10" >
      {dataFilter.map((item) => (
          <div key={item.id}>
            
            <ItemCard data={item} />
                      
          </div>
        ))}
    </div>
        
        </>
  );
};
  
  


export default itemListContainer;
