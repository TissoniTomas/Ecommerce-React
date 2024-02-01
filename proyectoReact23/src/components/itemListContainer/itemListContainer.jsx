// React Hooks
import { useState, useEffect } from "react";
// Componentes
import ItemCard from "../ItemCard/ItemCard";

const itemListContainer = ({ section, gamesData }) => {
  //Hooks & Context
  const [gamesDataFilter, setgamesDataFilter] = useState([]);
  useEffect(() => {
    switch (section) {
      case "destacados": {
        const dataFiltered = gamesData.filter((item) => item.destacado);
        setgamesDataFilter(dataFiltered);
        break;
      }

      case "ofertas": {
        const dataFiltered = gamesData.filter((item) => item.oferta);
        setgamesDataFilter(dataFiltered);
        break;
      }
      default: {
        setgamesDataFilter(gamesData);
      }
    }
  }, [section, gamesData]);

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 grid-rows-1 lg:grid-cols-3 animate-fade-down animate-duration-[3000ms] animate-delay-1000">
        {gamesDataFilter.map((item) => (
          <div
            className="content-center justify-items-stretch shadow-2xl"
            key={item.id}
          >
            <ItemCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default itemListContainer;
