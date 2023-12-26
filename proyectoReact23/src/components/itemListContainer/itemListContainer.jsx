import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard"
import "./itemListContainer.css"

const MainCardProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("../../../remeras.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
  
    }
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id}>
          <ItemCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default MainCardProducts;
