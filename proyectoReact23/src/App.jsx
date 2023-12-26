import { useState, useEffect } from "react";
import Header from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemCardOferta from "./components/ItemCardOferta/ItemCardOferta";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../remeras.json")
      .then((res) => res.json())
      .then((resp) => setData(resp));
  });
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-red-800 font-bold m-20">
          PRODUCTOS DESTACADOS
        </h1>

          <ItemListContainer data={data} showDestacados={true} />

          <h2 className="text-4xl text-red-800 font-bold m-20">
            OFERTAS DEL MES
          </h2>
          <ItemCardOferta data = {data} showOfertas = {true}/>

        
      </main>
    </>
  );
};

export default App;
