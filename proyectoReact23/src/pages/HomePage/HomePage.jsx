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
      <main className="flex flex-col items-center">
        <h1 className="font-Montserrat text-4xl hover:bg-black hover:text-white mt-20">
          MEN'S & WOMEN'S
        </h1>
        <ItemListContainer data={data} section="clothing" />

        <h2 className="font-Montserrat text-4xl hover:bg-black hover:text-white mt-20">
          ELECTRONICS
        </h2>

        <ItemListContainer data={data} section="electronics" />
      </main>
    </>
  );
};

export default HomePage;
