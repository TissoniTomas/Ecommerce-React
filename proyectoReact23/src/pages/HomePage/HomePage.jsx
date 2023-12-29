import {useState, useEffect} from "react";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";




const HomePage = () => {

  const [data, setData] = useState([])

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      setData(json)
      console.log(json)});
    }, []);
    
    
  return (
    <>
      <main id="main">
        <h1 className="font-Montserrat text-6xl hover:bg-black hover:text-white">MEN'S & WOMEN'S</h1>
        <ItemListContainer  data ={data} section="clothing" />

        <h2 className="font-Montserrat text-6xl hover:bg-black hover:text-white">ELECTRONICS</h2>



        <ItemListContainer data ={data} section="electronics" />
      </main>
    </>
  );
};

export default HomePage;
