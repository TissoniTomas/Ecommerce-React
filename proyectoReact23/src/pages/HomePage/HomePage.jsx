import { useState, useEffect } from "react";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";


const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-Montserrat text-center">Men's & Woman's</h1>
        <ItemListContainer section= "clothing" data={data}/>





      </main>
    </>
  );
};

export default HomePage;
