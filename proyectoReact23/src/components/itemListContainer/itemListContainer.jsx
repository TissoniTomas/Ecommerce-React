import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

const itemListContainer = ({ section, gamesData }) => {
  const [gamesDataFilter, setgamesDataFilter] = useState([]);

  useEffect(() => {
    switch (section) {
      case "destacados": {
        const dataFiltered = gamesData.filter(
          (item) =>
            item.destacado 
        );
        console.log(dataFiltered);
        setgamesDataFilter(dataFiltered);

        break;
      }

      case "ofertas": {
        const dataFiltered = gamesData.filter(
          (item) => item.oferta
        );
        console.log(dataFiltered);
        setgamesDataFilter(dataFiltered);
        break;
      }
      default: {
        setgamesDataFilter(gamesData);
        console.log(gamesData);
      }
    }
  }, [section, gamesData]);

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 grid-rows-1 lg:grid-cols-3 animate-fade-down animate-duration-[3000ms] animate-delay-1000">
        {gamesDataFilter.map((item) => (
          <div className="content-center justify-items-stretch shadow-2xl" key={item.id}>
            <ItemCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default itemListContainer;
